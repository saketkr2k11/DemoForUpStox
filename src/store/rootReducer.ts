import {combineReducers} from '@reduxjs/toolkit';
import {portfolioReducer} from './portfolio/portfolio.store';

const rootReducer = combineReducers({
  portfolio: portfolioReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
