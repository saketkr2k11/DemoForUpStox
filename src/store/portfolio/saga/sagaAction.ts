export const sagaPortfolioAction = {
  FETCH_STOCKS: 'FETCH_STOCKS',
};

export const PortfolioSagaAction = {
  fetchStocks: () => {
    return {type: sagaPortfolioAction.FETCH_STOCKS};
  },
};
