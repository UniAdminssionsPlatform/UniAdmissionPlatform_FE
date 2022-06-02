import React, { useEffect, useState } from 'react';
import HomePageComponent from '../../components/homepage/HomePage.component';
import { ViewListNews } from '../../services/news/ViewListNews';
import { ViewNews } from '../../services/news/ViewNews';

const ViewNewsContainer = () => {
  const [viewnews, setViewNews] = useState('');
  const [viewlistnews, setViewListNews] = useState();

  useEffect(() => {
    getListViewNews();
  }, []);

  const getListViewNews = () => {
    ViewListNews()
      .then((result) => {
        setViewListNews(result.data.data.list);
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
      <HomePageComponent viewnews={viewnews} viewlistnews={viewlistnews} />
    </>
  );
};

export default ViewNewsContainer;
