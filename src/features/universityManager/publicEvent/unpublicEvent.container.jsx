import React, { useEffect, useState } from 'react';
import { Skeleton } from 'antd';
import { useSelector } from 'react-redux';
import { ListEventToUnpublic, PublicEvent } from '../../../services/PublicService';
import { PublicSuccessNotification } from '../../../notification/PublicNotification';
import UnpublicEventComponent from './components/unpublicEvent.component';

const UnpublicEventContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [event2, setEvent2] = useState();
  const { user } = useSelector((state) => state.authentication);
  const [dataSearch, setDataSearch] = useState({
    name: '',
    hostname: '',
    status: '1',
    universityID: user?.universityId,
    page: 1,
    limit: 10
  });

  const reload = () => {
    window.location.reload();
  };

  //Unpublic button
  const handlePublicButton = (value) => {
    PublicEvent({
      eventId: value.id,
      isPublish: 'false'
    })
      .then((result) => {
        PublicSuccessNotification('success', result.data.msg);
        setTimeout(reload, 1000);
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
    ListEventToUnpublic(data).then((result) => {
      setEvent2(result.data.data);
      setIsLoading(false);
    });
  };

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <UnpublicEventComponent
          event2={event2}
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

export default UnpublicEventContainer;
