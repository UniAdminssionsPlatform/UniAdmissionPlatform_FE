import { Button, Input, Modal, Pagination, Select, Space, Table, Tag, notification, Divider, Drawer } from 'antd';
import { EVENT, EVENT_HS, EVENT_ONLINE, EVENT_ORG, EVENT_UNI } from '../../../constants/AppConst';
import { getListEventForUniversity } from '../../../services/GetListEventForUniversity';
import { refactorData } from '../../../utils/common';
import { useSelector } from 'react-redux';
import { useStateWithCallback } from '../../../components/CustomHOOK/SyncUseState';
import DetailEventComponent from '../../../components/detailEvent/DetailEvent.component';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import PreviewIcon from '@mui/icons-material/Preview';
import EditIcon from '@mui/icons-material/Edit';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { COLOR_ICON } from '../../../constants/Color';
import { ENDPOINT_REPORT_GET_STUDENT_RECORD_SETTING } from '../../../constants/Endpoints/ReportEndpoint';
import SingleEventContainer from '../../public/singleEventFeature/SingleEvent.container';
import { ExclamationCircleTwoTone } from '@ant-design/icons';
import UpdateEventContainer from './UpdateEvent.container';

const ListEventCreatedContainer = (props) => {
  const [listEventRegister, setListEventRegister] = useState();
  const [currentSelectedEvent, setCurrentSelectedEvent] = useState({});
  const [eventId, setEventId] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useSelector((state) => state.authentication);
  const [resource, setResource] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };
  const onCloseDrawer = () => {
    setIsDrawerVisible(false);
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
  const notifyNotEditable = () => {
    Modal.confirm({
      title: 'Cảnh báo',
      icon: (
        <ExclamationCircleTwoTone
          twoToneColor='#ff9d52'
          style={{
            fontSize: '32px'
          }}
        />
      ),
      content: `Bạn không thể chỉnh sửa sự kiện này`,
      okText: 'ok',
      cancelText: 'Đóng',
      onOk() {},
      onCancel() {}
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
      render: (data) => (
        <Space direction='horizontal' style={{ width: '100%', justifyContent: 'center' }}>
          <PreviewIcon
            onClick={() => {
              setCurrentSelectedEvent(data);
              showModal();
            }}
            style={{ cursor: 'pointer', color: COLOR_ICON }}
            className={`hover:fill-neutral-100`}
          />
          <Divider type={'vertical'} />
          {data.status === EVENT.INIT ? (
            <EditIcon
              onClick={() => {
                showDrawer();
                setEventId(data);
              }}
              style={{ cursor: 'pointer', color: COLOR_ICON }}
              className={`hover:fill-neutral-100`}
            />
          ) : (
            <EditIcon
              onClick={() => notifyNotEditable(data)}
              style={{ cursor: 'pointer', color: COLOR_ICON }}
              className={`hover:fill-red-500`}
            />
          )}

          <Divider type={'vertical'} />
          <AssessmentIcon style={{ cursor: 'pointer', color: COLOR_ICON }} className={`hover:fill-neutral-100`} />
        </Space>
      ),
      width: '10%'
    }
  ];
  const handleShowReport = (data) => {
    setResource(`${ENDPOINT_REPORT_GET_STUDENT_RECORD_SETTING}?event-id=${data.id}&token=${user.token}`);
    showModal();
  };
  useEffect(() => console.log(currentSelectedEvent), [currentSelectedEvent]);
  const onShowSizeChange = (page, PageSize) => {
    setDataSearch({ ...dataSearch, page, limit: PageSize });
  };
  return (
    <div>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={'80vw'}>
        <SingleEventContainer eventId={currentSelectedEvent?.id} />
      </Modal>
      <Drawer
        title='Chỉnh sửa sự kiện'
        placement='right'
        size='large'
        onClose={onCloseDrawer}
        visible={isDrawerVisible}>
        <UpdateEventContainer eventId={eventId} />
      </Drawer>
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
          size={'small'}
          columns={column}
          dataSource={refactorData(listEventRegister?.list)}
          bordered={true}
          pagination={false}
          loading={isLoading}
          style={{ width: '85vw' }}
          scroll={{ x: 700, y: 544 }}
        />
        {listEventRegister?.total > 10 ? (
          <Pagination showSizeChanger onChange={onShowSizeChange} total={listEventRegister?.total} />
        ) : null}
      </Space>
    </div>
  );
};
export default ListEventCreatedContainer;
