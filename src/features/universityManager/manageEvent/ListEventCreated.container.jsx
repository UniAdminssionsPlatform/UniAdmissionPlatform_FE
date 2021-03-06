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
          message: 'L???y danh s??ch th??nh c??ng',
          description: `Tr???ng th??i truy v???n: Th??nh c??ng!`
        });
      })
      .catch((err) => {
        notification.error({
          message: 'L???y danh s??ch th???t b???i',
          description: `L???i: ${err.message}`
        });
      });
  };
  const column = [
    {
      title: 'T??n S??? ki???n',
      dataIndex: 'name',
      render: (name) => `${name}`,
      width: '20%'
    },
    {
      title: 'Di???n gi???',
      dataIndex: 'hostName',
      render: (name) => `${name}`,
      width: '10%'
    },
    {
      title: 'Lo???i s??? ki???n',
      dataIndex: 'eventTypeId',
      render: (type) => {
        if (type === EVENT_ONLINE) return <Tag color='#f50'>S??? ki???n online</Tag>;
        if (type === EVENT_HS) return <Tag color='#2db7f5'>S??? ki???n t??? ch???c t???i tr?????ng c???p 3</Tag>;
        if (type === EVENT_UNI) return <Tag color='#87d068'>S??? ki???n t??? ch???c t???i tr?????ng ?????i h???c</Tag>;
        if (type === EVENT_ORG) return <Tag color='#108ee9'>S??? ki???n t??? ch???c t???i doanh nghi???p</Tag>;
      },
      width: '15%'
    },
    {
      title: 'Tr???ng th??i',
      dataIndex: 'status',
      render: (type) => {
        if (type === EVENT.INIT) return <Tag color='green'>S??? ki???n ???????c kh???i t???o</Tag>;
        if (type === EVENT.ON_GOING) return <Tag color='cyan'>S??? ki???n s???p di???n ra</Tag>;
        if (type === EVENT.DONE) return <Tag color='purple'>S??? ki???n ???? k???t th??c</Tag>;
        if (type === EVENT.CANCEL) return <Tag color='orange'>S??? ki???n b??? h???y</Tag>;
      },
      width: '10%'
    },
    {
      title: 'Th???i gian b???t ?????u',
      dataIndex: 'startTime',
      render: (startTime) => `${startTime ? moment(startTime).locale('vi').format('LLL') : ''}`,
      width: '10%'
    },
    {
      title: 'Th???i gian k???t th??c',
      dataIndex: 'endTime',
      render: (endTime) => `${endTime ? moment(endTime).locale('vi').format('LLL') : ''}`,
      width: '10%'
    },
    {
      title: 'H??nh ?????ng',
      render: (status, data) => (
        <Space>
          <Button type={'primary'} danger onClick={() => showModal(data)}>
            Xem chi ti???t
          </Button>
          <Button type={'primary'} onClick={() => showModal(data)}>
            C???p nh???t
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
        <Search placeholder='Nh???p t??n s??? ki???n' style={{ width: 300 }} onSearch={handleChangeEventName} />
        <Search placeholder='Nh???p t??n di???n gi???' style={{ width: 300 }} onSearch={handleChangeEventHost} />
        <Select defaultValue={0} onChange={handleChangeEvent} style={{ width: 200 }}>
          <Option value={0}>Ch???n lo???i s??? ki???n</Option>
          <Option value={1}>Online</Option>
          <Option value={2}>T???? ch????c ta??i tr??????ng</Option>
          <Option value={3}>T???? ch????c ta??i ??a??i Ho??c</Option>
          <Option value={4}>T??? ch???c t???i doanh nghi???p</Option>
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
