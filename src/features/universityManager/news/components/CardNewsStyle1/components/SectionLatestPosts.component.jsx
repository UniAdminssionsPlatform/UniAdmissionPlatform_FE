import { DEMO_TAGS } from '../../../../../../data/taxonomies';
import { Input, Pagination } from 'antd';
import Card4 from './Card4.component';
import Heading from './Heading.component';
import React from 'react';
import WidgetTags from '../../../../../../components/commons/WidgetTags/WidgetTags.component';

const SectionLatestPosts = ({
  tags,
  setPayload,
  payload,
  heading = 'Tất Cả Bài Viết 🎈',
  gridClass = '',
  news,
  onChange,
  handleChangeNewsName
}) => {
  const renderCard = (newspage) => <Card4 key={newspage.id} post={newspage} />;
  const { Search } = Input;

  return (
    <div className={`nc-SectionLatestPosts relative`}>
      <div className='flex flex-col lg:flex-row '>
        <div className='w-full lg:w-3/5 xl:w-2/3 xl:pr-14 m-3'>
          <Heading>{heading}</Heading>
          <div className={`grid gap-6 md:gap-8 ${gridClass}`}>{news?.list?.map((item) => renderCard(item))}</div>
          <div className='flex flex-col mt-12 md:mt-20 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center'>
            <Pagination total={news?.total} onChange={onChange} showSizeChanger />
          </div>
        </div>
        <div className='w-full space-y-7 mt-24 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3 '>
          <h2 class='text-3xl md:text-4xl font-semibold dark:text-neutral-100 m-3'>Tìm Kiếm</h2>
          <span class='mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400'>
            Tìm kiếm bài viết mà bạn muốn nhé!
          </span>
          <Search
            placeholder='Tên bài viết'
            allowClear
            enterButton='Tìm Kiếm'
            size='large'
            onSearch={handleChangeNewsName}
          />
          <WidgetTags tags={tags} setPayload={setPayload} payload={payload} />
        </div>
      </div>
    </div>
  );
};

export default SectionLatestPosts;
