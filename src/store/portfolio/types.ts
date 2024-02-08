import {ScreenState} from '../../types/enums';

export type PortfolioState = {
  userHolding: UserHolding[];
  screenState: ScreenState;
};

export type UserHolding = {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
  close: number;
};

export type TResponseUserholding = {
  userHolding: UserHolding[];
};
