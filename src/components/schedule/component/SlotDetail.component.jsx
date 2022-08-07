import { Button, Descriptions, Divider, Space, Typography } from 'antd';
import { SLOT } from '../../../constants/AppConst';
import React from 'react';
import moment from 'moment';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { COLOR_ICON, COLOR_ICON_WARNING } from '../../../constants/Color';
const SlotDetailComponent = (props) => {
  const { slotSelected, handleUpdateFullSlot, handleUpdateCloseSlot, handleOpenASlot } = props;
  const { Text } = Typography;
  return (
    <>
      <Descriptions bordered>
        <Descriptions.Item label='Thời gian bắt đầu' span={3}>
          {moment(slotSelected?.startDate).format('MMMM Do YYYY, h:mm:ss a')}
        </Descriptions.Item>
        <Descriptions.Item label='Thời gian kết thúc' span={3}>
          {moment(slotSelected.endDate).format('MMMM Do YYYY, h:mm:ss a')}
        </Descriptions.Item>
        <Descriptions.Item label='Trạng thái slot' span={3}>
          {slotSelected.status === SLOT.CLOSE ? (
            <>
              <UnpublishedIcon style={{ color: 'red' }} />
              <Divider type={'vertical'} />
              <Text type={'secondary'}>Slot đã đóng</Text>
            </>
          ) : null}
          {slotSelected.status === SLOT.OPEN ? (
            <>
              <CheckCircleIcon style={{ color: COLOR_ICON }} />
              <Divider type={'vertical'} />
              <Text type={'secondary'}>Slot khả dụng</Text>
            </>
          ) : null}
          {slotSelected.status === SLOT.FULL ? (
            <>
              <ErrorIcon style={{ color: COLOR_ICON_WARNING }} />
              <Divider type={'vertical'} />
              <Text type={'secondary'}>Slot đã đầy</Text>
            </>
          ) : null}
        </Descriptions.Item>
        <Descriptions.Item label='Hành động' span={3}>
          <Space>
            {slotSelected.status === SLOT.OPEN ? (
              <Button
                type='primary'
                shape={'round'}
                danger
                onClick={() => {
                  handleUpdateCloseSlot(slotSelected.id);
                }}>
                Chuyển trạng thái đóng slot
              </Button>
            ) : null}
            {slotSelected.status === SLOT.OPEN ? (
              <Button
                type='primary'
                shape={'round'}
                onClick={() => {
                  handleUpdateFullSlot(slotSelected.id);
                }}>
                Chuyển trạng thái đầy
              </Button>
            ) : null}
            {slotSelected.status === SLOT.CLOSE || slotSelected.status === SLOT.FULL ? (
              <Button
                shape={'round'}
                type='primary'
                onClick={() => {
                  handleOpenASlot(slotSelected.id);
                }}>
                Mở slot
              </Button>
            ) : null}
          </Space>
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};
export default SlotDetailComponent;
