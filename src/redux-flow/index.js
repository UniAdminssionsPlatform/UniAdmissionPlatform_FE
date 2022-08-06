import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import authenticationReducer from './authentication/authentication-slice';
import selectedHighSchoolReducer from './selectedHighSchool/selectedHighSchool-slice';
import selectedSlotSliceReducer from './slot/selectedSlot-slice';
import loadTimeSliceReducer from './loadTime/loadTime-slice';
import commentReducer from './comment/comment-slice';
import eventPublishReducer from './eventPublish/eventPublish-slice';
import listEventPublishReducer from './listEventPublish/listEventPublish-slice';
import listNewPublishReducer from './newPublish/listNewPublish-slice';
import listEventCheckHighSchoolReducer from './highSchoolManageEventCheck/listEventCheckHighSchool-slice';
const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    selectedHighSchool: selectedHighSchoolReducer,
    selectedSlot: selectedSlotSliceReducer,
    loadTime: loadTimeSliceReducer,
    comments: commentReducer,
    eventPublish: eventPublishReducer,
    listEventPublish: listEventPublishReducer,
    listNewPublish: listNewPublishReducer,
    listEventCheckHighSchool: listEventCheckHighSchoolReducer
  },
  middleware: [thunkMiddleware]
});

export default store;
