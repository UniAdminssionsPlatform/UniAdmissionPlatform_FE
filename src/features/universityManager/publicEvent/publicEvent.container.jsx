import { ListEventToPublic, PublicEvent } from '../../../services/PublicService';
import { PublicSuccessNotification } from '../../../notification/PublicNotification';
import { Skeleton } from 'antd';
import { useSelector } from 'react-redux';
import PublicEventComponent from './components/publicEvent.component';
import React, { useEffect, useState } from 'react';

const PublicEventContainer = (props) => {
  const { handleChangeActiveKey } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [event134, setEvent134] = useState();
  const { user } = useSelector((state) => state.authentication);
  const [dataSearch, setDataSearch] = useState({
    name: '',
    hostname: '',
    status: '0',
    universityID: user?.universityId,
    page: 1,
    limit: 10
  });

  //Public button
  const handlePublicButton = (value) => {
    PublicEvent({
      eventId: value.id,
      isPublish: 'true'
    })
      .then((result) => {
        PublicSuccessNotification('success', result.data.msg);
        handleChangeActiveKey('3');
      })
      .catch((error) => {
        PublicSuccessNotification('error', error.response.data.msg);
      });
  };

  //Search
  const handleChangeEventName = (data) => {
    if (data !== undefined) setDataSearch({ ...dataSearch, name: data });
    else setDataSearch({ ...dataSearch, name: '' });
  };
  const handleChangeEventHost = (data) => {
    if (data !== undefined) setDataSearch({ ...dataSearch, hostname: data });
    else setDataSearch({ ...dataSearch, hostname: '' });
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
    ListEventToPublic(data).then((result) => {
      setEvent134(result.data.data);
      setIsLoading(false);
    });
  };

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <PublicEventComponent
          event134={event134}
          onChange={onChange}
          setDataSearch={setDataSearch}
          setIsLoading={setIsLoading}
          dataSearch={dataSearch}
          handleChangeEventName={handleChangeEventName}
          handleChangeEventHost={handleChangeEventHost}
          handlePublicButton={handlePublicButton}
        />
      )}
    </>
  );
};

export default PublicEventContainer;
