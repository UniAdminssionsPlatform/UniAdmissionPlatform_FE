import React from 'react';
import SingleContentDemo from '../../../../components/commons/SingleContentDemo/SingleContentDemo.component';

const SingleContent = () => (
  <div className='nc-SingleContent space-y-10'>
    <div
      id='single-entry-content'
      className='prose prose-sm !max-w-screen-md sm:prose lg:prose-lg mx-auto dark:prose-invert'>
      {/* THIS IS THE DEMP CONTENT */}
      {/* IF YOUR DATA IS JSON, YOU CAN USE render with html-react-parser (https://www.npmjs.com/package/html-react-parser) */}
      <SingleContentDemo />
    </div>
  </div>
);

export default SingleContent;
