import React from 'react';
import ListNewDashboard from './ListNewDashboard';
import WelcomeComponent from './Welcome.component';
import { Divider, Typography } from 'antd';
import BackgroundSection from '../../../../components/commons/BackgroundSection/BackgroundSection.component';
import SectionSliderPostsComponent from '../../../../components/commons/SectionSliderPosts/SectionSliderPosts.component';
import { useSelector } from 'react-redux';
import FooterComponent from '../../Footer.component';

const HomePageComponent = () => {
  const { listNewPublish, isFetching } = useSelector((state) => state.listNewPublish);
  const { Text, Title } = Typography;
  return (
    <div className='container relative'>
      <div className='nc-PageHome relative'>
        <WelcomeComponent />
      </div>
      <ListNewDashboard />
      <Divider>
        <Title level={2}> 🎉Tin tức mới nhất</Title>
      </Divider>
      <div className='relative py-16'>
        <BackgroundSection />
        {!isFetching ? <SectionSliderPostsComponent posts={listNewPublish} /> : null}
      </div>
      {/*<FeaturedEvent events={events} />*/}
      <FooterComponent />
    </div>
  );
};
export default HomePageComponent;
