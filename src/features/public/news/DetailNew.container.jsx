import { ViewNewsDetail } from '../../../services/NewsDetailService';
import NewDetailComponent from './components/NewDetail.component';
import React, { useEffect, useState } from 'react';

const DetailNewContainer = (props) => {
  const [newDetail, setNewsDetail] = useState('');
  const { newsId } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    newsDetail(newsId);
  }, [newsId]);

  const newsDetail = (newsID) => {
    ViewNewsDetail(newsID).then((result) => {
      setNewsDetail(result.data.data);
      setLoading(false);
    });
  };
  return (
    <>
      <NewDetailComponent newDetail={newDetail} loading={loading} />
    </>
  );
};

export default DetailNewContainer;
