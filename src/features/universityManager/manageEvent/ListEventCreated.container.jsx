import {Button, Form, Input, notification, Pagination, Select, Space, Table, Tag, Typography} from 'antd';
import {bookASlotInAdminUniversity} from '../../../services/AdminUniversitySlotServices';
import {getListEventForUniversity} from '../../../services/GetListEventForUniversity';
import {refactorData} from '../../../utils/common';
import {useSelector} from 'react-redux';
import React, {useEffect, useRef, useState} from 'react';
import {EVENT_HS, EVENT_ONLINE, EVENT_ORG, EVENT_UNI} from "../../../constants/AppConst";
import {EVENT_ENUM} from "../../../enums/event.enum";
import Highlighter from 'react-highlight-words';
import {SearchOutlined} from "@ant-design/icons";

const ListEventCreatedContainer = (props) => {
    const {forceLoad} = props;
    const [listEventRegister, setListEventRegister] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const {user} = useSelector((state) => state.authentication);
    const {slot} = useSelector((state) => state.selectedSlot);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const {Option} = Select;
    const {Title} = Typography;
    const [dataSearch, setDataSearch] = useState({
        name: '',
        hostname: '',
        eventType: '',
        status: "",
        universityID: user?.universityId,
        page: 1,
        limit: 10
    });
    const handleOnFinish = (data) => {
        if (data.eventType !== undefined) {
            setDataSearch({...dataSearch,"eventType":data.eventType})
        }else{
            setDataSearch({...dataSearch,"eventType":""})
        }
        if (data.status !== undefined && data.status !== 5) {
            setDataSearch({...dataSearch,"status":data.status})
        }else{
            setDataSearch({...dataSearch,"status":""})
        }
    }
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        if(dataIndex === 'name'){
            setDataSearch({...dataSearch,"name":selectedKeys[0] ? selectedKeys[0] : ''})
        }
        if(dataIndex === 'hostname'){
            setDataSearch({...dataSearch,"hostname":selectedKeys[0]? selectedKeys[0] : ''})
        }
        confirm();
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined/>}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Tìm kiếm
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    useEffect(() => {
        getEventForUniversity(dataSearch);
    }, [dataSearch, forceLoad]);

    const getEventForUniversity = (data) => {
        getListEventForUniversity(data).then((result) => {
            setListEventRegister(result.data.data);
            setIsLoading(false);
            notification.success({
                message: "Lấy danh sách thành công",
                description: `Trạng thái truy vấn: Thành công!`
            });
        }).catch((err)=>{
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
            ...getColumnSearchProps('name')
        },
        {
            title: 'Diễn giả',
            dataIndex: 'hostName',
            render: (name) => `${name}`,
            width: '10%',
            ...getColumnSearchProps('hostName')
        },
        {
            title: 'Loại sự kiện',
            dataIndex: 'eventTypeId',
            render: (type) => {
                if (type === EVENT_ONLINE) return (<Tag color="blue">Sự kiện onlne</Tag>)
                if (type === EVENT_HS) return (<Tag color="green">Sự kiện tổ chức tại trường cấp 3</Tag>)
                if (type === EVENT_UNI) return (<Tag color="purple">Sự kiện tổ chức tại trường đại học</Tag>)
                if (type === EVENT_ORG) return (<Tag color="magenta">Sự kiện tổ chức tại doanh nghiệp</Tag>)
            },
            width: '20%'
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            render: (type) => {
                if (type === EVENT_ENUM.INIT) return (<Tag color="#f50">Sự kiện được khởi tạo</Tag>)
                if (type === EVENT_ENUM.ON_GOING) return (<Tag color="#2db7f5">Sự kiện sắp diễn ra</Tag>)
                if (type === EVENT_ENUM.DONE) return (<Tag color="#87d068">Sự kiện đã kết thúc</Tag>)
                if (type === EVENT_ENUM.CANCEL) return (<Tag color="#108ee9">Sự kiện bị hủy</Tag>)
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
                <Button onClick={() => handleEditEvent(data)} type={'primary'} danger>
                    Xem chi tiết
                </Button>
            ),
            width: '12%'
        }
    ];

    const onShowSizeChange = (page, PageSize) => {
        setDataSearch({...dataSearch, page, limit: PageSize});
    };
    const searchInput = useRef(null);

    return (
        <div className='flex flex-col space-y-8 xl:space-y-0 xl:flex-row'>
            <div className='flex-shrink-0 max-w-xl xl:w-80 xl:pr-8'>
                <Title level={2}>Tìm kiếm</Title>
                <Form onFinish={handleOnFinish} layout='vertical'>
                    <Form.Item name='eventType' label={'Loại sự kiện'}>
                        <Select defaultValue={0} placeholder='Loại Sự Kiện'>
                            <Option value={0}>Chọn loại sự kiện</Option>
                            <Option value={1}>Online</Option>
                            <Option value={2}>Tổ chức tại trường</Option>
                            <Option value={3}>Tổ chức tại Đại Học</Option>
                            <Option value={4}>Tổ chức tại doanh nghiệp</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name='status' label={'Trạng thái'}>
                        <Select defaultValue={5} placeholder='Trạng thái'>
                            <Option value={5}>Lựa chọn trạng thái sự kiện</Option>
                            <Option value={EVENT_ENUM.INIT}>Được khởi tạo</Option>
                            <Option value={EVENT_ENUM.ON_GOING}>Sắp diễn ra</Option>
                            <Option value={EVENT_ENUM.DONE}>Đã hoàn thành</Option>
                            <Option value={EVENT_ENUM.CANCEL}>Đã hủy</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type={'primary'} htmlType='submit'>
                            Tìm kiếm
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <Space direction={'vertical'}>
                <Table
                    columns={column}
                    dataSource={refactorData(listEventRegister?.list)}
                    bordered={true}
                    size='middle'
                    style={{width: '80rem'}}
                    pagination={false}
                    loading={isLoading}
                    scroll={{y: 600}}
                />
                <Pagination showSizeChanger onChange={onShowSizeChange} total={listEventRegister?.total}/>
            </Space>
        </div>
    );
};
export default ListEventCreatedContainer;
