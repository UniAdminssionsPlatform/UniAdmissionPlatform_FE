/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
const commentSlice = createSlice({
  name: 'comments',
  initialState: {
    data: [],
    isFetching: false,
    comment: {}
  },
  reducers: {
    storeComments: (state, action) => {
      return {
        ...state,
        comment: action.payload
      };
    },
    cleanComments: (state) => {
      return { ...state, comment: {} };
    }
  }
});

export const commentAction = commentSlice.actions;
export default commentSlice.reducer;
