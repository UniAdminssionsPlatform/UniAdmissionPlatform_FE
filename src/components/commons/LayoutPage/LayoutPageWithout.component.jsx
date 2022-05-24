import HeadBackgroundCommon from '../HeadBackgroundCommon/HeadBackgroundCommon.component';
import Heading from '../Heading/Heading.component';
import HeadingWithDesc from '../Heading/HeadingWithDesc.component';
import React from 'react';

const LayoutPageWithout = ({ className = '', heading, subHeading, headingEmoji, children }) => (
  <div className={`nc-LayoutPage relative ${className}`} data-nc-id='LayoutPage'>
    <HeadBackgroundCommon />
    <div className='container relative pt-10 pb-16 lg:pt-5 lg:pb-28'>
      {/* HEADER */}
      <header className='text-center max-w-2xl mx-auto'>
        {subHeading && (
          <span className='block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200'>{subHeading}</span>
        )}
      </header>
      <div className='p-5 mx-auto bg-white rounded-[40px] shadow-lg sm:p-10 dark:bg-neutral-900'>{children}</div>
    </div>
  </div>
);
export default LayoutPageWithout;
