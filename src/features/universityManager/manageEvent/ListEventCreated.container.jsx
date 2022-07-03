import {Button, Form, Input, notification, Pagination, Select, Space, Table, Tag, Typography} from 'antd';
import {bookASlotInAdminUniversity} from '../../../services/AdminUniversitySlotServices';
import {getListEventForUniversity} from '../../../services/GetListEventForUniversity';
import {refactorData} from '../../../utils/common';
import {useSelector} from 'react-redux';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {EVENT, EVENT_HS, EVENT_ONLINE, EVENT_ORG, EVENT_UNI} from "../../../constants/AppConst";
import Highlighter from 'react-highlight-words';
import {SearchOutlined} from "@ant-design/icons";
import {useStateWithCallback} from "../../../components/CustomHOOK/SyncUseState";

const ListEventCreatedContainer = (props) => {
    const [listEventRegister, setListEventRegister] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const {user} = useSelector((state) => state.authentication);
    const {slot} = useSelector((state) => state.selectedSlot);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const {Search} = Input;
    const {Option} = Select;
    const {Title} = Typography;
    const [dataSearch, setDataSearch] = useStateWithCallback({
        name: '',
        hostname: '',
        eventType: "",
        status: "",
        universityID: user?.universityId,
        page: 1,
        limit: 10
    });
    const handleChangeEvent = (data) => {
        if (data !== undefined && data !== 0) {
            setDataSearch({...dataSearch, "eventType": data})
        } else {
            setDataSearch({...dataSearch, "eventType": ""})
        }
    }
    const handleChangeEventName = (data) => {
        if (data !== undefined) {
            setDataSearch({...dataSearch, "name": data})
        } else {
            setDataSearch({...dataSearch, "name": ""})
        }
    }
    const handleChangeEventHost = (data) => {
        if (data !== undefined) {
            setDataSearch({...dataSearch, "name": data})
        } else {
            setDataSearch({...dataSearch, "name": ""})
        }
    }
    useEffect(() => {
        getEventForUniversity(dataSearch);
    }, [dataSearch]);

    const getEventForUniversity = (data) => {
        getListEventForUniversity(data).then((result) => {
            setListEventRegister(result.data.data);
            setIsLoading(false);
            notification.success({
                message: "Lấy danh sách thành công",
                description: `Trạng thái truy vấn: Thành công!`
            });
        }).catch((err) => {
            notification.error({
                message: "Lấy danh sách thất bại",
                description: `Lỗi: ${err.message}`
            });
        });
    };
    const column = [
        {
            title: 'Tên Sự kiện',
            dataIndex: 'name',
            render: (name) => `${name}`,
            width: '20%',
        },
        {
            title: 'Diễn giả',
            dataIndex: 'hostName',
            render: (name) => `${name}`,
            width: '10%',
        },
        {
            title: 'Loại sự kiện',
            dataIndex: 'eventTypeId',
            render: (type) => {
                if (type === EVENT_ONLINE) return (<Tag color="#f50">Sự kiện onlne</Tag>)
                if (type === EVENT_HS) return (<Tag color="#2db7f5">Sự kiện tổ chức tại trường cấp 3</Tag>)
                if (type === EVENT_UNI) return (<Tag color="#87d068">Sự kiện tổ chức tại trường đại học</Tag>)
                if (type === EVENT_ORG) return (<Tag color="#108ee9">Sự kiện tổ chức tại doanh nghiệp</Tag>)
            },
            width: '20%'
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            render: (type) => {
                if (type === EVENT.INIT) return (<Tag color="green">Sự kiện được khởi tạo</Tag>)
                if (type === EVENT.ON_GOING) return (<Tag color="#2db7f5">Sự kiện sắp diễn ra</Tag>)
                if (type === EVENT.DONE) return (<Tag color="#87d068">Sự kiện đã kết thúc</Tag>)
                if (type === EVENT.CANCEL) return (<Tag color="#108ee9">Sự kiện bị hủy</Tag>)
            },
            width: '20%'
        },
        {
            title: 'Chú giải',
            dataIndex: 'shortDescription',
            render: (name) => `${name}`,
            width: '20%'
        },

        {
            title: 'Hành Động',
            render: (status, data) => (
                <Button  type={'primary'} danger>
                    Xem chi tiết
                </Button>
            ),
            width: '12%'
        }
    ];

    const onShowSizeChange = (page, PageSize) => {
        setDataSearch({...dataSearch, page, limit: PageSize});
    };
    return (

        <div>
            <Space>
                <Search placeholder="Nhập tên sự kiện" style={{width: 300}} onSearch={handleChangeEventName}/>
                <Search placeholder="Nhập tên diễn giả" style={{width: 300}} onSearch={handleChangeEventHost}/>
                <Select defaultValue={0} onChange={handleChangeEvent} style={{width: 200}}>
                    <Option value={0}>Chọn loại sự kiện</Option>
                    <Option value={1}>Online</Option>
                    <Option value={2}>Tổ chức tại trường</Option>
                    <Option value={3}>Tổ chức tại Đại Học</Option>
                    <Option value={4}>Tổ chức tại doanh nghiệp</Option>
                </Select>
            </Space>
            <Space direction={'vertical'}>
                <Table
                    columns={column}
                    dataSource={refactorData(listEventRegister?.list)}
                    bordered={true}
                    size='middle'
                    style={{width: '100rem'}}
                    pagination={false}
                    loading={isLoading}
                    scroll={{y: 600}}
                />
                {listEventRegister?.total > 10 ?  <Pagination showSizeChanger onChange={onShowSizeChange} total={listEventRegister?.total}/> : null}
            </Space>
        </div>
    );
};
export default ListEventCreatedContainer;
