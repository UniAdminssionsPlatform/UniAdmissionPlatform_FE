import { useLocation } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import SingleAuthor from '../../commons/SingleAuthor/SingleAuthor.component';
import SingleCommentForm from '../../commons/SingleCommentForm/SingleCommentForm.component';
import SingleCommentLists from '../../commons/SingleCommentLists/SingleCommentLists.component';
import SingleContentDemo from '../../commons/SingleContentDemo/SingleContentDemo.component';
import Tag from '../../commons/Tag/Tag.component';

const DetailEventContent = ({ data }) => {
  const { tags, author, commentCount, comments } = data;
  const commentRef = useRef();
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
        {tags.map((item) => (
          <Tag hideCount key={item.id} tag={item} className='mr-2 mb-2' />
        ))}
      </div>

      {/* AUTHOR */}
      <div className='max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700'></div>
      <div className='max-w-screen-md mx-auto '>
        <SingleAuthor author={author} />
      </div>

      {/* COMMENT FORM */}
      <div id='comment' ref={commentRef} className='max-w-screen-md mx-auto pt-5'>
        <h3 className='text-xl font-semibold text-neutral-800 dark:text-neutral-200'>Responses ({commentCount})</h3>
        <SingleCommentForm onClickSubmit={(id) => console.log(id)} onClickCancel={(id) => console.log(id)} />
      </div>

      {/* COMMENTS LIST */}
      <div className='max-w-screen-md mx-auto'>
        <SingleCommentLists comments={comments} />
      </div>
    </div>
  );
};

export default DetailEventContent;
