import React, { useEffect, useRef } from 'react';
import Tag from '../commons/Tag/Tag.component';
import SingleCommentForm from '../commons/SingleCommentForm/SingleCommentForm.component';
import SingleCommentLists from '../commons/SingleCommentLists/SingleCommentLists.component';
import SingleContentDemo from '../commons/SingleContentDemo/SingleContentDemo.component';

const SingleContent = () => {
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
      {/* <div className='max-w-screen-md mx-auto flex flex-wrap'>
        {tags.map((item) => (
          <Tag hideCount key={item.id} tag={item} className='mr-2 mb-2' />
        ))}
      </div> */}

      {/* COMMENT FORM */}
      {/* <div id='comment' ref={commentRef} className='max-w-screen-md mx-auto pt-5'>
        <h3 className='text-xl font-semibold text-neutral-800 dark:text-neutral-200'>Responses ({commentCount})</h3>
        <SingleCommentForm onClickSubmit={(id) => console.log(id)} onClickCancel={(id) => console.log(id)} />
      </div> */}

      {/* COMMENTS LIST */}
      {/* <div className='max-w-screen-md mx-auto'>
        <SingleCommentLists comments={comments} />
      </div> */}
    </div>
  );
};

export default SingleContent;
