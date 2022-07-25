import { SINGLE } from '../../../../../data/single';
import { useLocation } from 'react-router-dom';
import MakeDownView from '../../../../../components/MarkdownView/MarkdownView.component';
import React, { useEffect, useRef } from 'react';
import SingleAuthor from '../../../../../components/commons/SingleAuthor/SingleAuthor.component';
import SingleCommentLists from '../../../../../components/commons/SingleCommentLists/SingleCommentLists.component';
import SingleContentDemo from '../../../../../components/commons/SingleContentDemo/SingleContentDemo.component';
import SingleFCommentForm from '../../../../../components/commons/SingleCommentForm/SingleCommentForm.component';
const DetailEventContent = ({ data }) => {
  const { description, fileUrl, hostName, meetingUrl, address, startTime, endTime } = data;
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
        Người dẫn chương trình: {hostName}
        <MakeDownView str={description} />
        File đính kèm: {fileUrl} <br />
        Link meeting: {meetingUrl}
      </div>

      {/* AUTHOR */}
      <div className='max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700'></div>
      <div className='max-w-screen-md mx-auto '>
        <SingleAuthor author={SINGLE.author} />
      </div>

      {/* COMMENT FORM */}
      <div id='comment' ref={commentRef} className='max-w-screen-md mx-auto pt-5'>
        <h3 className='text-xl font-semibold text-neutral-800 dark:text-neutral-200'>
          Responses ({SINGLE.commentCount})
        </h3>
        <SingleCommentForm onClickSubmit={(id) => console.log(id)} onClickCancel={(id) => console.log(id)} />
      </div>

      {/* COMMENTS LIST */}
      <div className='max-w-screen-md mx-auto'>
        <SingleCommentLists comments={SINGLE.comments} />
      </div>
    </div>
  );
};

export default DetailEventContent;
