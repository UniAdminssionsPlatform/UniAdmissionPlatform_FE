import React from 'react';
import Tag from '../Tags/Tags.component';
import WidgetHeading1 from '../../commons/WidgetTags/WidgetHeading.component';

const WidgetTags = ({ className = 'bg-neutral-100 dark:bg-neutral-800', tags }) => (
  <div className={`nc-WidgetTags rounded-3xl overflow-hidden ${className}`} data-nc-id='WidgetTags'>
    <WidgetHeading1 title='🏷 Discover more tags' viewAll={{ label: 'View all', href: '/#' }} />
    <div className='flex flex-wrap p-4 xl:p-5'>
      {tags.map((tag) => (
        <Tag className='mr-2 mb-2' key={tag.id} tag={tag} />
      ))}
    </div>
  </div>
);

export default WidgetTags;
