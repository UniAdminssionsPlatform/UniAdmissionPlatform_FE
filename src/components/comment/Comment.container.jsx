import { commentToTheEventService, getCommentByEventIdService } from '../../services/PublishService';
import { notification } from 'antd';
import CommentComponent from './Comment.component';
import React, { useEffect, useState } from 'react';
const CommentContainer = (props) => {
  const { eventId } = props;
  const [isCommentLoading, setIsCommentLoading] = useState(true);
  const [forceRender, setForceRender] = useState();
  const [listComment, setListComment] = useState();
  const [initValue, setInitValue] = useState({});
  const [request, setRequest] = useState({
    eventId,
    limit: 3,
    page: 1
  });
  const reRender = () => {
    setForceRender(Math.random());
  };
  const getCommentByEventId = () => {
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
  const handleShowAllMessage = () => {
    setRequest({ ...request, limit: listComment?.total });
  };
  const commentToTheEvent = (data) => {
    const eventRequest = {
      eventId,
      content: data.content
    };
    commentToTheEventService(eventRequest)
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
  useEffect(() => getCommentByEventId(), [forceRender, request]);
  return (
    <CommentComponent
      listComment={listComment}
      isCommentLoading={isCommentLoading}
      handleComment={handleComment}
      initValue={initValue}
      handleShowAllMessage={handleShowAllMessage}
    />
  );
};
export default CommentContainer;
