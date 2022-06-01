import { createSlice } from '@reduxjs/toolkit';

const selectedSlotSlice = createSlice({
  name: 'selectedSlot',
  initialState: {
    data: [],
    slot: {},
    isSelected: false
  },
  reducers: {
    selectedSlot: (state, action) => {
      return { ...state, isSelected: true, slot: action.payload };
    },
    cancel: (state) => {
      return { ...state, isSelected: false, slot: {} };
    }
  }
});
export const selectedSlotAction = selectedSlotSlice.actions;
export default selectedSlotSlice.reducer;
