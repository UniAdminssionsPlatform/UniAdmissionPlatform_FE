import { Helmet } from 'react-helmet';
import { SINGLE } from '../../../data/single';
import CategoryBadgeList from '../../commons/CategoryBadgeList/CategoryBadgeList.component';
import PostMeta2 from '../../commons/PostMeta2/PostMeta2.component';
import React from 'react';
import SingleMetaAction2 from '../../commons/SingleMetaAction2/SingleMetaAction2.component';
import SingleTitle from '../../commons/SingleTitle/SingleTitle.component';

const DetailEventHeader = ({
  pageData,
  titleMainClass,
  hiddenDesc = false,
  className = '',
  metaActionStyle = 'style1'
}) => {
  const { name, short_description } = pageData;

  return (
    <>
      <Helmet>
        <title>Event || Blog Magazine React Template</title>
      </Helmet>
      <div className={`nc-SingleHeader ${className}`}>
        <div className='space-y-5'>
          <CategoryBadgeList itemClass='!px-3' categories={SINGLE.categories} />
          <SingleTitle mainClass={titleMainClass} title={name} />
          {!!short_description && !hiddenDesc && (
            <span className='block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1'>
              {short_description}
            </span>
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

export default DetailEventHeader;
