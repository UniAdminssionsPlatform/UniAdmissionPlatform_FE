import PostCardCommentBtn from '../PostCardCommentBtn/PostCardCommentBtn.component';
import React from 'react';

const PostCardLikeAndComment = ({
  className = '',
  itemClass = 'px-3 h-8 text-xs',
  hiddenCommentOnMobile = true,
  postData
}) => (
  <div
    className={`nc-PostCardLikeAndComment flex items-center space-x-2 ${className}`}
    data-nc-id='PostCardLikeAndComment'>
    {/*<PostCardLikeContainer*/}
    {/*  className={itemClass}*/}
    {/*  like={postData.like}*/}
    {/*  onClickLike={onClickLike}*/}
    {/*  postId={postData.id}*/}
    {/*/>*/}
    <PostCardCommentBtn
      href={postData.href}
      commentCount={postData.commentCount}
      className={`${hiddenCommentOnMobile ? 'hidden sm:flex' : 'flex'}  ${itemClass}`}
    />
  </div>
);

export default PostCardLikeAndComment;
