/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
const eventPublishSlice = createSlice({
  name: 'eventPublish',
  initialState: {
    data: [],
    isFetching: false,
    eventPublish: {}
  },
  reducers: {
    storeEventPublish: (state, action) => {
      return {
        ...state,
        eventPublish: action.payload
      };
    },
    cleanEventPublish: (state) => {
      return { ...state, eventPublish: {} };
    }
  }
});

export const eventPublishAction = eventPublishSlice.actions;
export default eventPublishSlice.reducer;
