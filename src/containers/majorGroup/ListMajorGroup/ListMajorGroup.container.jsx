import { getAllMajorGroup } from '../../../services/MajorGroupService';
import ListMajorComponent from '../../../components/majorGroup/ListMajorGroup/ListMajorGroup.component';
import React, { useEffect, useState } from 'react';
const ListMajorContainer = () => {
  const [listMajorGroup, setListMajorGroup] = useState();

  useEffect(() => {
    getListMajorGroup();
  }, []);

  const getListMajorGroup = () => {
    getAllMajorGroup().then((result) => {
      setListMajorGroup(result.data.data.list);
    });
  };

  return (
    <>
      <ListMajorComponent data={listMajorGroup} />
    </>
  );
};
export default ListMajorContainer;
