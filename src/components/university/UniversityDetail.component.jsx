import Avatar from '../commons/Avatar/Avatar.component';
import NcImage from '../commons/NcImage/NcImage.component';
import React from 'react';
import Sidebar from '../commons/SideBar/SideBar.component';

const UniversityDetailComponent = (props) => {
  const { universitydetail } = props;
  return (
    <div>
      {/* HEADER */}
      <div className='w-screen px-2 xl:max-w-screen-2xl mx-auto'>
        <div className='rounded-3xl md:rounded-[40px] relative aspect-w-16 aspect-h-12 sm:aspect-h-7 xl:sm:aspect-h-6 overflow-hidden '>
          <NcImage
            containerClassName='absolute inset-0'
            src={universitydetail.thumbnail_url}
            className='object-cover w-full h-full'
          />
        </div>
        <div className='relative container -mt-20 lg:-mt-48'>
          <div className=' bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-16 rounded-[40px] shadow-2xl flex flex-col sm:flex-row sm:items-center'>
            <Avatar
              containerClassName='ring-4 ring-white dark:ring-0 shadow-2xl'
              imgUrl={universitydetail.profile_image_url}
              sizeClass='w-20 h-20 text-xl lg:text-2xl lg:w-36 lg:h-36'
              radius='rounded-full'
            />
            <div className='mt-5 sm:mt-0 sm:ml-8 space-y-4 max-w-lg'>
              <h2 className='inline-block text-2xl sm:text-3xl md:text-4xl font-semibold'>{universitydetail.name}</h2>
              <span className='block text-sm text-neutral-6000 dark:text-neutral-300 md:text-base'>
                {universitydetail.short_description}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* ====================== END HEADER ====================== */}
      {/* ====================== BODY ====================== */}
      <div className='container flex flex-col my-10 lg:flex-row '>
        <div className='w-full lg:w-3/5 xl:w-2/3 xl:pr-20'>{universitydetail.description}</div>
        <div className='w-full mt-12 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3'>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default UniversityDetailComponent;
