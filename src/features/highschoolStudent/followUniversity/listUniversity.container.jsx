import React, { useEffect, useState } from 'react';
import ListUniversityComponent from './components/listUniversity.component';
import { Skeleton } from 'antd';
import { FollowUniversity, ListUniversityPaging } from '../../../services/FollowUniversityService';
import { FollowSuccessNotification } from '../../../notification/FollowNotification';

const ListUniversityContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [universities, setUniversities] = useState();
  const [dataSearch, setDataSearch] = useState({
    page: 1,
    limit: 10,
    name: ''
  });

  //Follow button
  const handleFollowButton = (value) => {
    FollowUniversity({
      universityId: value.id
    })
      .then((result) => {
        FollowSuccessNotification('success', result.data.msg);
      })
      .catch((error) => {
        FollowSuccessNotification('error', error.response.data.msg);
      });
  };

  //Search by name
  const handleChangeEventName = (data) => {
    if (data !== undefined) setDataSearch({ ...dataSearch, name: data });
    else setDataSearch({ ...dataSearch, name: '' });
  };

  //Paging
  const onChange = (page, limit) => {
    setDataSearch({
      ...dataSearch,
      page,
      limit
    });
  };

  //Get list universities
  useEffect(() => {
    getList(dataSearch);
  }, [dataSearch]);

  const getList = (data) => {
    ListUniversityPaging(data).then((result) => {
      setUniversities(result.data.data);
      setIsLoading(false);
    });
  };

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <ListUniversityComponent
          universities={universities}
          onChange={onChange}
          setDataSearch={setDataSearch}
          setIsLoading={setIsLoading}
          dataSearch={dataSearch}
          handleChangeEventName={handleChangeEventName}
          handleFollowButton={handleFollowButton}
        />
      )}
    </>
  );
};

export default ListUniversityContainer;
