import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recentSaved: [],
  recentRemoved: []
};

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    addNewSavedByPostId: (state, action) => {
      state = {
        ...state,
        recentSaved: [...state.recentSaved, action.payload],
        recentRemoved: state.recentRemoved.filter((item) => item !== action.payload)
      };
      return state;
    },
    removeSavedByPostId: (state, action) => {
      state = {
        ...state,
        recentRemoved: [...state.recentSaved, action.payload],
        recentSaved: state.recentSaved.filter((item) => item !== action.payload)
      };
      return state;
    }
  }
});
export const { addNewSavedByPostId, removeSavedByPostId } = bookmarkSlice.actions;

export const selectRecentSaveds = (state) => state.bookmark.recentSaved;
export const selectRecentRemoveds = (state) => state.bookmark.recentRemoved;
export default bookmarkSlice.reducer;
