import { Link } from 'react-router-dom';
import { PATH_HIGH_SCHOOL_STUDENT } from '../../../../constants/Paths/Path';
import CategoryBadgeList from '../../CategoryBadgeList/CategoryBadgeList.component';
import NcImage from '../../NcImage/NcImage.component';
import PostCardSaveAction from '../../PostCardSaveAction/PostCardSaveAction.component';
import PostTypeFeaturedIcon from '../../PostTypeFeaturedIcon/PostTypeFeaturedIcon.component';
import React from 'react';
const Card6 = (props) => {
  const { categories, postType, viewlistnews, className } = props;
  // console.log('post: ', post);

  return (
    <div
      className={`nc-Card6 relative flex group flex-col-reverse sm:flex-row sm:items-center p-4  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${
        className ? className : 'h-full'
      }`}
      data-nc-id='Card6'>
      <Link
        to={{
          pathname: PATH_HIGH_SCHOOL_STUDENT.NEWS_DETAIL,
          state: {
            newsId: viewlistnews?.id
          }
        }}
        className='absolute inset-0 z-0'></Link>
      <div className='flex flex-col flex-grow'>
        <div className='space-y-3 mb-4'>
          <h2 className={`block font-semibold text-base`}>
            <Link to='#' className='line-clamp-2' title={viewlistnews?.title}>
              {viewlistnews?.title}
            </Link>
          </h2>
          <h2>{viewlistnews?.shortDescription}</h2>
        </div>
        <div className='flex items-center flex-wrap justify-between mt-auto'>
          <PostCardSaveAction className='relative' readingTime={viewlistnews?.createDate} />
        </div>
      </div>

      <Link
        to='#'
        className={`block relative flex-shrink-0 w-full sm:w-40 h-40 sm:h-full sm:ml-5 rounded-2xl overflow-hidden mb-5 sm:mb-0 `}>
        <NcImage
          containerClassName='absolute inset-0'
          className='object-cover w-full h-full'
          src={viewlistnews?.thumbnailUrl}
        />
        <span className='absolute bottom-1 left-1'>
          <PostTypeFeaturedIcon wrapSize='h-7 w-7' iconSize='h-4 w-4' postType={postType} />
        </span>
      </Link>
    </div>
  );
};

export default Card6;
