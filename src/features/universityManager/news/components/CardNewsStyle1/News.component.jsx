import { Helmet } from 'react-helmet';
import React from 'react';
import SectionLatestPosts from './components/SectionLatestPosts.component';
import { Skeleton } from 'antd';

const NewsComponent = (props) => {
  const { news, onChange, handleChangeNewsName, listTag, setPayload, payload, loading } = props;

  return (
    <div className='nc-PageHomeDemo6 relative [ nc-section-rounded-md ]'>
      <Helmet>
        <title>Tổng Hợp Bài Viết</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600&display=swap'
          rel='stylesheet'></link>
      </Helmet>
      <div className='relative overflow-hidden'>
        <div className='dark bg-neutral-900 dark:bg-black dark:bg-opacity-20 text-neutral-100'>
          <div className='relative container'>
            <Skeleton active loading={loading}>
              <SectionLatestPosts
                handleChangeNewsName={handleChangeNewsName}
                onChange={onChange}
                heading='Tất Cả Bài Viết'
                className='py-16 lg:py-24'
                news={news}
                tags={listTag}
                payload={payload}
                setPayload={setPayload}
                postCardName='card4'
                gridClass='sm:grid-cols-2'
              />
            </Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
