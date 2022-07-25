import CommentContainer from '../../../../components/comment/Comment.container';
import DetailEventComponent from '../../../../components/detailEvent/DetailEvent.component';
import React from 'react';
const SingleEventComponent = (props) => {
  const { event, eventId } = props;
  return (
    <>
      <DetailEventComponent event={event} loading={false} />
      <CommentContainer eventId={eventId} />
    </>
  );
};
export default SingleEventComponent;
