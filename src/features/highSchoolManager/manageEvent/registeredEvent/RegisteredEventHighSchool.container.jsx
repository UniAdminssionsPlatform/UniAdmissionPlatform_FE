import {
  Button,
  Form,
  Modal,
  Pagination,
  Space,
  Table,
  Tag,
  Typography,
  notification,
  Layout,
  Divider,
  Tooltip,
  Popover
} from 'antd';
import { EVENT_CHECK } from '../../../../constants/AppConst';
import {
  approveAEventService,
  getListEventCheckService,
  rejectAEventService
} from '../../../../services/AdminHighSchoolService/AdminHighSchoolEventCheck';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { refactorDataSlotEventCheckID } from '../../../../utils/common';
import DetailEventComponent from '../../../../components/detailEvent/DetailEvent.component';
import React, { useEffect, useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import TitlePageComponent from '../../../../components/decorator/TitlePage.component';
import moment from 'moment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PreviewIcon from '@mui/icons-material/Preview';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import { COLOR_ICON, COLOR_ICON_REJECT } from '../../../../constants/Color';
import SingleEventContainer from '../../../public/singleEventFeature/SingleEvent.container';
const RegisteredEventHighSchoolContainer = () => {
  const [requestPayload, setRequestPayload] = useState();
  const [forceLoad, setForceLoad] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);
  const [currentSelectedEvent, setCurrentSelectedEvent] = useState({});
  const [idEventCheck, setIdEventCheck] = useState();
  const [data, setData] = useState();
  const payload = {
    page: requestPayload?.page ? requestPayload.page : 1,
    limit: requestPayload?.limit ? requestPayload.limit : 10,
    status: ''
  };
  const getListEventCheckRegistered = () => {
    getListEventCheckService(payload)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {});
  };
  const handleOpenModal = (data, value) => {
    setIsModalVisible(true);
    setIdEventCheck(data.eventCheckId);
  };
  const handleApproveEvent = (data) => {
    approveAEventService(data.eventCheckId)
      .then((res) => {
        notification.success({
          message: 'Thành công',
          description: 'Chấp nhận sự kiện thành công'
        });
        setForceLoad(Math.random());
      })
      .catch((err) =>
        notification.error({
          message: 'Thất bại',
          description: `Chấp nhận sự kiện thất bại${err}`
        })
      );
  };
  const confirmApproveEvent = (value) => {
    Modal.confirm({
      title: 'Xác thực',
      icon: <ExclamationCircleOutlined />,
      content: 'Chấp nhận sự kiện này ?',
      okText: 'Có',
      cancelText: 'Không',
      onOk() {
        handleApproveEvent(value);
      },
      onCancel() {}
    });
  };
  const handleViewDetailEvent = (data) => {
    setCurrentSelectedEvent(data);
    setIsSecondModalVisible(true);
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
      width: '15%'
    },
    {
      title: 'Thời gian đăng ký',
      dataIndex: 'eventCreateAt',
      render: (eventCreateAt) => `${eventCreateAt ? moment(eventCreateAt).format('LLL') : ''}`,
      width: '10%'
    },
    {
      title: 'Thời gian bắt đầu',
      dataIndex: 'startTime',
      render: (startTime) => `${startTime ? moment(startTime).format('LLL') : ''}`,
      width: '10%'
    },
    {
      title: 'Thời gian kết thúc',
      dataIndex: 'endTime',
      render: (endTime) => `${endTime ? moment(endTime).format('LLL') : ''}`,
      width: '10%'
    },
    {
      title: 'Trạng thái',
      dataIndex: 'eventCheckStatus',
      render: (type) => {
        if (type === EVENT_CHECK.Approved) return <Tag color='green'>Sự kiện đã chấp nhận</Tag>;
        if (type === EVENT_CHECK.PENDING) return <Tag color='cyan'>Sự kiện đang chờ duyệt</Tag>;
        if (type === EVENT_CHECK.REJECT) return <Tag color='purple'>Sự kiện đã từ chối</Tag>;
      },
      width: '10%'
    },
    {
      title: 'Hành động',
      dataIndex: 'status',
      render: (eventCheckStatus, data) => (
        <Space direction='horizontal' style={{ width: '100%', justifyContent: 'center' }}>
          <Tooltip title='Xem chi tiết sự kiện'>
            <PreviewIcon
              onClick={() => handleViewDetailEvent(data)}
              style={{ fontSize: '2rem', cursor: 'pointer', color: COLOR_ICON }}
            />
          </Tooltip>

          <Divider type={'vertical'} />
          {data.eventCheckStatus === EVENT_CHECK.Approved ? (
            <Tooltip title='Sự kiện đã được chấp thuận'>
              <ThumbUpIcon style={{ fontSize: '2rem', cursor: 'pointer', color: COLOR_ICON }} />
              <Divider type={'vertical'} />
              <Text type={'secondary'}>Sự kiện đã chấp nhận</Text>
            </Tooltip>
          ) : null}
          {data.eventCheckStatus === EVENT_CHECK.REJECT ? (
            <Popover content={data.reason} title='Lý do từ chối' trigger='click'>
              <Tooltip title='Nhấp vào để xem lý do từ chối'>
                <ThumbDownIcon style={{ fontSize: '2rem', cursor: 'pointer', color: COLOR_ICON_REJECT }} />
                <Divider type={'vertical'} />
                <Text type={'secondary'}>Sự kiện đã từ chối</Text>
              </Tooltip>
            </Popover>
          ) : null}
          {data.eventCheckStatus === EVENT_CHECK.PENDING ? (
            <>
              <Tooltip title='Chấp thuận sự kiện'>
                <CheckCircleIcon
                  onClick={() => confirmApproveEvent(data)}
                  style={{ fontSize: '2rem', cursor: 'pointer', color: COLOR_ICON }}
                />
              </Tooltip>

              <Divider type={'vertical'} />
              <Tooltip title='Từ chối sự kiện'>
                <UnpublishedIcon
                  danger
                  onClick={() => handleOpenModal(data)}
                  style={{ fontSize: '2rem', cursor: 'pointer', color: COLOR_ICON_REJECT }}
                />
              </Tooltip>
            </>
          ) : null}
        </Space>
      ),
      width: '15%'
    }
  ];
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleOkSecondModal = () => {
    setIsSecondModalVisible(false);
  };
  const handleCancelSecondModal = () => {
    setIsSecondModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  useEffect(() => getListEventCheckRegistered(), [requestPayload, forceLoad]);
  const onShowSizeChange = (page, limit) => {
    setRequestPayload({
      ...requestPayload,
      page,
      limit
    });
  };
  const { Title, Text } = Typography;
  const onFinish = (data) => {
    const payload = {
      id: idEventCheck,
      reason: data.reason
    };
    rejectAEventService(payload)
      .then((res) => {
        notification.success({
          message: 'Thành công',
          description: 'Từ chối sự kiện thành công'
        });
        setForceLoad(Math.random());
      })
      .catch((err) =>
        notification.error({
          message: 'Thất bại',
          description: `Từ chối sự kiện thất bại${err}`
        })
      );
  };
  return (
    <Layout>
      <Modal
        title='Thôn tin chi tiết sự kiện'
        visible={isSecondModalVisible}
        onOk={handleOkSecondModal}
        onCancel={handleCancelSecondModal}
        footer={null}
        width={'80vw'}>
        <SingleEventContainer eventId={currentSelectedEvent.id} loading={false} />
      </Modal>
      <Modal
        title='Từ chối tổ chức sự kiện'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}>
        <Title level={4}>Gửi góp ý sửa đổi nội dung</Title>
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 24 }} layout='horizontal' onFinish={onFinish}>
          <Form.Item name={'reason'} rules={[{ required: true, message: 'Vui lòng điền vào' }]}>
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 16 }}>
            <Button type='primary' htmlType='submit'>
              Gửi
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Space direction={'vertical'}>
        <TitlePageComponent
          title={'Xét duyệt sự kiện'}
          subTitle={
            'Bạn có thể tìm kiếm sự kiện cần được xét duyệt bằng tên. Thực hiện thao tác xét duyệt trong panel dưới đây'
          }
        />
        <Table
          columns={column}
          dataSource={refactorDataSlotEventCheckID(data)}
          bordered={true}
          size='middle'
          style={{ width: '100rem' }}
          pagination={false}
          loading={isLoading}
          scroll={{ y: 600 }}
        />
        {data?.total > 10 ? <Pagination showSizeChanger onChange={onShowSizeChange} total={data?.total} /> : null}
      </Space>
    </Layout>
  );
};

export default RegisteredEventHighSchoolContainer;
