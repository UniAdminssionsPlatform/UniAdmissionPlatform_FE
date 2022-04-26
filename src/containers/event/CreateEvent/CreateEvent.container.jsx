import { createEvent } from '../../../services/event/CreateEvent/CreateEvent';
import { notification } from 'antd';
import CreateEventComponent from '../../../components/event/CreateEvent/CreateEvent.component';
import React from 'react';

const onSubmit = (value) => {
  createEvent(
    value.title,
    value.short_description,
    value.description,
    value.thumbnail,
    value.file,
    value.host_name,
    value.target_student,
    value.event_type,
    value.address,
    value.province,
    value.meeting_url
  )
    .then((userCredential) => {
      console.log(userCredential);
      notification.success({
        message: 'Tạo sự kiện thành công!'
      });
    })
    .catch(() => {
      notification.error({
        message: 'Tạo sự kiện thất bại!'
      });
    });
  console.log(value);
};

const CreateEventContainer = () => (
  <>
    <CreateEventComponent onFinish={onSubmit} />
  </>
);

export default CreateEventContainer;
