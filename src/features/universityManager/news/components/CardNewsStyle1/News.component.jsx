import { DEMO_CATEGORIES } from '../../../../../data/taxonomies';
import { DEMO_POSTS_NEWS } from '../../../../../data/posts';
import { Helmet } from 'react-helmet';
import React from 'react';
import SectionLatestPosts from './components/SectionLatestPosts.component';

const NewsComponent = (props) => {
  const { news } = props;
  console.log('newscomponent : ', news);
  return (
    <div className='nc-PageHomeDemo6 relative [ nc-section-rounded-md ]'>
      <Helmet>
        <title>Home || Blog Magazine React Template</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600&display=swap'
          rel='stylesheet'></link>
      </Helmet>

      {/* ======== ALL SECTIONS ======== */}
      <div className='relative overflow-hidden'>
        {/* ======= START CONTAINER ============= */}

        {/* === SECTION 11 === */}
        <div className='dark bg-neutral-900 dark:bg-black dark:bg-opacity-20 text-neutral-100'>
          <div className='relative container'>
            <SectionLatestPosts
              heading='Tất Cả Bài Viết'
              className='py-16 lg:py-24'
              news={news}
              widgetPosts={DEMO_POSTS_NEWS.filter((_, i) => i > 2 && i < 7)}
              categories={DEMO_CATEGORIES.filter((_, i) => i > 2 && i < 8)}
              tags={DEMO_CATEGORIES}
              postCardName='card4'
              gridClass='sm:grid-cols-2'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
