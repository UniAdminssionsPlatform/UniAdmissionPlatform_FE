import { EVENT_CHECK } from '../../../../constants/AppConst';
import { Divider, Input, Modal, Pagination, Popover, Space, Table, Tag, Tooltip, Typography } from 'antd';
import React, { useState } from 'react';
import moment from 'moment';
import { refactorDataSlotEventCheckID } from '../../../../utils/common';
import CancelIcon from '@mui/icons-material/Cancel';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { COLOR_ICON, COLOR_ICON_REJECT, COLOR_ICON_WARNING } from '../../../../constants/Color';
import SingleEventContainer from '../../../public/singleEventFeature/SingleEvent.container';
import PreviewIcon from '@mui/icons-material/Preview';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
const EventCheckComponent = (props) => {
  const { listEventCheck, onChange } = props;
  const { Text, Title } = Typography;
  const [eventCheck, setEventCheck] = useState();
  const { Search } = Input;
  const [isModalVisible, setIsModalVisible] = useState(false);
  // eslint-disable-next-line no-console
  const columns = [
    {
      title: 'Tên Sự Kiện',
      render: (record) => <p>{record.name}</p>,
      width: '20%'
    },
    {
      title: 'Ngày đăng ký',
      render: (record) => <p>{moment(record.eventCreateAt).format('LLL')}</p>,
      width: '10%'
    },
    {
      title: 'Trường đăng ký',
      render: (record) => <p>{moment(record.eventCreateAt).format('LLL')}</p>,
      width: '10%'
    },
    {
      title: 'Thời gian diễn ra',
      render: (record) => <p>{moment(record.startTime).format('LLL')}</p>,
      width: '10%'
    },
    {
      title: 'Thời gian kết thúc',
      render: (record) => <p>{moment(record.endTime).format('LLL')}</p>,
      width: '10%'
    },
    {
      title: 'Trạng thái',
      render: (record) => {
        if (record.status === EVENT_CHECK.Approved) {
          return (
            <>
              <CheckCircleIcon style={{ color: COLOR_ICON }} />
              <Divider type={'vertical'} />
              <Text type={'secondary'}>Sự kiện đã được chấp nhận</Text>
            </>
          );
        }
        if (record.status === EVENT_CHECK.PENDING) {
          return (
            <>
              <ChangeCircleIcon style={{ color: COLOR_ICON_WARNING }} />
              <Divider type={'vertical'} />
              <Text type={'secondary'}>Đã gửi yêu cầu tổ chức</Text>
            </>
          );
        }
        if (record.status === EVENT_CHECK.REJECT) {
          return (
            <>
              <CancelIcon style={{ color: COLOR_ICON_REJECT }} />
              <Divider type={'vertical'} />
              <Text type={'secondary'}>Sự kiện đã từ chối</Text>
            </>
          );
        }
      },
      width: '10%'
    },
    {
      title: 'Hành động',
      render: (record) => (
        <Space direction='horizontal' style={{ width: '100%', justifyContent: 'center' }}>
          <Tooltip title='Xem chi tiết sự kiện'>
            <PreviewIcon
              onClick={() => handleOpenModal(record)}
              style={{ fontSize: '2rem', cursor: 'pointer', color: COLOR_ICON }}
            />
          </Tooltip>
          {record.status === EVENT_CHECK.REJECT ? (
            <>
              <Divider type={'vertical'} />
              <Popover content={record.reason} title='Lý do từ chối' trigger='click'>
                <Tooltip title='Nhấp vào để xem lý do từ chối'>
                  <MarkUnreadChatAltIcon style={{ cursor: 'pointer', color: COLOR_ICON_REJECT }} />
                  <Divider type={'vertical'} />
                  <Text type={'secondary'}>Sự kiện đã từ chối</Text>
                </Tooltip>
              </Popover>
            </>
          ) : null}
        </Space>
      ),
      width: '15%'
    }
  ];
  const handleOpenModal = (data) => {
    setIsModalVisible(true);
    setEventCheck(data);
  };
  const handleOkSecondModal = () => {
    setIsModalVisible(false);
  };
  const handleCancelSecondModal = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Modal
        title='Thôn tin chi tiết sự kiện'
        visible={isModalVisible}
        onOk={handleOkSecondModal}
        onCancel={handleCancelSecondModal}
        footer={null}
        width={'80vw'}>
        <SingleEventContainer eventId={eventCheck?.id} loading={false} />
      </Modal>
      <Space direction={'vertical'}>
        <Search placeholder='Nhập tên sự kiện' style={{ width: 300 }} />
        <Table
          columns={columns}
          dataSource={refactorDataSlotEventCheckID(listEventCheck)}
          pagination={false}
          style={{ width: '85vw' }}
          scroll={{ x: 700, y: 450 }}
        />
        <Pagination showSizeChanger onChange={onChange} total={listEventCheck?.total} bordered={true} />
      </Space>
    </div>
  );
};
export default EventCheckComponent;
