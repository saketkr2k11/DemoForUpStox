import {all} from 'redux-saga/effects';
import portfolioSaga from './portfolio/saga/portfolio.saga';

export function* rootSaga() {
  yield all([...portfolioSaga]);
}
