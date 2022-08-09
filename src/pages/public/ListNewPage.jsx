import ListNewContainer from '../../features/public/news/ListNew.container';
import React from 'react';
import { Helmet } from 'react-helmet';
const ListNewPage = () => (
  <>
    <Helmet>
      <title>Danh sách tin tức</title>
    </Helmet>
    <ListNewContainer />
  </>
);
export default ListNewPage;
