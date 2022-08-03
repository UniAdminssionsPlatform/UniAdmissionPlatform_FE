import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar.component';
import React from 'react';
import moment from 'moment';

const PostCardMeta = ({ className = 'leading-none', university, startTime, hiddenAvatar = false, size = 'normal' }) => {
  const { name, profileImageUrl, websiteUrl, universityCode } = university;
  return (
    <div
      className={`nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 ${
        size === 'normal' ? 'text-xs' : 'text-base'
      } ${className}`}
      data-nc-id='PostCardMeta'>
      <Link to={websiteUrl} className='relative flex items-center space-x-2'>
        {!hiddenAvatar && (
          <Avatar
            radius='rounded-full'
            sizeClass={size === 'normal' ? 'h-7 w-7 text-sm' : 'h-10 w-10 text-xl'}
            imgUrl={profileImageUrl}
            userName={name}
          />
        )}
        <span className='block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium'>
          {name}
        </span>
      </Link>
      <>
        <span className='text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium'>·</span>
        <span className='text-neutral-500 dark:text-neutral-400 font-normal'>{universityCode}</span>
      </>
    </div>
  );
};

export default PostCardMeta;
