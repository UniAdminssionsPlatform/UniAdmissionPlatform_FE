import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import PostTypeFeaturedIcon from '../../PostTypeFeaturedIcon/PostTypeFeaturedIcon.component';
import PostCardSaveAction from '../../PostCardSaveAction/PostCardSaveAction.component';
import ShowImageComponent from '../../../../commons/ShowImage.component';

const Card7 = () => {
  return (
    <div className={`nc-Card7 relative flex flex-col group rounded-3xl overflow-hidden`} data-nc-id='Card7'>
      <div className='absolute inset-x-0 top-0 p-3  flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 duration-300'>
        {/*<PostCardLikeAndComment className='relative' postData={post} />*/}
        {/*<PostCardSaveAction className='relative' postData={post} />*/}
      </div>
      <Link to={href} className={`flex items-start relative w-full`}>
        {/*<ShowImageComponent*/}
        {/*  containerClassName='absolute inset-0 overflow-hidden'*/}
        {/*  className='object-cover w-full h-full rounded-3xl '*/}
        {/*  src={featuredImage}*/}
        {/*/>*/}
        {/*<PostTypeFeaturedIcon*/}
        {/*  className='absolute top-3 left-3 group-hover:hidden'*/}
        {/*  postType={1}*/}
        {/*  wrapSize='w-7 h-7'*/}
        {/*  iconSize='w-4 h-4'*/}
        {/*/>*/}
        <span className='absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity'></span>
      </Link>

      <div className='absolute bottom-3 inset-x-3 p-4 bg-white dark:bg-neutral-900 flex flex-col flex-grow rounded-3xl group-hover:shadow-2xl transition-shadow'>
        <Link to={href} className='absolute inset-0'></Link>
        <div className='space-y-2.5 mb-3'>
          {/*<CategoryBadgeList categories={categories} />*/}
          <h2 className='block text-base font-semibold text-neutral-900 dark:text-neutral-100 '>
            <Link to={href} className='line-clamp-2' title={title}>
              {title}
            </Link>
          </h2>
        </div>
        {/*<CardAuthorBox2 readingTime={readingTime} date={date} author={author} />*/}
      </div>
    </div>
  );
};

export default Card7;
