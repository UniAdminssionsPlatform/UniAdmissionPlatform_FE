import { SINGLE } from '../../../../../data/single';
import { useLocation } from 'react-router-dom';
import MajorGroupContentDemo from './MajorGroupData.component';
import React, { useEffect } from 'react';
import Tag from '../../../../../components/commons/Tag/Tag.component';
const DetailContent = ({ data }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== '#comment') return;
    if (location.hash === '#comment') {
      setTimeout(() => {
        // if (commentRef.current) commentRef.current.scrollIntoView();
      }, 500);
    }
  }, [location]);

  return (
    <div className='nc-SingleContent space-y-10'>
      <div
        id='single-entry-content'
        className='prose prose-sm !max-w-screen-md sm:prose lg:prose-lg mx-auto dark:prose-invert'>
        <MajorGroupContentDemo data={data} />
      </div>
      <div className='max-w-screen-md mx-auto flex flex-wrap'>
        {SINGLE.tags.map((item) => (
          <Tag hideCount key={item.id} tag={item} className='mr-2 mb-2' />
        ))}
      </div>
      <div className='max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700'></div>
    </div>
  );
};

export default DetailContent;
