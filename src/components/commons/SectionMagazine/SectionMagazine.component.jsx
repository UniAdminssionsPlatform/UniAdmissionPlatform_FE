import Card2 from '../Card/Card2/Card2.component';
import Card6 from '../Card/Card6/Card6.component';
import HeaderFilter from './HeaderFilter.component';
import React, { useState } from 'react';
const SectionMagazine = ({ posts, tabs, heading = 'Thông tin tuyển sinh🎈 ', className = '' }) => {
  const [tabActive, setTabActive] = useState(tabs[0]);
  const handleClickTab = (item) => {
    if (item === tabActive) return;

    setTabActive(item);
  };

  return (
    <div className={`nc-SectionMagazine1 ${className}`}>
      <HeaderFilter tabActive={tabActive} tabs={tabs} heading={heading} onClickTab={handleClickTab} />
      {!posts.length && <span>Nothing we found!</span>}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8'>
        {posts[0] && <Card2 size='large' post={posts[0]} />}
        <div className='grid gap-6 md:gap-8'>
          {posts
            .filter((_, i) => i < 4 && i > 0)
            .map((item, index) => (
              <Card6 key={index} post={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SectionMagazine;
