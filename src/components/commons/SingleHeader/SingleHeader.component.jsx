import { Helmet } from 'react-helmet';
import CategoryBadgeList from '../CategoryBadgeList/CategoryBadgeList.component';
import PostMeta2 from '../PostMeta2/PostMeta2.component';
import React from 'react';
import SingleMetaAction2 from '../SingleMetaAction2/SingleMetaAction2.component';
import SingleTitle from '../SingleTitle/SingleTitle.component';

const SingleHeader = ({ pageData, titleMainClass, hiddenDesc, className }) => {
  const { categories, desc, title } = pageData;

  return (
    <>
      <Helmet>
        <title>Event || Detail</title>
      </Helmet>
      <div className={`nc-SingleHeader ${className}`}>
        <div className='space-y-5'>
          <CategoryBadgeList itemClass='!px-3' categories={categories} />
          <SingleTitle mainClass={titleMainClass} title={title} />
          {!!desc && !hiddenDesc && (
            <span className='block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1'>{desc}</span>
          )}
          <div className='w-full border-b border-neutral-100 dark:border-neutral-800'></div>
          <div className='flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5'>
            <PostMeta2
              size='large'
              className='leading-none flex-shrink-0'
              meta={pageData}
              hiddenCategories
              avatarRounded='rounded-full shadow-inner'
            />
            <SingleMetaAction2 meta={pageData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleHeader;
