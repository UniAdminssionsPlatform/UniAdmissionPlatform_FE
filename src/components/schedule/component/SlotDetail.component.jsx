import { Button, Descriptions, Tag } from 'antd';
import { SLOT_IS_CLOSE, SLOT_IS_FULL, SLOT_IS_OPEN } from '../../../constants/AppConst';
import React from 'react';
import moment from 'moment';

const SlotDetailComponent = (props) => {
  const { slotSelected, handleUpdateOpenSlot, handleUpdateCloseSlot } = props;
  return (
    <>
      <Descriptions bordered>
        <Descriptions.Item label='Thời gian bắt đầu' span={3}>
          {moment(slotSelected.startDate).format('MMMM Do YYYY, h:mm:ss a')}
        </Descriptions.Item>
        <Descriptions.Item label='Thời gian kết thúc' span={3}>
          {moment(slotSelected.endDate).format('MMMM Do YYYY, h:mm:ss a')}
        </Descriptions.Item>
        <Descriptions.Item label='Đơn vị khai thác' span={3}>
          Hiện tại chưa implment
        </Descriptions.Item>
        <Descriptions.Item label='Thông tin sự kiện' span={3}>
          Hiện tại chưa implment
        </Descriptions.Item>
        <Descriptions.Item label='Trạng thái slot' span={3}>
          {slotSelected.status === SLOT_IS_CLOSE ? (
            <Tag color='error'>Slot đã đóng</Tag>
          ) : slotSelected.status === SLOT_IS_FULL ? (
            <Tag color='warning'>Slot đã được book</Tag>
          ) : (
            <Tag color='success'>Slot đang trống</Tag>
          )}
        </Descriptions.Item>
        {slotSelected.status === SLOT_IS_CLOSE ? (
          <Descriptions.Item label='Hành động' span={3}>
            <Button
              type='primary'
              onClick={() => {
                handleUpdateOpenSlot(slotSelected.id);
              }}>
              Mở Lại Slot
            </Button>
          </Descriptions.Item>
        ) : slotSelected.status === SLOT_IS_OPEN ? (
          <Descriptions.Item label='Hành động' span={3}>
            <Button
              type='primary'
              danger
              onClick={() => {
                handleUpdateCloseSlot(slotSelected.id);
              }}>
              Đóng Slot
            </Button>
          </Descriptions.Item>
        ) : null}
      </Descriptions>
    </>
  );
};
export default SlotDetailComponent;
