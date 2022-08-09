import Badge from '../Badge/Badge.component';
import React from 'react';

const CategoryBadgeList = (props) => {
  const { tagList } = props;
  return (
    <div className={`nc-CategoryBadgeList flex flex-wrap space-x-2 space-y-1`} data-nc-id='CategoryBadgeList'>
      {tagList.map((item, index) => (
        <Badge key={index} name={item.name} href={item.id} color={'blue'} />
      ))}
    </div>
  );
};

export default CategoryBadgeList;
