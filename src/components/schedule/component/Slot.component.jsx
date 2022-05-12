import React from 'react';
import { Space, Tag, Typography } from 'antd';
import { SLOT_IS_CLOSE, SLOT_IS_OPEN } from '../../../constants/AppConst';
import moment from 'moment';

const { Text, Title } = Typography;
const CloseSlotComponent = (props) => {
  const { data } = props;
  return (
    <>
      <Text type='secondary' strong style={{ padding: '1px' }}>
        Slot đã bị đóng
      </Text>
      <Tag color='processing' style={{ fontSize: '0.6rem' }}>
        {moment(data?.startDate).format('LT')} > {moment(data?.endDate).format('LT')}
      </Tag>
    </>
  );
};
const OpenSlotComponent = (props) => {
  const { data } = props;
  return (
    <>
      <Text type='secondary' strong style={{ padding: '1px' }}>
        Slot đang mở
      </Text>
      <Tag color='processing' style={{ fontSize: '0.6rem' }}>
        {moment(data?.startDate).format('LT')} > {moment(data?.endDate).format('LT')}
      </Tag>
    </>
  );
};
const FullSlotComponent = (props) => {
  const { data } = props;
  return (
    <>
      <Text type='secondary' strong style={{ padding: '1px' }}>
        Slot đã được đặt
      </Text>
      <Tag color='processing' style={{ fontSize: '0.6rem' }}>
        {moment(data?.startDate).format('LT')} > {moment(data?.endDate).format('LT')}
      </Tag>
    </>
  );
};
const SlotComponent = (props) => {
  const { data } = props;
  return (
    <>
      {data.status === SLOT_IS_OPEN ? (
        <OpenSlotComponent data={data} />
      ) : data.status === SLOT_IS_CLOSE ? (
        <CloseSlotComponent data={data} />
      ) : (
        <FullSlotComponent data={data} />
      )}
    </>
  );
};
export default SlotComponent;
