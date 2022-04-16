import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducers from './rootReducers';
import storage from 'redux-persist/lib/storage';

const isDev = process.env.NODE_ENV === 'development';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['darkmode']
};

const rootReducer = combineReducers(rootReducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewareLogger = !!isDev ? logger : [];

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(middlewareLogger)
});

export const persistor = persistStore(store);

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
