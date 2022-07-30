import React, { useState } from 'react';
import HeaderFilter from '../../../../components/commons/SectionMagazine/HeaderFilter.component';
import Card18 from '../../../../components/commons/Card/Card18/Card18.component';
import Card19 from '../../../../components/commons/Card/Card19/Card19.component';
const FeaturedEvent = (props) => {
  const { events } = props;
  const [tabActive, setTabActive] = useState();
  const handleClickTab = (item) => {
    setTabActive(item);
  };

  return (
    <div className={`nc-SectionMagazine10`}>
      {/*<HeaderFilter onClickTab={handleClickTab} />*/}
      {!events.length && <span>Nothing we found!</span>}
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-5 gap-5'>
          {events.map((item, index) => (
            <Card18 showCategories={false} className='sm:row-span-3 col-span-1' key={index} event={item} />
          ))}

          {events[3] && (
            <Card19
              ratio='aspect-w-4 aspect-h-3 sm:aspect-h-1 sm:aspect-w-16 '
              className='sm:col-span-2 sm:row-span-2'
              titleClass='text-xl sm:text-2xl xl:text-2xl'
              post={events[3]}
              showCategories={false}
            />
          )}
        </div>
        {events[0] && <Card19 className='' event={events[0]} />}
      </div>
    </div>
  );
};

export default FeaturedEvent;
