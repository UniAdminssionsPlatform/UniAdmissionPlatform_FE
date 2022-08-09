import React, { useState } from 'react';
import Tag from '../Tags/Tags.component';
import WidgetHeading1 from '../../commons/WidgetTags/WidgetHeading.component';

const WidgetTags = ({ className = 'bg-neutral-100 dark:bg-neutral-800', tags, setPayload, payload }) => {
  const [checkSeleted, setCheckSelected] = useState('');
  const handleChangeTag = (data) => {
    if (data !== checkSeleted) {
      setCheckSelected(data);
      setPayload({ ...payload, tags: `[${data}]` });
    } else {
      setPayload({ ...payload, tags: '' });
      setCheckSelected('');
    }

    // if (data.length !== 0) {
    //   let pd = '';
    //   pd = '%5B';
    //   data.map((dt) => {
    //     if (data.length > 1) {
    //       if (data[data.length - 1] === dt) pd = pd + dt;
    //       else pd = `${pd + dt}%2C`;
    //     } else pd = pd + dt;
    //   });
    //   pd = `${pd}%5D`;
    //   setPayload({ ...payload, tags: pd });
    // } else setPayload({ ...payload, tags: '' });
  };
  return (
    <div className={`nc-WidgetTags rounded-3xl overflow-hidden ${className}`} data-nc-id='WidgetTags'>
      <WidgetHeading1 title='🏷 Tìm hiểu thêm với các thẻ bài viết' viewAll={tags} />
      <div className='flex flex-wrap p-4 xl:p-5'>
        {tags?.map((tag) => (
          <Tag className='' key={tag.id} tag={tag} handleChangeTag={handleChangeTag} />
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
