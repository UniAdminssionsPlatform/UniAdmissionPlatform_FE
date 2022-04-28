import React from 'react';
import WidgetTags from '../WidgetTags/WidgetTags.component';
import { DEMO_TAGS } from '../../../data/taxonomies';

const tags = DEMO_TAGS.filter((_, i) => i > 5);
const Sidebar = ({ className = 'space-y-6 ' }) => {
  return (
    <div className={`nc-SingleSidebar ${className}`}>
      <WidgetTags tags={tags} />
    </div>
  );
};

export default Sidebar;
