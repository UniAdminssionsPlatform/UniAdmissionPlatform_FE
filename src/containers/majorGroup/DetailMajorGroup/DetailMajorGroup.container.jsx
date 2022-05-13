import { getDetailMajorGroup } from '../../../services/MajorGroupService';
import DetailMajorGroupComponent from '../../../components/majorGroup/DetailMajorGroup/DetailMajorGroup.component';
import React, { useEffect, useState } from 'react';

const DetailMajorGroupContainer = (props) => {
  const { majorGroupId } = props;

  console.log('id in container: ', majorGroupId);

  const [majorGroup, setMajorGroup] = useState('');

  useEffect(() => {
    loadData(majorGroupId);
  }, []);

  const loadData = (id) => {
    getDetailMajorGroup(id).then((result) => {
      console.log('data in container: ', result.data.data);
      setMajorGroup(result.data.data);
    });
  };

  return <DetailMajorGroupComponent majorGroup={majorGroup} />;
};
export default DetailMajorGroupContainer;
