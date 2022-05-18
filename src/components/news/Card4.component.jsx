import React from 'react';
import { Link } from 'react-router-dom';
import NcImage from '../commons/NcImage/NcImage.component';
import { PATH_HIGH_SCHOOL_STUDENT } from '../../constants/Paths/Path';

const Card4 = (props) => {
  const { post } = props;

  return (
    <div
      className={`nc-Card4 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] h-full`}
      data-nc-id='Card4'>
      <span className='block flex-shrink-0 relative w-full aspect-w-16 aspect-h-9 rounded-t-xl overflow-hidden'>
        <NcImage containerClassName='absolute inset-0' src={post.thumbnailUrl} />
      </span>

      <Link
        to={{
          pathname: PATH_HIGH_SCHOOL_STUDENT.NEWS_DETAIL,
          state: {
            newsId: post?.id
          }
        }}
        className='absolute inset-0'></Link>

      <div className='p-4 flex flex-col flex-grow'>
        <div className='space-y-2.5 mb-4'>
          <h2 className='nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 '>
            <Link to='#' className='line-clamp-2' title={post.title}>
              {post.title}
            </Link>
          </h2>
          <div className='flex items-end justify-between mt-auto'>{post.createDate}</div>
        </div>
      </div>
    </div>
  );
};

export default Card4;
