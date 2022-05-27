import { Helmet } from 'react-helmet';
import BgGlassmorphism from './component/BgGlassmorphism/BgGlassmorphism';
import React from 'react';
import SectionFounder from './component/SectionFounder/SectionFounder.component';
import SectionHero from './component/SectionHero/SectionHero.component';
import rightImg from '../../../images/about-hero-right.png';

const PageAbout = ({ className = '' }) => (
  <div className={`nc-PageAbout overflow-hidden relative ${className}`} data-nc-id='PageAbout'>
    <Helmet>
      <title>About || Blog Magazine React Template</title>
    </Helmet>

    {/* ======== BG GLASS ======== */}
    <BgGlassmorphism />

    <div className='container py-16 lg:py-28 space-y-16 lg:space-y-28'>
      <SectionHero
        rightImg={rightImg}
        heading='👋 Về chúng tôi'
        btnText=''
        subHeading='UniAdminPlatform là hệ thống giúp kết nối các trường đại học và THPT, nhằm giúp học sinh THPT nắm bắt được các sự kiện tuyển sinh của các trường đại học'
      />

      <SectionFounder />
    </div>
  </div>
);

export default PageAbout;
