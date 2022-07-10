import { Button, Form, Modal, Pagination, Space, Table, Tag, Typography, notification } from 'antd';
import { EVENT_CHECK } from '../../../../constants/AppConst';
import { approveAEvent, getListEventCheck, rejectAEvent } from '../../../../services/AdminHighSchoolEventCheck';
import { refactorData } from '../../../../utils/common';
import React, { useEffect, useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import TitlePageComponent from '../../../../components/decorator/TitlePage.component';

const RegisteredEventHighSchoolContainer = () => {
  const [requestPayload, setRequestPayload] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [idEventCheck, setIdEventCheck] = useState();
  const [data, setData] = useState();
  const payload = {
    page: requestPayload?.page ? requestPayload.page : 1,
    limit: requestPayload?.limit ? requestPayload.limit : 10
  };
  const getListEventCheckRegistered = () => {
    getListEventCheck(payload)
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleOpenModal = (data, value) => {
    setIsModalVisible(true);
    setIdEventCheck(data.id);
  };
  const handleApproveEvent = (data) => {
    approveAEvent(data.id)
      .then((res) => {
        notification.success({
          message: 'Thành công',
          description: 'Chấp nhận sự kiện thành công'
        });
      })
      .catch((err) =>
        notification.error({
          message: 'Thất bại',
          description: `Chấp nhận sự kiện thất bại${err}`
        })
      );
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
      title: 'Mô tả',
      dataIndex: 'description',
      render: (name) => `${name}`,
      width: '10%'
    },
    {
      title: 'Thời gian bắt đầu',
      dataIndex: 'startDate',
      render: (time) => `${time}`,
      width: '10%'
    },
    {
      title: 'Thời gian kết thúc',
      dataIndex: 'endDate',
      render: (time) => `${time}`,
      width: '10%'
    },
    {
      title: 'Hành động',
      dataIndex: 'status',
      render: (status, data) => (
        <Space>
          {status === EVENT_CHECK.Approved ? <Tag>Event đã chấp nhận</Tag> : null}
          {status === EVENT_CHECK.REJECT ? <Tag>Event đã từ chối</Tag> : null}
          {status === EVENT_CHECK.PENDING ? (
            <>
              <Button type={'primary'} onClick={() => handleApproveEvent(data)}>
                Chấp nhận
              </Button>
              <Button type={'primary'} danger onClick={() => handleOpenModal(data)}>
                Từ chối
              </Button>
            </>
          ) : null}
        </Space>
      ),
      width: '10%'
    }
  ];
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  useEffect(() => getListEventCheckRegistered(), []);
  const onShowSizeChange = () => {};
  const { Title, Text } = Typography;
  const onFinish = (data) => {
    const payload = {
      id: idEventCheck,
      reason: data.reason
    };
    rejectAEvent(payload)
      .then((res) => {
        notification.success({
          message: 'Thành công',
          description: 'Từ chối sự kiện thành công'
        });
      })
      .catch((err) =>
        notification.error({
          message: 'Thất bại',
          description: `Từ chối sự kiện thất bại${err}`
        })
      );
  };
  return (
    <>
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
          dataSource={refactorData(data?.list)}
          bordered={true}
          size='middle'
          style={{ width: '100rem' }}
          pagination={false}
          loading={isLoading}
          scroll={{ y: 600 }}
        />
        {data?.total > 10 ? <Pagination showSizeChanger onChange={onShowSizeChange} total={data?.total} /> : null}
      </Space>
    </>
  );
};

export default RegisteredEventHighSchoolContainer;
