import { PATH } from '../../../constants/Paths/Path';
import { getAEventPublishByIdService } from '../../../services/PublishService';
import { notification, Skeleton } from 'antd';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import SingleEventComponent from './components/SingleEvent.component';
import { storeEventPublish } from '../../../redux-flow/eventPublish/eventPublish-action';
import { useDispatch } from 'react-redux';
const SingleEventContainer = (props) => {
  const { eventId } = props;
  const history = useHistory();
  const [event, setEvent] = useState();
  const [isFetching, setIsFetching] = useState(true);
  const dispatch = useDispatch();
  const getEventByEventId = () => {
    getAEventPublishByIdService(eventId)
      .then((res) => {
        setEvent(res.data.data);
        dispatch(storeEventPublish(res.data.data));
        setIsFetching(false);
      })
      .catch(() => {
        setIsFetching(true);
        notification.error({
          message: 'Không tìm thấy sự kiện này',
          description: `Sự kiện với [ID-${eventId}] không tìm thấy trong hệ thống`
        });
        history.push(PATH.PAGE_NOT_FOUND);
      });
  };
  useEffect(() => getEventByEventId(), [eventId]);
  return !isFetching ? <SingleEventComponent event={event} eventId={eventId} /> : <Skeleton />;
};
export default SingleEventContainer;
