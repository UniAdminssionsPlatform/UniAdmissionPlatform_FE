import { Link } from 'react-router-dom';

import { SINGLE } from '../../data/single';
import Avatar from '../commons/Avatar/Avatar.component';
import React from 'react';
import { Space, Typography } from 'antd';

const PostMeta2 = (props) => {
  const { Title, Text } = Typography;
  const { event } = props;
  return (
    <div
      className={`nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 text-xs`}
      data-nc-id='PostMeta2'>
      <Link to={SINGLE.author.href} className='flex items-center space-x-2'>
        <Avatar
          // radius={avatarRounded}
          sizeClass={'h-10 w-10 sm:h-11 sm:w-11 text-xl'}
          imgUrl={event.university.profileImageUrl}
          userName={event.university.name}
        />
      </Link>
      <div className='ml-3'>
        <div className='flex items-center'>
          <Text strong style={{ color: 'white', fontSize: 'large' }}>
            {event.university.name}
          </Text>
          <>
            <span className='mx-2 font-semibold'>·</span>
          </>
        </div>
        <div className='text-xs mt-[6px]'>
          <span className='text-neutral-700 dark:text-neutral-300'>{event.startTime}</span>
          <span className='mx-2 font-semibold'>·</span>
          <span className='text-neutral-700 dark:text-neutral-300'>{SINGLE.readingTime} min read</span>
        </div>
      </div>
    </div>
  );
};

export default PostMeta2;
