import { Helmet } from 'react-helmet';
import { SINGLE } from '../../../../../data/single';
import PostMeta2 from './DetailEventPostMeta2.component';
import React from 'react';
import SingleTitle from '../../../../../components/commons/SingleTitle/SingleTitle.component';

const DetailEventHeader = ({ pageData, titleMainClass, className = '' }) => {
  const { name, shortDescription, startTime, endTime } = pageData;

  return (
    <>
      <Helmet>
        <title>Chi tiết sự kiện</title>
      </Helmet>
      <div className={`nc-SingleHeader ${className}`}>
        <div className='space-y-5'>
          <SingleTitle mainClass={titleMainClass} title={name} />
          <span className='block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1'>
            {shortDescription}
          </span>
          <div className='w-full border-b border-neutral-100 dark:border-neutral-800'></div>
          <div className='flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5'>
            {/* <PostMeta2
              size='large'
              className='leading-none flex-shrink-0'
              meta={pageData}
              hiddenCategories
              avatarRounded='rounded-full shadow-inner'
            /> */}
            {startTime} - {endTime}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailEventHeader;
