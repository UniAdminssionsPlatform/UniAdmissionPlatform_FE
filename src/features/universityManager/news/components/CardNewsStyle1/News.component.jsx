import React from 'react';
import SectionLatestPosts from './components/SectionLatestPosts.component';
import { Skeleton } from 'antd';

const NewsComponent = (props) => {
  const { news, onChange, handleChangeNewsName, listTag, setPayload, payload, loading } = props;

  return (
    <div className='nc-PageHomeDemo6 relative [ nc-section-rounded-md ]'>
      <div className='relative overflow-hidden'>
        <div className='bg-neutral-100 dark:bg-black dark:bg-opacity-20  text-neutral-100'>
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
