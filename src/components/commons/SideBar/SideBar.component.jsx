import { DEMO_TAGS } from '../../../data/taxonomies';
import React from 'react';
import WidgetTags from '../WidgetTags/WidgetTags.component';

const tags = DEMO_TAGS.filter((_, i) => i > 5);
const Sidebar = (props) => {
  const { newDetail } = props;
  return (
    <div className={`nc-SingleSidebar`}>
      <WidgetTags tags={newDetail.tagList} />
    </div>
  );
};

export default Sidebar;
