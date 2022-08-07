/* eslint-disable */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { notification } from 'antd';
import { storeNewsPublish } from './listNewPublish-action';
import { getNewsService } from '../../services/NewsService';

export const fetchListNewPublish = createAsyncThunk(
  'listNew/fetch_list_new_publish',
  async (payload, { dispatch, rejectWithValue }) => {
    const param = {
      page: payload.page ? payload.page : 1,
      limit: payload.limit ? payload.limit : 10,
      title: payload.title ? payload.title : '',
    };
    await getNewsService(param)
      .then((res) => {
        dispatch(storeNewsPublish(res.data.data));
      })
      .catch((err) => {
        notification.error({
          message: 'Truy vấn thất bại!',
          description: `Lỗi: ${err.message}`
        });
        return rejectWithValue(err.response);
      });
  }
);

const listNewPublishSlice = createSlice({
  name: 'listNewPublish',
  initialState: {
    data: [],
    isFetching: true,
    listNewPublish: {}
  },
  reducers: {
    storeListNewPublish: (state, action) => {
      return {
        ...state,
        listNewPublish: action.payload,
        isFetching: false
      };
    },
    cleanListNewPublish: (state) => {
      return { ...state, listNewPublish: {} };
    }
  }
});

export const listNewPublishAction = listNewPublishSlice.actions;
export default listNewPublishSlice.reducer;
