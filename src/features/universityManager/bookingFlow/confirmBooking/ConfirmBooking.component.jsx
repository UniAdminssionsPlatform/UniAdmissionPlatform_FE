import { Button, Descriptions, Space, Typography, Collapse } from 'antd';
import moment from 'moment';
import React from 'react';
import MarkdownViewComponent from '../../../../components/MarkdownView/MarkdownView.component';

const ConfirmBookingComponent = (props) => {
  const { currenSlotSelected, currentEventSelected, handleSubmit } = props;
  const { Panel } = Collapse;
  const { Text, Title } = Typography;
  const onChange = () => {};
  return (
    <Space direction='vertical'>
      <br />
      <div>
        <Title level='3'>Thông tin đăng ký sự kiện</Title>
        <Text strong> {currentEventSelected?.shortDescription}</Text>
      </div>
      <div>
        <Descriptions title='Thông tin sự kiện' bordered layout='vertical'>
          <Descriptions.Item label={<Text strong>Tên sự kiện</Text>}>{currentEventSelected?.name}</Descriptions.Item>
          <Descriptions.Item label={<Text strong>Host chương trình</Text>}>
            {currentEventSelected?.hostName}
          </Descriptions.Item>
        </Descriptions>
        <Descriptions title={<Text strong>Thông tin slot đăng ký</Text>} bordered layout='vertical'>
          <Descriptions.Item label={<Text strong>Thời gian bắt đầu</Text>}>
            <Text strong>{moment(currenSlotSelected?.startDate).format('LLL')}</Text>
          </Descriptions.Item>
          <Descriptions.Item label={<Text strong>Thời gian kết thúc</Text>}>
            <Text strong>{moment(currenSlotSelected?.endDate).format('LLL')}</Text>
          </Descriptions.Item>
          <Descriptions.Item label={<Text strong>Đăng ký sự kiện</Text>}>
            <Button type={'primary'} onClick={handleSubmit} danger shape={'round'}>
              Đăng ký sự kiện
            </Button>
          </Descriptions.Item>
        </Descriptions>
        <br />
        <Collapse>
          <Panel header={<Text strong>Nội dung sự kiện</Text>} key='1'>
            <MarkdownViewComponent str={currentEventSelected?.description} />
          </Panel>
        </Collapse>
      </div>
    </Space>
  );
};
export default ConfirmBookingComponent;
