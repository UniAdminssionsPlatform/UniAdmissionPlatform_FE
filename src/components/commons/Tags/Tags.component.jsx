import React from 'react';

const Tag = ({ className, tag, handleChangeTag }) => (
  <a
    className={`nc-Tag inline-block bg-white text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg border border-neutral-100 md:py-2.5 md:px-4 dark:bg-neutral-700 dark:border-neutral-700 hover:border-neutral-200 dark:hover:bg-violet-600 mr-2 mb-2`}
    data-nc-id='Tag'
    onClick={() => {
      handleChangeTag(tag.id);
    }}>
    {`${tag.name}`}
    {/* {!hideCount && <span className='text-xs font-normal'></span>} */}
  </a>
);

export default Tag;
