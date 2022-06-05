import { getDetailMajorGroup } from '../../../services/MajorGroupService';
import DetailMajorGroupComponent from './components/DetailMajorGroup.component';

import React, { useEffect, useState } from 'react';

const DetailMajorGroupContainer = (props) => {
  const { majorGroupId } = props;

  const [majorGroup, setMajorGroup] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData(majorGroupId);
  }, []);

  const loadData = (id) => {
    getDetailMajorGroup(id).then((result) => {
      setMajorGroup(result.data.data);
      setLoading(false);
    });
  };

  return <DetailMajorGroupComponent majorGroup={majorGroup} loading={loading} />;
};
export default DetailMajorGroupContainer;
