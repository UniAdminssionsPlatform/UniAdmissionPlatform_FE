import Heading from './Heading.component';
import Pagination from '../commons/Pagination/Pagination';
import React from 'react';
import WidgetTags from '../commons/WidgetTags/WidgetTags.component';
import Card4 from './Card4.component';
import { DEMO_TAGS } from '../../data/taxonomies';

const tagsDemo = DEMO_TAGS.filter((_, i) => i > 5);

const SectionLatestPosts = ({ tags = tagsDemo, heading = 'Tất Cả Bài Viết 🎈', gridClass = '', news }) => {
  const renderCard = (newspage) => {
    return <Card4 key={newspage.id} post={newspage} />;
  };

  return (
    <div className={`nc-SectionLatestPosts relative`}>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-3/5 xl:w-2/3 xl:pr-14'>
          <Heading>{heading}</Heading>
          <div className={`grid gap-6 md:gap-8 ${gridClass}`}>{news?.map((item) => renderCard(item))}</div>
          <div className='flex flex-col mt-12 md:mt-20 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center'>
            <Pagination />
          </div>
        </div>
        <div className='w-full space-y-7 mt-24 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3 '>
          <WidgetTags tags={tags} />
        </div>
      </div>
    </div>
  );
};

export default SectionLatestPosts;
