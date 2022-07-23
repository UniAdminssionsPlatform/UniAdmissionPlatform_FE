import { commentToTheEventService, getCommentByEventIdService } from '../../services/PublishService';
import { notification } from 'antd';
import CommentComponent from './Comment.component';
import React, { useEffect, useState } from 'react';
const CommentContainer = (props) => {
  const { eventId } = props;
  const [isCommentLoading, setIsCommentLoading] = useState(true);
  const [forceReder, setForceRender] = useState();
  const [listComment, setListComment] = useState();
  const [initValue, setInitValue] = useState({});
  const reRender = () => {
    setForceRender(Math.random());
  };
  const getCommentByEventId = () => {
    const request = {
      eventId,
      limit: 10,
      page: 1
    };
    getCommentByEventIdService(request)
      .then((res) => {
        setListComment(res.data.data);
        setIsCommentLoading(false);
      })
      .catch(() => {
        setIsCommentLoading(true);
      });
  };
  const handleComment = (data) => {
    commentToTheEvent(data);
  };
  const commentToTheEvent = (data) => {
    const request = {
      eventId,
      content: data.content
    };
    commentToTheEventService(request)
      .then(() => {
        notification.success({
          message: 'Bình luận thành công',
          description: `Bình luận thành công vào bài viết [ID=${eventId}]`
        });
        setInitValue([
          {
            name: ['content'],
            value: null
          }
        ]);
        reRender();
        setIsCommentLoading(false);
      })
      .catch(() => setIsCommentLoading(true));
  };
  useEffect(() => getCommentByEventId(), [forceReder]);
  return (
    <CommentComponent
      listComment={listComment}
      isCommentLoading={isCommentLoading}
      handleComment={handleComment}
      initValue={initValue}
    />
  );
};
export default CommentContainer;
