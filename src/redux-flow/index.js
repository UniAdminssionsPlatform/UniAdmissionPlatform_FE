import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authenticationReducer from './authentication/authentication-slice';
import selectedHighSchoolReducer from './selectedHighSchool/selectedHighSchool-slice';
const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    selectedHighSchool: selectedHighSchoolReducer
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false
    })
  ]
});

export default store;
