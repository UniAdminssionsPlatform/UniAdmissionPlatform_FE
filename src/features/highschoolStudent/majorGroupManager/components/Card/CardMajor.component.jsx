import { Link } from 'react-router-dom';
import { PATH } from '../../../../../constants/Paths/Path';
import DetailMajorGroupContaoner from '../../DetailMajorGroup.container';
import MajorMedia from '../PostFeaturedMedia/MajorMedia.component';
import React, { useState } from 'react';

const CardMajor = ({ className = 'h-full', post, ratio = 'aspect-w-4 aspect-h-3' }) => {
  const [isHover, setIsHover] = useState(false);

  const handleonClick = (value) => <DetailMajorGroupContaoner />;

  return (
    <div
      className={`nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id='Card11'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      //
    >
      <div className={`block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden ${ratio}`}>
        <div>
          <MajorMedia post={post} isHover={isHover} postType='gallery' />
        </div>
      </div>

      <div className='p-4 flex flex-col flex-grow space-y-3'>
        <h2 className='nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 '>
          <Link
            to={{
              pathname: PATH.DETAIL_MAJOR_GROUP,
              state: {
                majorGroupId: post.id
              }
            }}
            className='line-clamp-2'>
            {post.name}
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default CardMajor;
