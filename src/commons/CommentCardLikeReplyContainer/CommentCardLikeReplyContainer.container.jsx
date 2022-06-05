import {
  addNewLikedByPostId,
  removeLikedByPostId
  // selectCommentRecentLikeds,
  // selectCommentRecentRemoveds
} from '../../app/commentLikes/commentLikes';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import CommentCardLikeReply from '../../components/commons/CommentCardLikeReply/CommentCardLikeReply.component';
import React from 'react';

const CommentCardLikeReplyContainer = ({ className = '', comment, ...args }) => {
  const { like, id } = comment;

  // const recentLikeds = useAppSelector(selectCommentRecentLikeds);
  // const recentRemoveds = useAppSelector(selectCommentRecentRemoveds);
  const dispatch = useAppDispatch();

  const isLiked = () => {
    // if (recentLikeds.includes(id)) return true;

    // if (like.isLiked && !recentRemoveds.includes(id)) return true;

    // return false;
    console.log('liked');
  };

  const getLikeCount = () => {
    // Recent Liked
    // if (recentLikeds.includes(id)) return like.count + 1;

    // if (like.isLiked && recentRemoveds.includes(id)) return like.count - 1;
    console.log('like count');
    // return like.count;
  };

  const handleClickLike = () => {
    if (isLiked()) dispatch(removeLikedByPostId(id));
    else dispatch(addNewLikedByPostId(id));
  };

  return (
    <CommentCardLikeReply
      className={className}
      onClickLike={handleClickLike}
      commentId={id}
      isLiked={isLiked()}
      likeCount={getLikeCount()}
      {...args}
    />
  );
};

export default CommentCardLikeReplyContainer;
