import { DEMO_AUTHORS } from '../../../../../data/authors';
import { Helmet } from 'react-helmet';
import Avatar from '../../../../../components/commons/Avatar/Avatar.component';
import NcImage from '../../../../../components/commons/NcImage/NcImage.component';
import React from 'react';
const AUTHOR = DEMO_AUTHORS[0];

const StudentProfileComponent = (props) => {
  const { data } = props;
  return (
    <div className={`nc-PageAuthor`} data-nc-id='PageAuthor'>
      <Helmet>
        <title>Trang cá nhân || </title>
      </Helmet>

      {/* HEADER */}
      <div className='w-screen px-2 xl:max-w-screen-2xl mx-auto'>
        <div className='rounded-3xl md:rounded-[40px] relative aspect-w-16 aspect-h-12 sm:aspect-h-7 xl:sm:aspect-h-6 overflow-hidden '>
          <NcImage
            containerClassName='absolute inset-0'
            src='https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            className='object-cover w-full h-full'
          />
        </div>
        <div className='relative container -mt-20 lg:-mt-48'>
          <div className=' bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-16 rounded-[40px] shadow-2xl flex flex-col sm:flex-row sm:items-center'>
            <Avatar
              containerClassName='ring-4 ring-white dark:ring-0 shadow-2xl'
              imgUrl={AUTHOR.avatar}
              sizeClass='w-20 h-20 text-xl lg:text-2xl lg:w-36 lg:h-36'
              radius='rounded-full'
            />
            <div className='mt-5 sm:mt-0 sm:ml-8 space-y-4 max-w-lg'>
              <h2 className='inline-block text-2xl sm:text-3xl md:text-4xl font-semibold'>{AUTHOR.displayName}</h2>
              <span className='block text-sm text-neutral-6000 dark:text-neutral-300 md:text-base'>{AUTHOR.desc}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfileComponent;
