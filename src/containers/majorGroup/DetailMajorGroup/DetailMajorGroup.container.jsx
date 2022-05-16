import { getDetailMajorGroup } from '../../../services/MajorGroupService';
import DetailMajorGroupComponent from '../../../components/majorGroup/DetailMajorGroup/DetailMajorGroup.component';

import React, { useEffect, useState } from 'react';

const DetailMajorGroupContainer = (props) => {
  const { majorGroupId } = props;

  const [majorGroup, setMajorGroup] = useState('');

  useEffect(() => {
    loadData(majorGroupId);
  }, []);

  const loadData = (id) => {
    getDetailMajorGroup(id).then((result) => {
      setMajorGroup(result.data.data);
    });
  };

  return <DetailMajorGroupComponent majorGroup={majorGroup} />;
};
export default DetailMajorGroupContainer;
