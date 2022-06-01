import { selectedSlotAction } from './selectedSlot-slice';

export const setSelectedSlot = (data) => (dispatch) => {
  console.log(data);
  dispatch(selectedSlotAction.selectedSlot(data));
};
export const CancelSelectedHighSchool = () => (dispatch) => {
  dispatch(selectedSlotAction.cancel());
};
