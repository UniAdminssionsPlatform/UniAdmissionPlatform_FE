import LayoutPageWithout from '../commons/LayoutPage/LayoutPageWithout.component';
import { useState } from 'react';
import ScheduleHighSchoolComponent from '../schedule/ScheduleHighSchool.component';

const SlotManagerComponent = (props) => {
  const { listSlot, setListSlot } = props;
  return (
    <LayoutPageWithout
      LayoutPage
      subHeading='Danh sách các trường cấp 3 có thể tổ chức sự kiện tuyển sinh'
      headingEmoji='⚙'
      heading='Dash board'>
      <div className='flex flex-col space-y-8 xl:space-y-0 xl:flex-row'>
        <div className='flex-shrink-0 max-w-xl xl:w-80 xl:pr-8'>abc</div>
        <ScheduleHighSchoolComponent listSlot={listSlot} setListSlot={setListSlot} />
      </div>
    </LayoutPageWithout>
  );
};
export default SlotManagerComponent;
