import { Link } from 'react-router-dom';
import { SINGLE } from '../../../data/single';
import Avatar from '../Avatar/Avatar.component';
import React from 'react';

const PostMeta2 = ({ className = 'leading-none', meta, hiddenCategories = false, size = 'normal', avatarRounded }) => {
  const { date, author, categories, readingTime } = meta;
  return (
    <div
      className={`nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 ${
        size === 'normal' ? 'text-xs' : 'text-sm'
      } ${className}`}
      data-nc-id='PostMeta2'>
      <Link to={SINGLE.author.href} className='flex items-center space-x-2'>
        <Avatar
          radius={avatarRounded}
          sizeClass={size === 'normal' ? 'h-6 w-6 text-sm' : 'h-10 w-10 sm:h-11 sm:w-11 text-xl'}
          imgUrl={SINGLE.author.avatar}
          userName={SINGLE.author.displayName}
        />
      </Link>
      <div className='ml-3'>
        <div className='flex items-center'>
          <Link to={SINGLE.author.href} className='block font-semibold'>
            {SINGLE.author.displayName}
          </Link>

          {!hiddenCategories && (
            <>
              <span className='mx-2 font-semibold'>·</span>
              <div className='ml-0'>
                <span className='text-xs'>🏷 </span>
                {SINGLE.categories.map((cat, index) => (
                  <Link key={cat.id} to={cat.href} className='font-semibold'>
                    {cat.name}
                    {index < SINGLE.categories.length - 1 && <span>, </span>}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
        <div className='text-xs mt-[6px]'>
          <span className='text-neutral-700 dark:text-neutral-300'>{SINGLE.date}</span>
          <span className='mx-2 font-semibold'>·</span>
          <span className='text-neutral-700 dark:text-neutral-300'>{SINGLE.readingTime} min read</span>
        </div>
      </div>
    </div>
  );
};

export default PostMeta2;
