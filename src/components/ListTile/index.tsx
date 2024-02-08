import {Text, View} from 'react-native';
import React from 'react';
import {useStyles} from './styles';
import {UserHolding} from '../../store/portfolio/types';
import {Rupee} from '../../types/enums';

type ListTileProps = {
  item: UserHolding;
};

const ListTile: React.FC<ListTileProps> = ({item}) => {
  const styles = useStyles();
  const {symbol, ltp, avgPrice, quantity} = item;
  return (
    <View style={styles.main}>
      <View style={[styles.row, styles.justifyCenter]}>
        <Text style={styles.symbol}>{symbol}</Text>
        <View style={styles.row}>
          <Text style={styles.valueTitle}>LTP: </Text>
          <Text style={styles.value}>{`${Rupee} ${ltp.toFixed(2)}`}</Text>
        </View>
      </View>
      <View style={[styles.row, styles.justifyCenter]}>
        <Text style={styles.quantity}>{quantity}</Text>
        <View style={styles.row}>
          <Text style={styles.valueTitle}>P/L: </Text>
          <Text style={styles.value}>{`${Rupee} ${(
            (ltp - avgPrice) *
            quantity
          ).toFixed(2)}`}</Text>
        </View>
      </View>
    </View>
  );
};

export default ListTile;
