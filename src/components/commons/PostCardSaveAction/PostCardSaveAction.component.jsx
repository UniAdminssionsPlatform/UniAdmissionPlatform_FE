import React from 'react';

const PostCardSaveAction = ({
  className = '',
  hidenReadingTime = false,
  // classBgIcon,
  readingTime
  // postData
}) => (
  // const { bookmark, id } = postData

  <div
    className={`nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 ${className}`}
    data-nc-id='PostCardSaveAction'>
    {!hidenReadingTime && !!readingTime && <span>{readingTime} min read</span>}

    {/*<BookmarkContainer*/}
    {/*  initBookmarked={bookmark.isBookmarked}*/}
    {/*  containerClassName={classBgIcon}*/}
    {/*  postId={id}*/}
    {/*/>*/}
  </div>
);

export default PostCardSaveAction;
