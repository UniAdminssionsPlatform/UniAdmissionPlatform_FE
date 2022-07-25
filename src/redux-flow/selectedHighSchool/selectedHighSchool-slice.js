import { createSlice } from '@reduxjs/toolkit';
import {SCHOOL_KEY} from "../../constants/AppConst";

const selectedHighSchoolSlice = createSlice({
  name: 'selectedHighSchool',
  initialState: {
    data: [],
    highSchool: JSON.parse(localStorage.getItem(SCHOOL_KEY)) || {},
    isSelected: false
  },
  reducers: {
    selectedHighSchool: (state, action) => {
      return { ...state, isSelected: true, highSchool: action.payload };
    },
    cancel: (state) => {
      return { ...state, isSelected: false, highSchool: {} };
    }
  }
});
export const selectedHighSchoolActions = selectedHighSchoolSlice.actions;
export default selectedHighSchoolSlice.reducer;
