import { Helmet } from 'react-helmet';
import { SINGLE } from '../../../../../data/single';
import CategoryBadgeList from '../../../../../components/commons/CategoryBadgeList/CategoryBadgeList.component';
import PostMeta2 from './DetailEventPostMeta2.component';
import React from 'react';
import SingleMetaAction2 from '../../../../../components/commons/SingleMetaAction2/SingleMetaAction2.component';
import SingleTitle from '../../../../../components/commons/SingleTitle/SingleTitle.component';

const DetailEventHeader = ({
  pageData,
  titleMainClass,
  hiddenDesc = false,
  className = '',
  metaActionStyle = 'style1'
}) => {
  const { name, shortDescription } = pageData;

  return (
    <>
      <Helmet>
        <title>Event || Blog Magazine React Template</title>
      </Helmet>
      <div className={`nc-SingleHeader ${className}`}>
        <div className='space-y-5'>
          <CategoryBadgeList itemClass='!px-3' categories={SINGLE.categories} />
          <SingleTitle mainClass={titleMainClass} title={name} />
          {!!shortDescription && !hiddenDesc && (
            <span className='block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1'>
              {shortDescription}
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
