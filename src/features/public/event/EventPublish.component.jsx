import DetailEventComponent from '../../../components/detailEvent/DetailEvent.component';
import React from 'react';
const EventPublishComponent = (props) => {
  const { event } = props;
  return (
    <>
      <DetailEventComponent event={event} loading={false} />
    </>
  );
};
export default EventPublishComponent;
