import { ViewListNews } from '../../../services/ViewListNews';
import { ViewNews } from '../../../services/ViewNews';
import HomePageComponent from '../homePage/components/HomePage.component';
import React, { useEffect, useState } from 'react';

const ViewNewsContainer = () => {
  const [viewNews, setViewNews] = useState('');
  const [viewListNewState, setViewListNewState] = useState();

  useEffect(() => {
    getListViewNews();
  }, []);

  const getListViewNews = () => {
    ViewListNews()
      .then((result) => {
        setViewListNewState(result.data.data.list);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getViewNews(4);
  }, []);

  const getViewNews = (newID) => {
    ViewNews(newID)
      .then((result) => {
        setViewNews(result.data.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <HomePageComponent viewNews={viewNews} viewListNewState={viewListNewState} />
    </>
  );
};

export default ViewNewsContainer;
