import { SINGLE } from '../../data/single';
import { useLocation } from 'react-router-dom';
import MakeDownView from '../MarkdownView/MarkdownView.component';
import React, { useEffect, useRef } from 'react';
import SingleAuthor from '../commons/SingleAuthor/SingleAuthor.component';
import SingleCommentForm from '../commons/SingleCommentForm/SingleCommentForm.component';
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
    </div>
  );
};

export default DetailEventContent;
