import { closeASlot } from '../../../services/AdminHighSchoolSlotsService';
import { handleSlotNotification } from '../../../notification/CreateSlotNotification';
import React from 'react';
import SlotDetailComponent from './SlotDetail.component';
const SlotDetailContainer = (props) => {
  const { slotSelected, setReloadTrigger } = props;
  const handleUpdateOpenSlot = (id) => {
    console.log(id);
    setReloadTrigger(true);
  };
  const handleUpdateCloseSlot = (id) => {
    if (id != null) {
      closeASlot({ 'slot-id': id })
        .then((res) => {
          handleSlotNotification('success', 'Đóng slot thành công', 'Hành động đóng slot thành công');
          setReloadTrigger(true);
        })
        .catch((err) => {
          console.log('bị lỗi');
          handleSlotNotification('error', 'Đóng slot thất bại', 'Hành động đóng slot thất bại');
        });
    }
  };
  return (
    <>
      <SlotDetailComponent
        slotSelected={slotSelected}
        handleUpdateOpenSlot={handleUpdateOpenSlot}
        handleUpdateCloseSlot={handleUpdateCloseSlot}
      />
    </>
  );
};
export default SlotDetailContainer;
