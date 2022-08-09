import React, { useEffect, useState } from 'react';
import UpdateEventComponent from './components/UpdateEvent.component';
import { updateEvent } from '../../../services/AdminUniversityService/AdminUniversityEventService';
import { notification } from 'antd';

const UpdateEventContainer = (props) => {
  const { eventId } = props;
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState();
  const [fileUrl, setFileUrl] = useState('');

  useEffect(() => setDescription(eventId.description), []);

  const handleUpdate = (values) => {
    values.thumbnailUrl = imageUrl ? imageUrl : eventId.thumbnailUrl;
    values.description = description ? description : eventId.description;
    values.fileUrl = fileUrl;
    values.status = eventId.status;
    values.eventTypeId = eventId.eventTypeId;
    values.districtId = eventId.districtId;
    values.meetingUrl = eventId.meetingUrl;
    values.startTime = eventId.startTime;
    values.endTime = eventId.endTime;
    values.id = eventId.id;

    updateEvent(values)
      .then(() => {
        notification.success({
          message: 'Chỉnh sửa sự kiện thành công'
        });
        window.location.reload();
      })
      .catch((err) => {
        notification.error({
          message: 'Chỉnh sửa sự kiện thất bại'
        });
      });
  };

  return (
    <>
      <UpdateEventComponent
        event={eventId}
        description={description}
        handleUpdate={handleUpdate}
        setDescription={setDescription}
        setImageUrl={setImageUrl}
      />
    </>
  );
};
export default UpdateEventContainer;
