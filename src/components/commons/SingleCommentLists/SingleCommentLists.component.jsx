import CommentCard from '../CommentCard/CommentCard.component';
import React from 'react';

const SingleCommentLists = (props) => {
  const { comments } = props;
  // const cmtLv1 = comments.filter((item) => !item.parentId);
  // const renderCommentItemChild = (comment) => (
  //   <li key={comment.id}>
  //     <CommentCard size='normal' comment={comment} />
  //     {comment.children && (
  //       <ul className='pl-4 mt-5 space-y-5 md:pl-9'>{comment.children.map(renderCommentItemChild)}</ul>
  //     )}
  //   </li>
  // );
  // const renderCommentItem = (comment) => (
  //   <li key={comment.id}>
  //     <CommentCard comment={comment} />
  //     {comment.children && (
  //       <ul className='pl-4 mt-5 space-y-5 md:pl-11'>{comment.children.map(renderCommentItemChild)}</ul>
  //     )}
  //   </li>
  // );
  const renderComment = (comment) => (
    <li key={comment.id}>
      <CommentCard comment={comment} />
    </li>
  );

  return <ul className='nc-SingleCommentLists space-y-5'>{comments.map(renderComment)}</ul>;
};

export default SingleCommentLists;
