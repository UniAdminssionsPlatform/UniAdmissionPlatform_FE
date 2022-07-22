import { Drawer, Typography } from 'antd';
import React, { useState } from 'react';

const CreateNewComponent = (props) => {
  const { visibleDrawer, setVisibleDrawer } = props;
  const { Text, Title } = Typography;
  const onClose = () => {
    setVisibleDrawer(false);
  };
  return (
    <>
      <Drawer
        title={<Title level={3}>Tạo bài viết</Title>}
        placement={'right'}
        closable={false}
        onClose={onClose}
        visible={visibleDrawer}
        key={'right'}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default CreateNewComponent;
