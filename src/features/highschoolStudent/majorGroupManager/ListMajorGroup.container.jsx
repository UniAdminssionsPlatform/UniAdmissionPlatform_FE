import { getAllMajorGroup } from '../../../services/MajorGroupService';
import ListMajorComponent from './components/ListMajorGroup.component';
import React, { useEffect, useState } from 'react';
const ListMajorContainer = () => {
  const [listMajorGroup, setListMajorGroup] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getListMajorGroup();
  }, []);
  const getListMajorGroup = () => {
    getAllMajorGroup().then((result) => {
      setListMajorGroup(result.data.data.list);
      setLoading(false);
    });
  };
  return (
    <>
      <ListMajorComponent data={listMajorGroup} loading={loading} />
    </>
  );
};
export default ListMajorContainer;
