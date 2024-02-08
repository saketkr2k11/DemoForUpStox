import {call, put, takeLatest} from 'redux-saga/effects';
import {portfolioAction} from '../portfolio.store';
import {sagaPortfolioAction} from './sagaAction';
import {TResponseUserholding} from '../types';
import axios from 'axios';

const getAllStocks = async (): Promise<any> => {
  return axios
    .get('https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8')
    .then(res => {
      return res.data;
    })
    .catch(err => {
      throw err;
    });
};

function* fetchStocks() {
  try {
    yield put(portfolioAction.stocksRequestLoading());
    const res: TResponseUserholding = yield call(getAllStocks);
    yield put(
      portfolioAction.stocksRequestSuccess({
        list: res?.userHolding || [],
      }),
    );
  } catch {
    yield put(portfolioAction.stocksRequestFailure());
  }
}

export default [takeLatest(sagaPortfolioAction.FETCH_STOCKS, fetchStocks)];
