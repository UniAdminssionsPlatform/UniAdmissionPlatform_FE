import React from 'react';
import SingleTitle from '../commons/SingleTitle/SingleTitle.component';
import PostMeta2 from './DetailEventPostMeta2.component';
import SingleMetaAction2 from '../commons/SingleMetaAction2/SingleMetaAction2.component';

const DetailEventHeader = (props) => {
  const { event } = props;
  return (
    <>
      <div>
        <div className='space-y-5'>
          <SingleTitle title={event.name} />
          <span className='block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1'>
            {event.shortDescription}
          </span>
          <div className='w-full border-b border-neutral-100 dark:border-neutral-800'></div>
          <div className='flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5'>
            <PostMeta2
              size='large'
              className='leading-none flex-shrink-0'
              event={event}
              hiddenCategories
              avatarRounded='rounded-full shadow-inner'
            />
            <SingleMetaAction2 event={event} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailEventHeader;
