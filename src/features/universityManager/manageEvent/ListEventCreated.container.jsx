import { Button, Input, Modal, Pagination, Select, Space, Table, Tag, notification } from 'antd';
import { EVENT, EVENT_HS, EVENT_ONLINE, EVENT_ORG, EVENT_UNI } from '../../../constants/AppConst';
import { getListEventForUniversity } from '../../../services/GetListEventForUniversity';
import { refactorData } from '../../../utils/common';
import { useSelector } from 'react-redux';
import { useStateWithCallback } from '../../../components/CustomHOOK/SyncUseState';
import DetailEventComponent from '../../../components/detailEvent/DetailEvent.component';
import React, { useEffect, useState } from 'react';
import moment from 'moment';

const ListEventCreatedContainer = (props) => {
  const [listEventRegister, setListEventRegister] = useState();
  const [currentSelectedEvent, setCurrentSelectedEvent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useSelector((state) => state.authentication);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = (data) => {
    setCurrentSelectedEvent(data);
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const { Search } = Input;
  const { Option } = Select;
  const [dataSearch, setDataSearch] = useStateWithCallback({
    name: '',
    hostname: '',
    eventType: '',
    status: '',
    universityID: user?.universityId,
    page: 1,
    limit: 10
  });
  const handleChangeEvent = (data) => {
    if (data !== undefined && data !== 0) setDataSearch({ ...dataSearch, eventType: data });
    else setDataSearch({ ...dataSearch, eventType: '' });
  };
  const handleChangeEventName = (data) => {
    if (data !== undefined) setDataSearch({ ...dataSearch, name: data });
    else setDataSearch({ ...dataSearch, name: '' });
  };
  const handleChangeEventHost = (data) => {
    if (data !== undefined) setDataSearch({ ...dataSearch, hostname: data });
    else setDataSearch({ ...dataSearch, hostname: '' });
  };
  useEffect(() => {
    getEventForUniversity(dataSearch);
  }, [dataSearch]);

  const getEventForUniversity = (data) => {
    getListEventForUniversity(data)
      .then((result) => {
        setListEventRegister(result.data.data);
        setIsLoading(false);
        notification.success({
          message: 'Lấy danh sách thành công',
          description: `Trạng thái truy vấn: Thành công!`
        });
      })
      .catch((err) => {
        notification.error({
          message: 'Lấy danh sách thất bại',
          description: `Lỗi: ${err.message}`
        });
      });
  };
  const column = [
    {
      title: 'Tên Sự kiện',
      dataIndex: 'name',
      render: (name) => `${name}`,
      width: '20%'
    },
    {
      title: 'Diễn giả',
      dataIndex: 'hostName',
      render: (name) => `${name}`,
      width: '10%'
    },
    {
      title: 'Loại sự kiện',
      dataIndex: 'eventTypeId',
      render: (type) => {
        if (type === EVENT_ONLINE) return <Tag color='#f50'>Sự kiện online</Tag>;
        if (type === EVENT_HS) return <Tag color='#2db7f5'>Sự kiện tổ chức tại trường cấp 3</Tag>;
        if (type === EVENT_UNI) return <Tag color='#87d068'>Sự kiện tổ chức tại trường đại học</Tag>;
        if (type === EVENT_ORG) return <Tag color='#108ee9'>Sự kiện tổ chức tại doanh nghiệp</Tag>;
      },
      width: '15%'
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      render: (type) => {
        if (type === EVENT.INIT) return <Tag color='green'>Sự kiện được khởi tạo</Tag>;
        if (type === EVENT.ON_GOING) return <Tag color='cyan'>Sự kiện sắp diễn ra</Tag>;
        if (type === EVENT.DONE) return <Tag color='purple'>Sự kiện đã kết thúc</Tag>;
        if (type === EVENT.CANCEL) return <Tag color='orange'>Sự kiện bị hủy</Tag>;
      },
      width: '10%'
    },
    {
      title: 'Thời gian bắt đầu',
      dataIndex: 'startTime',
      render: (startTime) => `${startTime ? moment(startTime).locale('vi').format('LLL') : ''}`,
      width: '10%'
    },
    {
      title: 'Thời gian kết thúc',
      dataIndex: 'endTime',
      render: (endTime) => `${endTime ? moment(endTime).locale('vi').format('LLL') : ''}`,
      width: '10%'
    },
    {
      title: 'Hành Động',
      render: (status, data) => (
        <Space>
          <Button type={'primary'} danger onClick={() => showModal(data)}>
            Xem chi tiết
          </Button>
          <Button type={'primary'} onClick={() => showModal(data)}>
            Cập nhật
          </Button>
        </Space>
      ),
      width: '12%'
    }
  ];

  const onShowSizeChange = (page, PageSize) => {
    setDataSearch({ ...dataSearch, page, limit: PageSize });
  };
  return (
    <div>
      <Modal title='Basic Modal' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={'80vw'}>
        <DetailEventComponent event={currentSelectedEvent} loading={false} />
      </Modal>
      <Space>
        <Search placeholder='Nhập tên sự kiện' style={{ width: 300 }} onSearch={handleChangeEventName} />
        <Search placeholder='Nhập tên diễn giả' style={{ width: 300 }} onSearch={handleChangeEventHost} />
        <Select defaultValue={0} onChange={handleChangeEvent} style={{ width: 200 }}>
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
          pagination={false}
          loading={isLoading}
          style={{ width: '82vw' }}
        />
        {listEventRegister?.total > 10 ? (
          <Pagination showSizeChanger onChange={onShowSizeChange} total={listEventRegister?.total} />
        ) : null}
      </Space>
    </div>
  );
};
export default ListEventCreatedContainer;
