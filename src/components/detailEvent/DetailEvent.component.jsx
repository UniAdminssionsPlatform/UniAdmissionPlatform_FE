import { Divider, Space, Spin, Typography } from 'antd';
import DetailEventContent from './DetailEventContent.component';
import DetailEventHeader from './DetailEventHeader.component';
import React from 'react';
import MakeDownView from '../MarkdownView/MarkdownView.component';
import WidgetHeading1 from '../commons/WidgetTags/WidgetHeading.component';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import moment from 'moment';
const DetailEventComponent = (props) => {
  const { event, loading } = props;
  console.log(event);
  const { Title, Text } = Typography;
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
              <div className='nc-WidgetTags rounded-3xl overflow-hidden bg-orange-200 dark:bg-neutral-800 w-96'>
                <WidgetHeading1 title='✨  Chi tiết về sự kiện' viewAll={{ label: 'View all' }} />
                <div className='flex flex-wrap p-4 xl:p-5'>
                  <Space direction={'vertical'}>
                    <Text type={'secondary'}>
                      Đơn vị tổ chức: <Text strong> {event.university.name}</Text>
                    </Text>
                    <Text type={'secondary'}>
                      Email:<Text strong> {event.university.websiteUrl}</Text>
                    </Text>
                    <Text type={'secondary'}>
                      Số điện thoại: <Text strong> {event.university.phoneNumber}</Text>
                    </Text>
                    <Text>
                      <LocationOnIcon /> <Divider type={'vertical'} />
                      <Text strong> {event.slots[0].highSchoolAddress}</Text>
                    </Text>
                    <Text>
                      <EventAvailableIcon /> <Divider type={'vertical'} />
                      <Text strong> {moment(event.slots[0].startDate).format('LLL')}</Text>
                    </Text>
                    <Text>
                      <EventBusyIcon /> <Divider type={'vertical'} />
                      <Text strong> {moment(event.slots[0].endDate).format('LLL')}</Text>
                    </Text>
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
