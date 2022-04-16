import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  recentLiked: [],
  recentRemoved: []
};

export const commentLikeSlice = createSlice({
  name: 'commentLike',
  initialState,
  reducers: {
    addNewLikedByPostId: (state, action) => {
      state = {
        ...state,
        recentLiked: [...state.recentLiked, action.payload],
        recentRemoved: state.recentRemoved.filter((item) => item !== action.payload)
      };
      return state;
    },
    removeLikedByPostId: (state, action) => {
      state = {
        ...state,
        recentRemoved: [...state.recentRemoved, action.payload],
        recentLiked: state.recentLiked.filter((item) => item !== action.payload)
      };
      return state;
    }
  }
});

// Action creators are generated for each case reducer function
export const { addNewLikedByPostId, removeLikedByPostId } = commentLikeSlice.actions;

export const selectCommentRecentLikeds = (state) => state.commentLikes.recentLiked;
export const selectCommentRecentRemoveds = (state) => state.commentLikes.recentRemoved;
export default commentLikeSlice.reducer;
