import { Button, Descriptions, Space } from 'antd';
import React from 'react';

const ConfirmBookingComponent = (props) => {
  const { currenSlotSelected, currentEventSelected, handleSubmit } = props;
  return (
    <>
      <Descriptions title='Thông tin sự kiện' bordered layout='vertical'>
        <Descriptions.Item label='Tên sự kiện'>{currentEventSelected?.name}</Descriptions.Item>
        <Descriptions.Item label='Host chương trình'>{currentEventSelected?.hostName}</Descriptions.Item>
        <Descriptions.Item label='Chú giải'>{currentEventSelected?.description}</Descriptions.Item>
        <Descriptions.Item label='Chú thích'>{currentEventSelected?.shortDescription}</Descriptions.Item>
      </Descriptions>
      <Descriptions title='Thông tin Slot' bordered layout='vertical'>
        <Descriptions.Item label='Thời gian bắt đầu'>{currenSlotSelected?.startDate}</Descriptions.Item>
        <Descriptions.Item label='Thời gian kết thúc'>{currenSlotSelected?.endDate}</Descriptions.Item>
        <Descriptions.Item label='Đăng ký sự kiện'>
          <Button type={'primary'} onClick={handleSubmit} danger>
            Đăng ký sự kiện
          </Button>
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};
export default ConfirmBookingComponent;
