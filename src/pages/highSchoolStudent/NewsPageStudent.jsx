import React from 'react';
import SingleNewContainer from '../../features/public/news/SingleNew.container';
import { Helmet } from 'react-helmet';

const NewsPageStudent = () => (
  <>
    <Helmet>
      <title>Trang thông tin học sinh</title>
    </Helmet>
    <SingleNewContainer />
  </>
);

export default NewsPageStudent;
