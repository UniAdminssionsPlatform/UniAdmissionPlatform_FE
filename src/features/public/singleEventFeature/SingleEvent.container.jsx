import { PATH } from '../../../constants/Paths/Path';
import { getAEventPublishByIdService } from '../../../services/PublishService';
import { notification } from 'antd';
import { useHistory } from 'react-router-dom';
import SingleEventComponent from './components/SingleEvent.component';
import React, { useEffect, useState } from 'react';
const SingleEventContainer = (props) => {
  const { eventId } = props;
  const history = useHistory();
  const [event, setEvent] = useState({});
  const getEventByEventId = () => {
    getAEventPublishByIdService(eventId)
      .then((res) => setEvent(res.data))
      .catch(() => {
        notification.error({
          message: 'Không tìm thấy sự kiện này',
          description: `Sự kiện với [ID-${eventId}] không tìm thấy trong hệ thống`
        });
        history.push(PATH.PAGE_NOT_FOUND);
      });
  };
  useEffect(() => getEventByEventId(), []);
  return <SingleEventComponent event={event} eventId={eventId} />;
};
export default SingleEventContainer;
