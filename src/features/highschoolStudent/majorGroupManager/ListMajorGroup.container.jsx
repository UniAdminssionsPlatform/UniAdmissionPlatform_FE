import { getAllMajorGroup } from '../../../services/MajorGroupService';
import ListMajorComponent from './components/ListMajorGroup.component';
import React, { useEffect, useState } from 'react';
const ListMajorContainer = () => {
  const [listMajorGroup, setListMajorGroup] = useState();

  const [loading, setLoading] = useState(true);

  const [dataSearch, setDataSearch] = useState({
    limit: 12,
    page: 1
  });

  const [totalPage, setTotalPage] = useState();

  useEffect(() => {
    getListMajorGroup(dataSearch);
  }, [dataSearch]);
  const getListMajorGroup = (data) => {
    getAllMajorGroup(data).then((result) => {
      setListMajorGroup(result.data.data.list);
      setTotalPage(result.data.data.total);
      setLoading(false);
    });
  };
  const onChangePage = (page) => {
    setDataSearch({ ...dataSearch, page, limit: 12 });
  };
  return (
    <>
      <ListMajorComponent
        data={listMajorGroup}
        loading={loading}
        totalPage={totalPage}
        onChangePage={onChangePage}
        dataSearch={dataSearch}
      />
    </>
  );
};
export default ListMajorContainer;
