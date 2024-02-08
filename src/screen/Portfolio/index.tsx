import {FlatList, Text, View} from 'react-native';
import React, {useCallback, useEffect, useMemo} from 'react';
import Header from '../../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {getUserHolding} from '../../store/portfolio/portfolio.selector';
import {PortfolioSagaAction} from '../../store/portfolio/saga/sagaAction';
import {Rupee, ScreenState} from '../../types/enums';
import ListTile from '../../components/ListTile';
import {UserHolding} from '../../store/portfolio/types';
import {useStyles} from './styles';
import PortfolioSummary from '../../components/PortfolioSummary';
import SummaryTile from '../../components/SummaryTile';

const Portfolio = () => {
  const {screenState, userHolding = []} = useSelector(getUserHolding);

  const dispatch = useDispatch();
  const styles = useStyles();

  useEffect(() => {
    dispatch(PortfolioSagaAction.fetchStocks());
  }, [dispatch]);

  const renderItem = ({item}: {item: UserHolding}) => {
    return <ListTile item={item} />;
  };

  const separator = useCallback(() => {
    return <View style={styles.separator} />;
  }, [styles.separator]);

  const assetValue = useMemo(() => {
    const value = {
      currentValue: 0,
      todayPL: 0,
      TotalPL: 0,
      totalInvestMent: 0,
    };

    userHolding.forEach(holding => {
      value.currentValue += holding.ltp * holding.quantity;
      value.totalInvestMent += holding.avgPrice * holding.quantity;
      value.TotalPL += holding.ltp * holding.quantity;
      value.todayPL += holding.ltp * holding.quantity;
    });

    return value;
  }, [userHolding]);

  const expandedView = useMemo(() => {
    return (
      <View>
        <SummaryTile
          leftText="Curret Values"
          rightText={`${Rupee} ${assetValue.currentValue.toFixed(2)}`}
        />
        <SummaryTile
          leftText="Total Investment"
          rightText={`${Rupee} ${assetValue.totalInvestMent.toFixed(2)}`}
        />
        <SummaryTile
          leftText="Today's Profile & Loss"
          rightText={`${Rupee} ${assetValue.todayPL.toFixed(2)}`}
        />
        <View style={styles.expandedMargin}>
          <SummaryTile
            leftText="Profile & Loss"
            rightText={`${Rupee} ${assetValue.TotalPL.toFixed(2)}`}
            padding={4}
          />
        </View>
      </View>
    );
  }, [assetValue, styles.expandedMargin]);

  const collapsedView = useMemo(() => {
    return (
      <View style={styles.collapsedMargin}>
        <SummaryTile
          leftText="Profile & Loss"
          rightText={`${Rupee} ${assetValue.TotalPL.toFixed(2)}`}
          padding={4}
        />
      </View>
    );
  }, [assetValue, styles.collapsedMargin]);

  if (screenState === ScreenState.LOADING) {
    return (
      <View style={styles.loadingPage}>
        <Text style={styles.loading}>Fetching...</Text>
      </View>
    );
  }

  if (screenState === ScreenState.ERROR) {
    return (
      <View style={styles.loadingPage}>
        <Text style={styles.loading}>Something went wrong</Text>
      </View>
    );
  }

  return (
    <View style={styles.page}>
      <Header title="Upstox Holding" />
      <FlatList
        data={userHolding}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={separator}
      />
      <PortfolioSummary
        expandedView={expandedView}
        colapsedView={collapsedView}
      />
    </View>
  );
};

export default Portfolio;
