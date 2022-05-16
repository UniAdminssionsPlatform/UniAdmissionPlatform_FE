import ButtonPrimary from '../../field/ButtonPrimary/ButtonPrimary.component';
import CommentCard from '../CommentCard/CommentCard.component';
import React from 'react';

const SingleCommentLists = ({ comments }) => {
  const cmtLv1 = comments.filter((item) => !item.parentId);

  const renderCommentItemChild = (comment) => (
    <li key={comment.id}>
      <CommentCard size='normal' comment={comment} />
      {comment.children && (
        <ul className='pl-4 mt-5 space-y-5 md:pl-9'>{comment.children.map(renderCommentItemChild)}</ul>
      )}
    </li>
  );

  const renderCommentItem = (comment) => (
    <li key={comment.id}>
      <CommentCard comment={comment} />
      {comment.children && (
        <ul className='pl-4 mt-5 space-y-5 md:pl-11'>{comment.children.map(renderCommentItemChild)}</ul>
      )}
    </li>
  );

  return (
    <ul className='nc-SingleCommentLists space-y-5'>
      {cmtLv1.map(renderCommentItem)}
      <ButtonPrimary className='dark:bg-primary-700 w-full'>View full comments (+117 comments)</ButtonPrimary>
    </ul>
  );
};

export default SingleCommentLists;
