import { Avatar, Badge, Divider, List, Space, Spin, Typography } from 'antd';
import DetailEventContent from './DetailEventContent.component';
import DetailEventHeader from './DetailEventHeader.component';
import React from 'react';
import MakeDownView from '../MarkdownView/MarkdownView.component';
import WidgetHeading1 from '../commons/WidgetTags/WidgetHeading.component';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import moment from 'moment';
import GroupsIcon from '@mui/icons-material/Groups';
import { EVENT, EVENT_CHECK } from '../../constants/AppConst';
const DetailEventComponent = (props) => {
  const { event, loading } = props;
  const { Title, Text, Link } = Typography;
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  return (
    <>
      <div className={`nc-PageSingleTemplate3`} data-nc-id='PageSingleTemplate3'>
        <Spin tip='Đang tải...' spinning={loading} size='large'>
          <header className='relative pt-16 z-10 md:py-20 lg:py-28 bg-neutral-900 dark:bg-black'>
            {/* SINGLE HEADER */}
            <div className='dark container relative z-10'>
              <div className='max-w-screen-md'>
                <DetailEventHeader hiddenDesc metaActionStyle='style2' event={event} />
              </div>
            </div>
            {/* FEATURED IMAGE */}
            <div className='mt-8 md:mt-0 md:absolute md:top-0 md:right-0 md:bottom-0 md:w-1/2 lg:w-2/5 2xl:w-1/3'>
              <div className='hidden md:block absolute top-0 left-0 bottom-0 w-1/5 from-neutral-900 dark:from-black bg-gradient-to-r'></div>
              <img className='block w-full h-full object-cover' src={event?.thumbnailUrl} alt='eventImage' />
            </div>
          </header>
          {/* SINGLE MAIN CONTENT */}
          <div className='container flex flex-col my-10 lg:flex-row '>
            <div className='w-full'>
              <MakeDownView str={event.description} />
            </div>
            <div className='w-full mt-12 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3'>
              <div className='nc-WidgetTags rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 w-auto'>
                <WidgetHeading1 title='✨  Chi tiết về sự kiện' viewAll={{ label: 'View all' }} />
                <div className='flex flex-wrap p-4 xl:p-5'>
                  <Space direction={'vertical'}>
                    <Text type={'secondary'}>
                      Đơn vị tổ chức: <Text strong> {event.university.name}</Text>{' '}
                    </Text>
                    <Text type={'secondary'}>
                      Email:<Text strong> {event.university.websiteUrl}</Text>
                    </Text>
                    <Text type={'secondary'}>
                      Số điện thoại: <Text strong> {event.university.phoneNumber}</Text>
                    </Text>
                    <Divider />
                    {event.slots.length >= 1 ? (
                      <List
                        itemLayout='vertical'
                        size='small'
                        dataSource={event.slots.filter((event) => event.eventCheckStatus === EVENT_CHECK.Approved)}
                        renderItem={(item) => (
                          <List.Item.Meta
                            avatar={
                              <Avatar src='https://firebasestorage.googleapis.com/v0/b/uni-admission-platform.appspot.com/o/image%2F07b3c9ba-6b7c-4736-ab9d-a47bc31ca0888%2F9%2F2022%207%3A27%3A41%20PM.png?alt=media' />
                            }
                            title={<Text strong>{item.highSchoolName}</Text>}
                            description={
                              <Space direction={'vertical'}>
                                <Text>
                                  <LocationOnIcon /> <Divider type={'vertical'} />
                                  <Text strong> {item.highSchoolAddress}</Text>
                                </Text>
                                <Text>
                                  <EventAvailableIcon /> <Divider type={'vertical'} />
                                  <Text strong> {moment(item.startDate).format('LLL')}</Text>
                                </Text>
                                <Text>
                                  <EventBusyIcon /> <Divider type={'vertical'} />
                                  <Text strong> {moment(item.endDate).format('LLL')}</Text>
                                </Text>
                              </Space>
                            }
                          />
                        )}
                      />
                    ) : (
                      <>
                        {event.meetingUrl ? (
                          <Text>
                            <GroupsIcon /> <Divider type={'vertical'} />
                            <Link strong href={event.meetingUrl}>
                              Link meet tham gia event
                            </Link>
                          </Text>
                        ) : null}
                        <Text>
                          <LocationOnIcon /> <Divider type={'vertical'} />
                          <Text strong> {event?.university.address}</Text>
                        </Text>
                        <Text>
                          <EventAvailableIcon /> <Divider type={'vertical'} />
                          <Text strong> {moment(event?.startTime).format('LLL')}</Text>
                        </Text>
                        <Text>
                          <EventBusyIcon /> <Divider type={'vertical'} />
                          <Text strong> {moment(event?.endTime).format('LLL')}</Text>
                        </Text>
                      </>
                    )}
                  </Space>
                </div>
              </div>
            </div>
          </div>
          <DetailEventContent event={event} />
        </Spin>
      </div>
    </>
  );
};

export default DetailEventComponent;
