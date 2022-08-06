import PostCardLikeAndComment from '../PostCardLikeAndComment/PostCardLikeAndComment.component';
import React from 'react';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import { HIGH_SCHOOL_STUDENT } from '../../../constants/RoleType';

const SingleMetaAction2 = ({ className, meta }) => {
  const { user } = useSelector((state) => state.authentication);
  const { eventPublish } = useSelector((state) => state.eventPublish);
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
          <Button type={'primary'} size={'middle'} shape={'round'}>
            Theo dõi
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default SingleMetaAction2;
