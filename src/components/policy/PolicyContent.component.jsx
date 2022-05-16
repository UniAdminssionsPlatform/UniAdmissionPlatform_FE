import PolicyContentDemo from './PolicyContentDemo.component';
import React from 'react';

const PolicyContent = ({ data }) => (
  <div className='nc-SingleContent space-y-10'>
    <div
      id='single-entry-content'
      className='prose prose-sm !max-w-screen-md sm:prose lg:prose-lg mx-auto dark:prose-invert'>
      <PolicyContentDemo />
    </div>
  </div>
);

export default PolicyContent;
