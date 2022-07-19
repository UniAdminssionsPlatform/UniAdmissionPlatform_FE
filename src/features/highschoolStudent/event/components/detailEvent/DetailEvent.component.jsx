import { SINGLE } from '../../../../../data/single';
import { Spin } from 'antd';
import DetailEventContent from './DetailEventContent.component';
import DetailEventHeader from './DetailEventHeader.component';
import React from 'react';

const DetailEventComponent = (props) => {
  const { event, loading } = props;
  return (
    <>
      <div className={`nc-PageSingleTemplate3`} data-nc-id='PageSingleTemplate3'>
        <Spin tip='Đang tải...' spinning={loading} size='large'>
          <header className='relative pt-16 z-10 md:py-20 lg:py-28 bg-neutral-900 dark:bg-black'>
            {/* SINGLE HEADER */}
            <div className='dark container relative z-10'>
              <div className='max-w-screen-md'>
                <DetailEventHeader hiddenDesc metaActionStyle='style2' pageData={event} />
              </div>
            </div>

            {/* FEATURED IMAGE */}
            <div className='mt-8 md:mt-0 md:absolute md:top-0 md:right-0 md:bottom-0 md:w-1/2 lg:w-2/5 2xl:w-1/3'>
              <div className='hidden md:block absolute top-0 left-0 bottom-0 w-1/5 from-neutral-900 dark:from-black bg-gradient-to-r'></div>
              <img className='block w-full h-full object-cover' src={event.thumbnailUrl} alt='' />
            </div>
          </header>

          {/* SINGLE MAIN CONTENT */}
          <div className='container mt-10'>
            <DetailEventContent data={event} />
          </div>
        </Spin>
      </div>
    </>
  );
};

export default DetailEventComponent;
