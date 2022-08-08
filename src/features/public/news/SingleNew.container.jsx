import { fetchListNewPublish } from '../../../redux-flow/newPublish/listNewPublish-slice';
import { getListTagService } from '../../../services/TagService';
import { getNewsService } from '../../../services/NewsService';
import { notification } from 'antd';
import { useDispatch } from 'react-redux';
import NewsComponent from '../../universityManager/news/components/CardNewsStyle1/News.component';
import React, { useEffect, useState } from 'react';

const SingleNewContainer = () => {
  const [news, setNews] = useState();
  const [listTag, setListTag] = useState();
  const [loading, setLoading] = useState(true);

  //payload
  const [payload, setPayload] = useState({
    sort: 'CreateDate desc',
    page: 1,
    limit: 10,
    tags: '',
    title: ''
  });

  //payload handler
  const handleOnChangePayload = () => ({
    sort: payload?.sort ? payload.sort : '',
    page: payload?.page ? payload.page : 1,
    limit: payload?.limit ? payload.limit : 10,
    tags: payload?.tags ? payload.tags : [],
    title: payload?.title ? payload.title : ''
  });

  const onChange = (page, limit) => {
    setPayload({
      ...setPayload,
      page,
      limit
    });
  };

  const handleChangeNewsName = (data) => {
    if (data !== undefined) setPayload({ ...payload, title: data });
    else setPayload({ ...payload, title: '' });
  };

  //side effect handler
  useEffect(() => {
    funcGetListNew();
  }, [payload]);
  useEffect(() => getListTag(), []);

  const getListTag = () => {
    getListTagService()
      .catch()
      .then((res) => {
        setListTag(res.data.data.list);
      });
  };

  //calling api
  const funcGetListNew = () => {
    getNewsService(handleOnChangePayload(payload))
      .then((res) => {
        setNews(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
        notification.error({
          message: 'Truy vấn thất bại!',
          description: `${err.message}`,
          duration: 2
        });
      });
  };
  return (
    <>
      <NewsComponent
        news={news}
        listTag={listTag}
        payload={payload}
        loading={loading}
        setPayload={setPayload}
        onChange={onChange}
        handleChangeNewsName={handleChangeNewsName}
      />
    </>
  );
};

export default SingleNewContainer;
