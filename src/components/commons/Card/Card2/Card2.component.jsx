import { Link } from 'react-router-dom';
import CardAuthor from '../../CardAuthor/CardAuthor.component';
import CategoryBadgeList from '../../CategoryBadgeList/CategoryBadgeList.component';
import NcImage from '../../NcImage/NcImage.component';
import PostCardLikeAndComment from '../../PostCardLikeAndComment/PostCardLikeAndComment.component';
import PostCardSaveAction from '../../PostCardSaveAction/PostCardSaveAction.component';
import PostTypeFeaturedIcon from '../../PostTypeFeaturedIcon/PostTypeFeaturedIcon.component';
import React from 'react';
import SocialsShare from '../../SocialsShare/SocialsShare.component';
const Card2 = ({ className = 'h-full', size = 'normal', post }) => {
  const { title, href, readingTime, featuredImage, desc, categories, date, author, postType } = post;

  return (
    <div
      className={`nc-Card2 group relative flex flex-col  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] overflow-hidden ${className}`}
      data-nc-id='Card2'>
      <span className='block flex-shrink-0 flex-grow relative w-full h-0 pt-[75%] sm:pt-[55%] rounded-xl sm:rounded-b-none overflow-hidden'>
        <NcImage containerClassName='absolute inset-0' src={featuredImage} alt={title} />
        <PostTypeFeaturedIcon
          className='absolute bottom-2 left-2'
          postType={postType}
          wrapSize='w-8 h-8'
          iconSize='w-4 h-4'
        />
      </span>

      <SocialsShare className='absolute hidden md:grid gap-[5px] right-4 top-4 opacity-0 z-[-1] group-hover:z-10 group-hover:opacity-100 transition-all duration-300' />
      <Link to={href} className='absolute inset-0' />

      <div className='p-4 sm:p-5 flex flex-col'>
        <div className='space-y-3'>
          <CategoryBadgeList itemClass='relative' categories={categories} />
          <h2
            className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors ${
              size === 'large' ? 'text-lg sm:text-2xl' : 'text-base'
            }`}>
            <Link to={href} className='line-clamp-2' title={title}>
              {title}
            </Link>
          </h2>
          <span className='block text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2'>{desc}</span>
        </div>
        <CardAuthor className='relative my-4' date={date} author={author} />
        <div className='flex items-center justify-between mt-auto'>
          <PostCardLikeAndComment className='relative' postData={post} />
          <PostCardSaveAction className='relative' postData={post} readingTime={readingTime} />
        </div>
      </div>
    </div>
  );
};

export default Card2;
