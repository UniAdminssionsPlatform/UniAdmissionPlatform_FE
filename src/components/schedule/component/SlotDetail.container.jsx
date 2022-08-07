import {
  closeASlotService,
  fullASlotService,
  openASlotService
} from '../../../services/AdminHighSchoolService/AdminHighSchoolSlotsService';
import { handleSlotNotification } from '../../../notification/CreateSlotNotification';
import React from 'react';
import SlotDetailComponent from './SlotDetail.component';
const SlotDetailContainer = (props) => {
  const { slotSelected, setReloadTrigger } = props;
  const handleUpdateFullSlot = (id) => {
    if (id != null) {
      fullASlotService({ 'slot-id': id })
        .then((res) => {
          handleSlotNotification('success', 'Chuyển trạng thái slot full thành công', 'Hành động đóng slot thành công');
          setReloadTrigger(true);
        })
        .catch((err) => {
          handleSlotNotification('error', 'Chuyển trạng thái slot full thất bại', err);
        });
    }
  };
  const handleUpdateCloseSlot = (id) => {
    if (id != null) {
      closeASlotService({ 'slot-id': id })
        .then((res) => {
          handleSlotNotification('success', 'Đóng slot thành công', 'Hành động đóng slot thành công');
          setReloadTrigger(true);
        })
        .catch((err) => {
          handleSlotNotification('error', 'Đóng slot thất bại', err);
        });
    }
  };
  const handleOpenASlot = (id) => {
    if (id != null) {
      openASlotService({ 'slot-id': id })
        .then((res) => {
          handleSlotNotification('success', 'Mở slot thành công', 'Hành động mở thành công');
          setReloadTrigger(true);
        })
        .catch((err) => {
          handleSlotNotification('error', 'Chuyển trạng thái open thất bại', err);
        });
    }
  };
  return (
    <>
      <SlotDetailComponent
        slotSelected={slotSelected}
        handleUpdateFullSlot={handleUpdateFullSlot}
        handleUpdateCloseSlot={handleUpdateCloseSlot}
        handleOpenASlot={handleOpenASlot}
      />
    </>
  );
};
export default SlotDetailContainer;
