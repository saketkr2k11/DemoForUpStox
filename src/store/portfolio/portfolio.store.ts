import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {PortfolioState, UserHolding} from './types';
import {ScreenState} from '../../types/enums';

const initialState: PortfolioState = {
  screenState: ScreenState.NONE,
  userHolding: [],
};

const portfolioSlice = createSlice({
  name: 'portfolioSlice',
  initialState: initialState,
  reducers: {
    // to do
    stocksRequestLoading: (state: PortfolioState) => {
      state.screenState = ScreenState.LOADING;
    },
    stocksRequestSuccess: (
      state: PortfolioState,
      action: PayloadAction<{list: UserHolding[]}>,
    ) => {
      state.screenState = ScreenState.SUCCESS;
      state.userHolding = action.payload.list;
    },
    stocksRequestFailure: (state: PortfolioState) => {
      state.screenState = ScreenState.ERROR;
    },
  },
});

export const {actions: portfolioAction, reducer: portfolioReducer} =
  portfolioSlice;
