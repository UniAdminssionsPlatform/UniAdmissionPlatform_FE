import { Tag } from 'antd';
import React from 'react';
const ListTagComponent = (props) => {
  const { listData } = props;
  return listData.map((subData) => (
    <Tag color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}>{subData.name}</Tag>
  ));
};
export default ListTagComponent;
