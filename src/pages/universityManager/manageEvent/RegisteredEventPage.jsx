import Layout from '../../../components/Layout';
import ManageEventContainer from '../../../features/universityManager/manageEvent/ManageEvent.container';
import React from 'react';
import TitlePageComponent from '../../../components/decorator/TitlePage.component';
import { Helmet } from 'react-helmet';

const RegisteredEventPage = () => (
  <>
    <Helmet>
      <title>Trang đăng ký event</title>
    </Helmet>
    <Layout>
      <TitlePageComponent
        title={'Sự kiện đã diễn ra'}
        subTitle={'Bạn có thể tìm kiếm, xem chi tiết các sự kiện đã được diễn ra'}
      />
      <ManageEventContainer />
    </Layout>
  </>
);
export default RegisteredEventPage;
