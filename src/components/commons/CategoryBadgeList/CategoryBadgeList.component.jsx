import Badge from '../Badge/Badge.component';
import React from 'react';
import { COLOR_ICON, COLOR_SLOT_OPEN } from '../../../constants/Color';

const CategoryBadgeList = (props) => {
  const { tagList } = props;
  return (
    <div className={`nc-CategoryBadgeList`} data-nc-id='CategoryBadgeList'>
      {tagList.map((item, index) => (
        <Badge key={index} name={item.name} href={item.id} color={'blue'} />
      ))}
    </div>
  );
};

export default CategoryBadgeList;
