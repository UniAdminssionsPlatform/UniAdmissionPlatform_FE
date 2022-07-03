import { Divider, Typography } from 'antd';
import React from 'react';

const TitlePageComponent = (props) => {
  const { title, subTitle } = props;
  const { Title, Text } = Typography;
  return (
    <>
      <Title level={3}>{title}</Title>
      <Text type='secondary'>{subTitle}</Text>
      <Divider dashed />
    </>
  );
};
export default TitlePageComponent;
