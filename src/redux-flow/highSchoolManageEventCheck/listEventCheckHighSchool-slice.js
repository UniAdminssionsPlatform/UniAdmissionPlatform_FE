/* eslint-disable */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { notification } from 'antd';
import { getListEventCheckService } from '../../services/AdminHighSchoolService/AdminHighSchoolEventCheck';
import { storeListEventCheckHighSchool } from './listEventCheckHighSchool-action';

export const fetchEventCheckHighSchool = createAsyncThunk(
  'listEventCheck/fetch_list_event_check_high_chool',
  async (payload, { dispatch, rejectWithValue }) => {
    const param = {
      page: payload.page ? payload.page : 1,
      limit: payload.limit ? payload.limit : 10,
      status: ''
    };
    await getListEventCheckService(param)
      .then((res) => {
        dispatch(storeListEventCheckHighSchool(res.data));
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

const listEventCheckHighSchoolSlice = createSlice({
  name: 'listEventCheckHighSchool',
  initialState: {
    data: [],
    isFetching: true,
    listEventCheck: {},
    searchPayload: {
      page: '',
      limit: '',
      status: ''
    }
  },
  reducers: {
    storeListEventCheckHighSchool: (state, action) => {
      return {
        ...state,
        listEventCheck: action.payload,
        isFetching: false
      };
    },
    storeSearchPayload: (state, action) => {
      return {
        ...state,
        searchPayload: action.payload,
        isFetching: false
      };
    },
    cleanListEventCheckHighSchool: (state) => {
      return { ...state, listEventCheck: {} };
    }
  }
});

export const listEventCheckHighSchoolAction = listEventCheckHighSchoolSlice.actions;
export default listEventCheckHighSchoolSlice.reducer;
