import { createSlice } from '@reduxjs/toolkit';
const loadTimeSlice = createSlice({
  name: 'loadTime',
  initialState: {
    data: [],
    isLoading: false
  },
  reducers: {
    isLoading: (state) => {
      return { ...state, isLoading: true };
    },
    loaded: (state) => {
      return { ...state, isLoading: false };
    }
  }
});
export const loadTimeAction = loadTimeSlice.actions;
export default loadTimeSlice.reducer;
