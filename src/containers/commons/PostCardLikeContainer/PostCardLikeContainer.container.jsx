import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hook'
import {
  selectRecentLikeds,
  selectRecentRemoveds,
  removeLikedByPostId,
  addNewLikedByPostId
} from '../../../app/postLikes/postLikes'
import PostCardLikeAction from '../../../components/commons/PostCardLikeAction/PostCardLikeAction.component'

const PostCardLikeContainer = ({ like, postId, onClickLike, ...args }) => {
  const recentLikeds = useAppSelector(selectRecentLikeds)
  const recentRemoveds = useAppSelector(selectRecentRemoveds)
  const dispatch = useAppDispatch()

  const isLiked = () => {
    if (recentLikeds.includes(postId)) {
      return true
    }
    if (like.isLiked && !recentRemoveds.includes(postId)) {
      return true
    }
    return false
  }

  const getLikeCount = () => {
    if (recentLikeds.includes(postId)) {
      return like.count + 1
    }
    if (like.isLiked && recentRemoveds.includes(postId)) {
      return like.count - 1
    }
    return like.count
  }

  const handleClickLike = () => {
    if (isLiked()) {
      dispatch(removeLikedByPostId(postId))
    } else {
      dispatch(addNewLikedByPostId(postId))
    }
    onClickLike && onClickLike(postId)
  }

  return (
    <PostCardLikeAction
      {...args}
      isLiked={isLiked()}
      likeCount={getLikeCount()}
      postId={postId}
      onClickLike={handleClickLike}
    />
  )
}

export default PostCardLikeContainer
