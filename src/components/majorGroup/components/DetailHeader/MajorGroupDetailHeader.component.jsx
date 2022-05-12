import { Helmet } from 'react-helmet';
import CategoryBadgeList from '../../../commons/CategoryBadgeList/CategoryBadgeList.component';
import React from 'react';
import SingleTitle from '../../../commons/SingleTitle/SingleTitle.component';
const DetailHeader = ({ pageData, titleMainClass, hiddenDesc = false, className = '', metaActionStyle = 'style1' }) => {
  const { categories, desc, title } = pageData;

  return (
    <>
      <Helmet>
        <title>Nhóm ngành || Blog Magazine React Template</title>
      </Helmet>
      <div className={`nc-SingleHeader ${className}`}>
        <div className='space-y-5'>
          <CategoryBadgeList itemClass='!px-3' categories={categories} />
          <SingleTitle mainClass={titleMainClass} title={title} />
          {!!desc && !hiddenDesc && (
            <span className='block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1'>{desc}</span>
          )}
          <div className='w-full border-b border-neutral-100 dark:border-neutral-800'></div>
          <div className='flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5'></div>
        </div>
      </div>
    </>
  );
};

export default DetailHeader;
