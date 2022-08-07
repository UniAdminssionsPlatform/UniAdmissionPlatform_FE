import PostCardLikeAndComment from '../PostCardLikeAndComment/PostCardLikeAndComment.component';
import React, { useState } from 'react';
import { Button, notification } from 'antd';
import { useSelector } from 'react-redux';
import { HIGH_SCHOOL_STUDENT } from '../../../constants/RoleType';
import { followAEventByEventID, unFollowAEventByEventID } from '../../../services/PublishService';

const SingleMetaAction2 = ({ className, meta }) => {
  const [isFollowed, setIsFollowed] = useState(true);
  const { user } = useSelector((state) => state.authentication);
  const { eventPublish } = useSelector((state) => state.eventPublish);
  const handleFollowAEvent = () => {
    setIsFollowed(true);
    followAEventByEventID(eventPublish.id)
      .then((res) => {
        notification.success({
          message: 'Theo dõi Event thành công!',
          description: `Bạn đã theo dõi thành công event này!`
        });
      })
      .catch((err) => {
        notification.error({
          message: 'Theo dõi Event thất bại',
          description: `Lỗi ${err.response.data.msg}`
        });
      });
  };
  const handleUnFollowAEvent = () => {
    setIsFollowed(false);
    unFollowAEventByEventID(eventPublish.id)
      .then((res) => {
        notification.success({
          message: 'Hủy theo dõi Event thành công!',
          description: `Bạn đã hủy theo dõi thành công event này!`
        });
      })
      .catch((err) => {
        notification.error({
          message: 'Hủy theo dõi Event thất bại',
          description: `Lỗi ${err.response.data.msg}`
        });
      });
  };
  return (
    <div className={`nc-SingleMetaAction2 ${className}`}>
      <div className='flex flex-row space-x-2.5 items-center'>
        <PostCardLikeAndComment
          itemClass='px-4 h-9 text-sm'
          hiddenCommentOnMobile
          postData={meta}
          className='!space-x-2.5'
        />
        <div className='px-1'>
          <div className='border-l border-neutral-200 dark:border-neutral-700 h-6' />
        </div>
        {user?.roles === HIGH_SCHOOL_STUDENT ? (
          <>
            {eventPublish.isFollow === false || !isFollowed ? (
              <Button type={'prmiary'} size={'middle'} shape={'round'} onClick={handleFollowAEvent}>
                Theo dõi
              </Button>
            ) : (
              <Button type={'primary'} size={'middle'} shape={'round'} onClick={handleUnFollowAEvent}>
                Hủy theo dõi
              </Button>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default SingleMetaAction2;
