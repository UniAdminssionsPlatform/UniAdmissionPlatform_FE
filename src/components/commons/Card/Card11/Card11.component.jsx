import { Link } from 'react-router-dom';
import CategoryBadgeList from '../../CategoryBadgeList/CategoryBadgeList.component';
import PostCardLikeAndComment from '../../PostCardLikeAndComment/PostCardLikeAndComment.component';
import PostCardMeta from '../../PostCardMeta/PostCardMeta.component';
import PostCardSaveAction from '../../PostCardSaveAction/PostCardSaveAction.component';
import PostFeaturedMedia from '../../PostFeaturedMedia/PostFeaturedMedia.component';
import React, { useState } from 'react';
import { Typography } from 'antd';
import ButtonTimeComponent from '../../../../features/public/homePage/components/ButtonTime.component';

const Card11 = ({ className = 'h-full', event, hiddenAuthor = false, ratio = 'aspect-w-4 aspect-h-3' }) => {
  const { name, shortDescription, startTime } = event;
  console.log(event);
  const { Text, Title } = Typography;
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id='Card11'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <div className={`block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden ${ratio}`}>
        <div>
          <PostFeaturedMedia event={event} isHover={isHover} />
        </div>
      </div>
      <div className='p-4 flex flex-col flex-grow space-y-3'>
        {!hiddenAuthor ? (
          <PostCardMeta university={event.university} startTime={event?.startTime} />
        ) : (
          <span className='text-xs text-neutral-500'>{event?.startTime}</span>
        )}
        <h2 className='nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 '>
          <Text strong style={{ fontSize: 'large' }}>
            {name}
          </Text>
        </h2>
        <div className='flex items-end justify-between mt-auto'>
          <ButtonTimeComponent event={event} />
          <PostCardSaveAction className='relative' postData={startTime} />
        </div>
      </div>
    </div>
  );
};

export default Card11;
