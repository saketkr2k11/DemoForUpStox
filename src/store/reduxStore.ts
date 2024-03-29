import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import createSagaMiddlewere from 'redux-saga';

import rootReducer, {RootState} from './rootReducer';
import {rootSaga} from './rootSaga';
import {createLogger} from 'redux-logger';

const logger: any = createLogger({
  // ...options
  collapsed: true,
});

const saga = createSagaMiddlewere();

const reduxStore = configureStore({
  reducer: rootReducer,
  middleware: [saga, logger],
  // middleware: [saga],
});

saga.run(rootSaga);

export type AppDispatch = typeof reduxStore.dispatch;
export type AppState = ReturnType<typeof reduxStore.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default reduxStore;
