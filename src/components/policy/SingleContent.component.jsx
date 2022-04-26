import React from 'react';
import SingleContentDemo from './SingleContentDemo.component';

const SingleContent = ({ data }) => (
  <div className='nc-SingleContent space-y-10'>
    <div
      id='single-entry-content'
      className='prose prose-sm !max-w-screen-md sm:prose lg:prose-lg mx-auto dark:prose-invert'>
      <SingleContentDemo />
    </div>
  </div>
);

export default SingleContent;
