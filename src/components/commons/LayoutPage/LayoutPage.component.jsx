import HeadBackgroundCommon from '../HeadBackgroundCommon/HeadBackgroundCommon.component';
import Heading from '../Heading/Heading.component';
import React from 'react';

const LayoutPage = ({ className = '', heading, subHeading, headingEmoji, children }) => (
  <div className={`nc-LayoutPage relative ${className}`} data-nc-id='LayoutPage'>
    <HeadBackgroundCommon />
    <div className='container relative pt-10 pb-16  lg:pb-28'>
      {/* HEADER */}
      <header className='text-center max-w-2xl mx-auto'>
        <Heading emoji={headingEmoji}>{heading}</Heading>
        {subHeading && (
          <span className='block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200'>{subHeading}</span>
        )}
      </header>

      {/* CONTENT */}
      <div className='p-5 mx-auto bg-white rounded-[40px] shadow-lg sm:p-10 mt-10 lg:mt-1 lg:p-16 dark:bg-neutral-900'>
        {children}
      </div>
    </div>
  </div>
);

export default LayoutPage;
