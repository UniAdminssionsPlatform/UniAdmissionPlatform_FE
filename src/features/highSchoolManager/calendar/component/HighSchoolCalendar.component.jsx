import React from 'react';
import { Layout, Skeleton, Space, Tag, Typography } from 'antd';
import { useSelector } from 'react-redux';
import ScheduleEventCheckHighSchoolComponent from './ScheduleEventCheckHighSchool.component';
import {
  COLOR_EVENT_CANCEL,
  COLOR_EVENT_DENY,
  COLOR_EVENT_ON_GOING,
  COLOR_EVENT_REGISTERING
} from '../../../../constants/Color';
const HighSchoolCalendarComponent = () => {
  const { Title, Text } = Typography;
  const { listEventCheck, isFetching } = useSelector((state) => state.listEventCheckHighSchool);
  console.log(listEventCheck.data?.list);
  const parseListEvent = (data) => {
    const listEvent = [];
    data.map((event) => {
      listEvent.push({
        startDate: event.slot.startDate,
        endDate: event.slot.endDate,
        infor: event
      });
    });
    return listEvent;
  };
  return (
    <Layout>
      <div className='flex flex-col space-y-8 xl:space-y-0 xl:flex-row'>
        <div className='flex-shrink-0 max-w-xl xl:w-80 xl:pr-8'>
          <Space direction='vertical' size='small' style={{ display: 'flex' }}>
            <Title level={3} strong>
              Lịch sự kiện
            </Title>
            <Tag
              color={COLOR_EVENT_ON_GOING}
              style={{
                width: '15rem',
                height: '3rem',
                textAlign: 'center',
                alignContent: 'center',
                padding: '0.8rem 0'
              }}>
              <Text strong style={{ color: 'white', fontSize: '0.8rem' }}>
                Sự kiện sắp diễn ra
              </Text>
            </Tag>
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
              color={COLOR_EVENT_REGISTERING}
              style={{
                width: '15rem',
                height: '3rem',
                textAlign: 'center',
                alignContent: 'center',
                padding: '0.8rem 0'
              }}>
              <Text strong style={{ color: 'white', fontSize: '0.8rem' }}>
                Sự kiện đang đăng ký
              </Text>
            </Tag>
            <Tag
              color={COLOR_EVENT_DENY}
              style={{
                width: '15rem',
                height: '3rem',
                textAlign: 'center',
                alignContent: 'center',
                padding: '0.8rem 0'
              }}>
              <Text strong style={{ color: 'white', fontSize: '0.8rem' }}>
                Sự kiện đã từ chối
              </Text>
            </Tag>
            <Tag
              color={COLOR_EVENT_CANCEL}
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
          </Space>
        </div>
        <div className='flex-grow'>
          {isFetching ? (
            <Skeleton active />
          ) : (
            <ScheduleEventCheckHighSchoolComponent listEventCheck={parseListEvent(listEventCheck.data?.list)} />
          )}
        </div>
      </div>
    </Layout>
  );
};
export default HighSchoolCalendarComponent;
