import { getNewsService } from '../../../services/NewsService';
import NewsComponent from '../../universityManager/news/components/CardNewsStyle1/News.component';
import React, { useEffect, useState } from 'react';

const SingleNewContainer = () => {
  const [news, setNews] = useState();

  const [dataSearch, setDataSearch] = useState({
    page: 1,
    limit: 10,
    title: ''
  });

  const onChange = (page, limit) => {
    setDataSearch({
      ...dataSearch,
      page,
      limit
    });
  };

  const handleChangeNewsName = (data) => {
    if (data !== undefined) setDataSearch({ ...dataSearch, title: data });
    else setDataSearch({ ...dataSearch, title: '' });
  };

  useEffect(() => {
    getPageNews(dataSearch);
  }, [dataSearch]);

  const getPageNews = (data) => {
    getNewsService(data).then((result) => {
      setNews(result.data.data);
    });
  };
  return (
    <>
      <NewsComponent news={news} onChange={onChange} handleChangeNewsName={handleChangeNewsName} />
    </>
  );
};

export default SingleNewContainer;
