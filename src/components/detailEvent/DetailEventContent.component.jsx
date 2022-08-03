import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import Avatar from '../commons/Avatar/Avatar.component';
import MarkdownViewComponent from '../MarkdownView/MarkdownView.component';
const DetailEventContent = (props) => {
  const { event } = props;
  const { Title, Text } = Typography;
  return (
    <div className='nc-SingleContent space-y-10'>
      {/* ENTRY CONTENT */}
      <div
        id='single-entry-content'
        className='prose prose-sm !max-w-screen-md sm:prose lg:prose-lg mx-auto dark:prose-invert'></div>
      <div className='max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700'></div>
      <div className='max-w-screen-md mx-auto '>
        <div className='nc-SingleAuthor flex'>
          <Link to={''}>
            <Avatar
              imgUrl={event.university.profileImageUrl}
              userName={event.hostName}
              sizeClass='h-12 w-12 text-lg sm:text-xl sm:h-24 sm:w-24 '
              radius='rounded-xl'
            />
          </Link>
          <div className='flex flex-col ml-3 max-w-lg sm:ml-5'>
            <span className='text-xs text-neutral-400 uppercase tracking-wider'>Diễn giả</span>
            <h2 className='text-lg font-semibold text-neutral-900 dark:text-neutral-200'>
              <Link to={event.hostName}>{event.hostName}</Link>
            </h2>
            <span className='text-sm text-neutral-500 sm:text-base dark:text-neutral-300'>
              {event.university.websiteUrl}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailEventContent;
