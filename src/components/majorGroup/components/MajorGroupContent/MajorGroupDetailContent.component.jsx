import { useLocation } from 'react-router-dom';
import { SINGLE } from '../../../../data/single';
import React, { FC, useEffect, useRef } from 'react';
import SingleContentDemo from '../../../commons/SingleContentDemo/SingleContentDemo.component';
import Tag from '../../../commons/Tag/Tag.component';

const DetailContent = ({ data }) => {
  const { description } = data;
  const commentRef = useRef < HTMLDivElement > null;
  //
  const location = useLocation();

  useEffect(() => {
    //  SCROLL TO COMMENT AREA
    if (location.hash !== '#comment') return;

    //
    if (location.hash === '#comment') {
      setTimeout(() => {
        if (commentRef.current) commentRef.current.scrollIntoView();
      }, 500);
    }
  }, [location]);

  return (
    <div className='nc-SingleContent space-y-10'>
      {/* ENTRY CONTENT */}
      <div
        id='single-entry-content'
        className='prose prose-sm !max-w-screen-md sm:prose lg:prose-lg mx-auto dark:prose-invert'>
        {/* THIS IS THE DEMP CONTENT */}
        {/* IF YOUR DATA IS JSON, YOU CAN USE render with html-react-parser (https://www.npmjs.com/package/html-react-parser) */}
        <SingleContentDemo />
      </div>

      {/* TAGS */}
      <div className='max-w-screen-md mx-auto flex flex-wrap'>
        {SINGLE.tags.map((item) => (
          <Tag hideCount key={item.id} tag={item} className='mr-2 mb-2' />
        ))}
      </div>

      {/* AUTHOR */}
      <div className='max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700'></div>
    </div>
  );
};

export default DetailContent;
