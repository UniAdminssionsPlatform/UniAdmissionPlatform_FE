import React from 'react';
import { Layout, Skeleton, Space, Tag, Typography } from 'antd';
import { useSelector } from 'react-redux';
import ScheduleEventCheckHighSchoolComponent from './ScheduleEventCheckHighSchool.component';
const HighSchoolCalendarComponent = () => {
  const { Title, Text } = Typography;
  const { listEventCheck, isFetching } = useSelector((state) => state.listEventCheckHighSchool);
  return (
    <Layout>
      <div className='flex flex-col space-y-8 xl:space-y-0 xl:flex-row'>
        <div className='flex-shrink-0 max-w-xl xl:w-80 xl:pr-8'>
          <Space direction='vertical' size='small' style={{ display: 'flex' }}>
            <Title level={3} strong>
              Lịch sự kiện
            </Title>
            <Tag
              color='#2db7f5'
              style={{
                width: '15rem',
                height: '3rem',
                textAlign: 'center',
                alignContent: 'center',
                padding: '0.8rem 0'
              }}>
              <Text strong style={{ color: 'white', fontSize: '0.8rem' }}>
                Sự kiện đã diễn ra
              </Text>
            </Tag>
            <Tag
              color='#87d068'
              style={{
                width: '15rem',
                height: '3rem',
                textAlign: 'center',
                alignContent: 'center',
                padding: '0.8rem 0'
              }}>
              <Text strong style={{ color: 'white', fontSize: '0.8rem' }}>
                Sự kiện đã hủy
              </Text>
            </Tag>
            <Tag
              color='#108ee9'
              style={{
                width: '15rem',
                height: '3rem',
                textAlign: 'center',
                alignContent: 'center',
                padding: '0.8rem 0'
              }}>
              <Text strong style={{ color: 'white', fontSize: '0.8rem' }}>
                Sự kiện đang chờ phê duyệt
              </Text>
            </Tag>
          </Space>
        </div>
        <div className='flex-grow'>
          {isFetching ? <Skeleton active /> : <ScheduleEventCheckHighSchoolComponent listEventCheck={[]} />}
        </div>
      </div>
    </Layout>
  );
};
export default HighSchoolCalendarComponent;
