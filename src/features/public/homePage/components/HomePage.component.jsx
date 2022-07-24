import { Helmet } from 'react-helmet';
import React from 'react';
import ListNewDashboard from './ListNewDashboard';
import WelcomeComponent from './Welcome.component';
import { Typography } from 'antd';

const HomePageComponent = (props) => {
  const { Text, Title } = Typography;
  return (
    <div className='container relative'>
      <div className='nc-PageHome relative'>
        <Helmet>
          <title>Dashboard || UniFlatForm</title>
        </Helmet>
        <WelcomeComponent />
      </div>
      <ListNewDashboard />
      {/*<FeaturedEvent events={events} />*/}
    </div>
  );
};
export default HomePageComponent;
