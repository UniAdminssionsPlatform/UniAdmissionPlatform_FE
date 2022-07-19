import { getListEvent } from '../../../services/EventService';
import { useDebouncedCallback } from 'use-debounce';
import ListEventComponent from './components/ListEvent.component';
import React, { useEffect, useState } from 'react';

const ListEventContainer = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState();
  const [dataSearch, setDataSearch] = useState({
    name: '',
    status: 1,
    limit: 12,
    page: 1
  });
  const LoadData = (value) => {
    getListEvent(value).then((result) => {
      if (result.data.data.total === 0) setData('');
      else {
        setData(result.data.data.list);
        setTotal(result.data.data.total);
      }

      setLoading(false);
    });
  };
  useEffect(() => {
    LoadData({
      name: dataSearch.name ? dataSearch.name : '',
      status: dataSearch.status,
      limit: dataSearch.limit,
      page: dataSearch.page
    });
  }, [dataSearch]);

  const onSearch = useDebouncedCallback(
    // function
    (value) => {
      setLoading(true);
      setDataSearch({
        ...dataSearch,
        name: value
      });
    },
    // delay in ms
    2000
  );

  const onChangePage = (page) => {
    setDataSearch({ ...dataSearch, page, limit: 12 });
  };
  return (
    <>
      <ListEventComponent
        loading={loading}
        listEvent={data}
        total={total}
        onSearch={onSearch}
        onChangePage={onChangePage}
      />
    </>
  );
};
export default ListEventContainer;
