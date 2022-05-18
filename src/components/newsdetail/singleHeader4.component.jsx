import React from 'react';
import SingleTitle from './singleTitle.component';
import { Helmet } from 'react-helmet';
import NcImage from '../commons/NcImage/NcImage.component';
// import CategoryBadgeList from '../commons/CategoryBadgeList/CategoryBadgeList.component';

const SingleHeader4 = (props) => {
  const { newsdetail } = props;

  return (
    <>
      <Helmet>
        <title>Tin Tức || Chi Tiết Tin Tức</title>
      </Helmet>
      <div className={`nc-SingleHeader4 `}>
        <div className='max-w-5xl mx-auto space-y-5 dark'>
          {/* <CategoryBadgeList itemClass='!px-3' categories={categories} /> */}
          <SingleTitle
            mainClass='text-neutral-900 font-bold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl 2xl:text-6xl dark:text-neutral-100'
            title={newsdetail?.title}
          />

          <span className='block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1'>
            {newsdetail?.shortDescription}
          </span>
        </div>

        {/* FEATURED IMAGE */}
        <NcImage
          containerClassName=' my-10'
          className='object-cover w-full h-full rounded-lg shadow-xl'
          src={newsdetail?.thumbnailUrl}
        />

        <div className=' space-y-10'>
          <div className='w-full border-b border-neutral-100 dark:border-neutral-800'></div>
        </div>
      </div>
    </>
  );
};

export default SingleHeader4;
