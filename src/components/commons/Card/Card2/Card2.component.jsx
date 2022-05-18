import { Link } from 'react-router-dom';
import NcImage from '../../NcImage/NcImage.component';
import React from 'react';
import SocialsShare from '../../SocialsShare/SocialsShare.component';
import { PATH_HIGH_SCHOOL_STUDENT } from '../../../../constants/Paths/Path';
const Card2 = (props) => {
  const { viewnews, className } = props;
  console.log('card2viewnews: ', props);
  // console.log('viewnews: ', viewnews);
  // console.log('title :', title);
  // console.log('featuredImage :', featuredImage);
  // console.log('desc :', desc);
  // console.log('date :', date);
  // console.log('href :', href);

  return (
    <div
      className={`nc-Card2 group relative flex flex-col  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] overflow-hidden ${
        className ? className : 'h-full'
      }`}
      data-nc-id='Card2'>
      <span className='block flex-shrink-0 flex-grow relative w-full h-0 pt-[75%] sm:pt-[55%] rounded-xl sm:rounded-b-none overflow-hidden'>
        <NcImage containerClassName='absolute inset-0' src={viewnews?.thumbnailUrl} />
        {/* <PostTypeFeaturedIcon
            className='absolute bottom-2 left-2'
            // postType={postType}
            wrapSize='w-8 h-8'
            iconSize='w-4 h-4'
          /> */}
      </span>

      <SocialsShare className='absolute hidden md:grid gap-[5px] right-4 top-4 opacity-0 z-[-1] group-hover:z-10 group-hover:opacity-100 transition-all duration-300' />
      <Link
        to={{
          pathname: PATH_HIGH_SCHOOL_STUDENT.NEWS_DETAIL,
          state: {
            newsId: viewnews?.id
          }
        }}
        className='absolute inset-0'></Link>

      <div className='p-4 sm:p-5 flex flex-col'>
        <div className='space-y-3'>
          <h2
            className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors 
               'large'  'text-lg sm:text-2xl' : 'text-base'
            `}>
            {viewnews?.title}
          </h2>
          <p>{viewnews?.shortDescription}</p>
          <span className='block text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2'>
            {viewnews?.createDate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card2;
