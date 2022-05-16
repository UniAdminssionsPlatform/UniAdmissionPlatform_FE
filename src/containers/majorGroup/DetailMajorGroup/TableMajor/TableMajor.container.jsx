import { getMajorBYMajorGroupId } from '../../../../services/MajorService';
import MajorTableComponent from '../../../../components/majorGroup/DetailMajorGroup/TableMajor/TableMajor.component';
import React, { useEffect, useState } from 'react';

const MajorTableContainer = (props) => {
  const { majorgroup } = props;
  const [listMajor, setListMajor] = useState();

  useEffect(() => {
    loadListMajorByGroupId(majorgroup?.id);
  }, [majorgroup]);
  const loadListMajorByGroupId = (id) => {
    getMajorBYMajorGroupId(id).then((result) => {
      setListMajor(result.data.data.list);
    });
  };
  return (
    <>
      <MajorTableComponent data={listMajor} />
    </>
  );
};
export default MajorTableContainer;
