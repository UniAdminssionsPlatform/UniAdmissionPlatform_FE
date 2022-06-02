import React, { useEffect, useState } from 'react';
import NewsDetailComponent from '../../components/newsdetail/newsDetail.component';
import { ViewNewsDetail } from '../../services/NewsDetailService';

const NewsDetailContainer = (props) => {
  const [newsdetail, setnewsdetail] = useState('');
  const { newsId } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    newsDetail(newsId);
  }, [newsId]);

  const newsDetail = (newsID) => {
    ViewNewsDetail(newsID).then((result) => {
      setnewsdetail(result.data.data);
      setLoading(false);
    });
  };
  return (
    <>
      <NewsDetailComponent newsdetail={newsdetail} loading={loading} />
    </>
  );
};

export default NewsDetailContainer;
