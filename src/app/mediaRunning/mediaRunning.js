import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const mediaRunningSlice = createSlice({
  name: 'mediaRunning',
  initialState,
  reducers: {
    changeCurrentMediaRunning: (state, action) => ({
      ...state,
      ...action.payload
    }),
    changeStateMediaRunning: (state, action) => ({
      ...state,
      state: action.payload
    }),
    removeMediaRunning: (state) => ({
      listPostAudio: state.listPostAudio
    }),
    //
    addNewListPostAudio: (state, action) => ({
      ...state,
      listPostAudio: [...(state.listPostAudio || []), action.payload]
    })
  }
});

// Action creators are generated for each case reducer function
export const { changeCurrentMediaRunning, changeStateMediaRunning, removeMediaRunning, addNewListPostAudio } =
  mediaRunningSlice.actions;

export const selectCurrentMediaRunning = (state) => state.mediaRunning;

export default mediaRunningSlice.reducer;
