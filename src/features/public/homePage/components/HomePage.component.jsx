import { DEMO_POSTS } from '../../../../data/posts';
import { Helmet } from 'react-helmet';
import BgGlassmorphism from '../../../../components/commons/BgGlassmorphism/BgGlassmorphism';
import React from 'react';
import SectionLargeSlider from '../../../../components/commons/SectionLargeSlider/SectionLargeSlider';
import SectionMagazine from '../../../../components/commons/SectionMagazine/SectionMagazine.component';

const HomePageComponent = (props) => {
  const { viewNews, viewListNewState } = props;
  return (
    <div>
      <div className='nc-PageHome relative'>
        <Helmet>
          <title>Home || UniFlatForm</title>
        </Helmet>
        <div className='relative overflow-hidden'>
          <BgGlassmorphism />
          <div className='container relative'>
            <SectionLargeSlider
              className='pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-24 '
              posts={DEMO_POSTS.filter((_, i) => i < 3)}
            />
            <SectionMagazine className='py-16 lg:py-28' viewNews={viewNews} viewListNewState={viewListNewState} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePageComponent;
