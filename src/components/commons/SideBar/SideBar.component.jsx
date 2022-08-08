import React from 'react';
import WidgetTags from '../WidgetTags/WidgetTags.component';

const Sidebar = (props) => {
  const { newDetail } = props;
  return (
    <div className={`nc-SingleSidebar`}>
      <WidgetTags tags={newDetail.tagList} />
    </div>
  );
};

export default Sidebar;
