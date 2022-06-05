import Card2 from '../Card/Card2/Card2.component';
import Card6 from '../Card/Card6/Card6.component';
import HeaderFilter from './HeaderFilter.component';
import React, { useState } from 'react';

const SectionMagazine = (props) => {
  const MAGAZINE1_TABS = ['Tất cả', 'Trường học ưu thích', 'Trường gợi ý', 'trường top'];
  const { viewNews, viewListNewState } = props;
  const [tabActive, setTabActive] = useState(MAGAZINE1_TABS[0]);
  const handleClickTab = (item) => {
    if (item === tabActive) return;

    setTabActive(item);
  };

  return (
    <div className={`nc-SectionMagazine1`}>
      <HeaderFilter
        tabActive={tabActive}
        tabs={MAGAZINE1_TABS}
        heading={'Những bài viết🎈'}
        onClickTab={handleClickTab}
      />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8'>
        <Card2 size='large' viewnews={viewNews} />
        <div className='grid gap-6 md:gap-8'>
          {viewListNewState?.map((item) => (
            <Card6 key={viewListNewState.id} viewlistnews={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionMagazine;
