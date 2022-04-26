import CreateEventComponent from '../../../components/event/CreateEvent/CreateEvent.component';
import React from 'react';

const onFinish = (value) => {
  console.log(value);
};

const CreateEventContainer = () => (
  <>
    <CreateEventComponent onFinish={onFinish} />
  </>
);

export default CreateEventContainer;
