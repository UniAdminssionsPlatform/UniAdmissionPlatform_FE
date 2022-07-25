import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authenticationReducer from './authentication/authentication-slice';
import selectedHighSchoolReducer from './selectedHighSchool/selectedHighSchool-slice';
import selectedSlotSliceReducer from './slot/selectedSlot-slice';
import loadTimeSliceReducer from './loadTime/loadTime-slice';
const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    selectedHighSchool: selectedHighSchoolReducer,
    selectedSlot: selectedSlotSliceReducer,
    loadTime: loadTimeSliceReducer
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false
    })
  ]
});

export default store;
