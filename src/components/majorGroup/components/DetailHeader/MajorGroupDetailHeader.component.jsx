import { Helmet } from 'react-helmet';
import { SINGLE } from '../../../../data/single';
import CategoryBadgeList from '../../../commons/CategoryBadgeList/CategoryBadgeList.component';
import React from 'react';
import SingleTitle from '../../../commons/SingleTitle/SingleTitle.component';
const DetailHeader = ({ pageData, titleMainClass, hiddenDesc = false, className = '', metaActionStyle = 'style1' }) => {
  const { name } = pageData;
  return (
    <>
      <Helmet>
        <title>Nhóm Ngành || Blog Magazine React Template</title>
      </Helmet>
      <div className={`nc-SingleHeader ${className}`}>
        <div className='space-y-5'>
          <CategoryBadgeList itemClass='!px-3' categories={SINGLE.categories} />
          <SingleTitle mainClass={titleMainClass} title={name} />
          <div className='w-full border-b border-neutral-100 dark:border-neutral-800'></div>
          <div className='flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5'></div>
        </div>
      </div>
    </>
  );
};

export default DetailHeader;
