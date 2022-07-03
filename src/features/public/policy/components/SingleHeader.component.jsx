import { Helmet } from 'react-helmet';
import CategoryBadgeList from '../../../../components/commons/CategoryBadgeList/CategoryBadgeList.component';
import PostMeta2 from '../../../universityManager/event/components/DetailEvent/DetailEventPostMeta2.component';
import React from 'react';
import SingleMetaAction2 from '../../../../components/commons/SingleMetaAction2/SingleMetaAction2.component';
import SingleTitle from '../../../../components/commons/SingleTitle/SingleTitle.component';

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
