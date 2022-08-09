import React from 'react';
import HomePageContainer from '../../features/public/homePage/HomePage.container';
import { Helmet } from 'react-helmet';
const HomePagePage = () => (
  <>
    <Helmet>
      <title>Trang chủ</title>
    </Helmet>
    <HomePageContainer />
  </>
);
export default HomePagePage;
