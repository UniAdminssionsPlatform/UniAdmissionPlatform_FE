import { Tag } from 'antd';
import React from 'react';
const ListTagComponent = (props) => {
  const { listData } = props;
  return listData.map((subData) => <Tag color='default'>{subData.name}</Tag>);
};
export default ListTagComponent;
