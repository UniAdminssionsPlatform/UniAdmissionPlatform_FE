import { closeASlot, fullASlot } from '../../../services/AdminHighSchoolSlotsService';
import { handleSlotNotification } from '../../../notification/CreateSlotNotification';
import React from 'react';
import SlotDetailComponent from './SlotDetail.component';
const SlotDetailContainer = (props) => {
  const { slotSelected, setReloadTrigger } = props;
  const handleUpdateFullSlot = (id) => {
    if (id != null) {
      fullASlot({ 'slot-id': id })
        .then((res) => {
          handleSlotNotification('success', 'Chuyển trạng thái slot full thành công', 'Hành động đóng slot thành công');
          setReloadTrigger(true);
        })
        .catch((err) => {
          handleSlotNotification('error', 'Chuyển trạng thái slot full thất bại', 'Hành động đóng slot thất bại');
        });
    }
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
          handleSlotNotification('error', 'Đóng slot thất bại', 'Hành động đóng slot thất bại');
        });
    }
  };
  return (
    <>
      <SlotDetailComponent
        slotSelected={slotSelected}
        handleUpdateFullSlot={handleUpdateFullSlot}
        handleUpdateCloseSlot={handleUpdateCloseSlot}
      />
    </>
  );
};
export default SlotDetailContainer;
