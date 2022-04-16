import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: {
    type: '/',
    data: {}
  }
};

export const currentPageSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    changeCurrentPage: (state, action) => {
      state = {
        ...state,
        currentPage: action.payload
      };
      return state;
    }
  }
});

// Action creators are generated for each case reducer function
export const { changeCurrentPage } = currentPageSlice.actions;

export const selectCurrentPageData = (state) => state.pages?.currentPage;

export default currentPageSlice.reducer;
