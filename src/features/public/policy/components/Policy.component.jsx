import PolicyContent from './PolicyContent.component';
import React from 'react';

const PolicyComponent = ({ className }) => (
  <>
    <div className={`nc-PageSingleTemp4Sidebar relative pt-10 lg:pt-16 ${className}`}>
      <div className='relative'>
        <div className='container flex flex-col my-10 lg:flex-row '>
          <div className='w-full lg:w-3/5 xl:w-2/3 xl:pr-20'>
            <PolicyContent />
          </div>
        </div>
      </div>
    </div>
  </>
);
export default PolicyComponent;
