import AboutUsComponent from '../../components/commons/AboutUs/AboutUs.component';
import React from 'react';
import { Helmet } from 'react-helmet';
const AboutUsPage = () => (
  <>
    <Helmet>
      <title>Về chúng tôi</title>
    </Helmet>
    <AboutUsComponent />
  </>
);
export default AboutUsPage;
