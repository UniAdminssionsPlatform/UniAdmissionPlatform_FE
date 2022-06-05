import { Helmet } from 'react-helmet';
import { SinglePageType } from './PageSingleTemp3Sidebar';
import CategoryBadgeList from '../../../../components/commons/CategoryBadgeList/CategoryBadgeList.component';
import PostMeta2 from 'components/PostMeta2/PostMeta2';
import React, { FC } from 'react';
import SingleMetaAction2 from './SingleMetaAction2';
import SingleTitle from './SingleTitle';

const SingleHeader = ({ pageData, titleMainClass, hiddenDesc = false, className = '', metaActionStyle = 'style1' }) => {
  const { categories, desc, title } = pageData;

  return (
    <>
      <Helmet>
        <title>Single || Blog Magazine React Template</title>
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
