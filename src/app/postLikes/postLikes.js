import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  recentLiked: [],
  recentRemoved: []
}

export const postLikeSlice = createSlice({
  name: 'postLike',
  initialState,
  reducers: {
    addNewLikedByPostId: (state, action) => {
      state = {
        ...state,
        recentLiked: [...state.recentLiked, action.payload],
        recentRemoved: state.recentRemoved.filter(
          item => item !== action.payload
        )
      }
      return state
    },
    removeLikedByPostId: (state, action) => {
      state = {
        ...state,
        recentRemoved: [...state.recentRemoved, action.payload],
        recentLiked: state.recentLiked.filter(item => item !== action.payload)
      }
      return state
    }
  }
})

// Action creators are generated for each case reducer function
export const { addNewLikedByPostId, removeLikedByPostId } =
  postLikeSlice.actions

export const selectRecentLikeds = state => state.postLike.recentLiked
export const selectRecentRemoveds = state => state.postLike.recentRemoved
export default postLikeSlice.reducer
