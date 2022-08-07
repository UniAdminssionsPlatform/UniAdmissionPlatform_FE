import { SLOT } from '../../../constants/AppConst';
import { Badge, Tag, Typography } from 'antd';
import React from 'react';
import moment from 'moment';
import { COLOR_HIPPIES } from '../../../constants/Color';

const { Text } = Typography;
const CloseSlotComponent = (props) => {
  const { data } = props;
  return (
    <>
      <Text type='secondary' strong style={{ padding: '1px', color: 'white' }}>
        Slot Đóng
      </Text>
    </>
  );
};
const OpenSlotComponent = (props) => {
  const { data } = props;
  return (
    <>
      <Text type='secondary' strong style={{ padding: '1px', color: 'white', marginTop: '100px' }}>
        Slot Mở
      </Text>
    </>
  );
};
const FullSlotComponent = (props) => {
  const { data } = props;
  return (
    <>
      <Text type='secondary' strong style={{ padding: '1px', color: 'white' }}>
        Slot đầy
      </Text>
    </>
  );
};
const SlotComponent = (props) => {
  const { data } = props;
  return (
    <>
      {data.status === SLOT.OPEN ? (
        <Badge.Ribbon text={moment(data?.startDate).format('LT')} color={COLOR_HIPPIES}>
          <OpenSlotComponent data={data} />
        </Badge.Ribbon>
      ) : data.status === SLOT.CLOSE ? (
        <Badge.Ribbon text={moment(data?.startDate).format('LT')} color={COLOR_HIPPIES}>
          <CloseSlotComponent data={data} />
        </Badge.Ribbon>
      ) : (
        <Badge.Ribbon text={moment(data?.startDate).format('LT')} color={COLOR_HIPPIES}>
          <FullSlotComponent data={data} />
        </Badge.Ribbon>
      )}
    </>
  );
};
export default SlotComponent;
