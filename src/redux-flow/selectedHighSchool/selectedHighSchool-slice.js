import { createSlice } from '@reduxjs/toolkit';

const selectedHighSchoolSlice = createSlice({
  name: 'selectedHighSchool',
  initialState: {
    data: [],
    highSchool: {},
    isSelected: false
  },
  reducers: {
    fetchingSelectedHighSchool: (state, action) => {
      state = {
        ...state,
        data: [],
        isSelected: true
      };
    },
    selectedHighSchool: (state, action) => {
      return { ...state, isSelected: true, highSchool: action.payload };
    },
    cancel: (state) => {
      return { ...state, isSelected: false, user: {} };
    }
  }
});
export const selectedHighSchoolActions = selectedHighSchoolSlice.actions;
export default selectedHighSchoolSlice.reducer;