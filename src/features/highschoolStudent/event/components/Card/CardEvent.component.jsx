import { Link } from 'react-router-dom';
import EventFeaturedMedia from '../EventFeaturedMedia/EventFeaturedMedia.component';
import React, { useState } from 'react';

const EventCard = ({ event }) => {
  const { name, id, startTime, endTime } = event;

  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] h-full`}
      data-nc-id='Card11'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <div className={`block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden aspect-w-4 aspect-h-3`}>
        <div>
          <EventFeaturedMedia post={event} isHover={isHover} />
        </div>
      </div>
      <Link to='/#' className='absolute inset-0'></Link>

      <div className='p-4 flex flex-col flex-grow space-y-3'>
        <span className='text-xs text-neutral-500'>
          {startTime} - {endTime}
        </span>
        <h2 className='nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 '>
          <Link to='/#' className='line-clamp-2' title={name}>
            {name}
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default EventCard;
