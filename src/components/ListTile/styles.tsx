import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';

export const useStyles = () =>
  StyleSheet.create({
    main: {
      paddingVertical: 6,
    },
    row: {
      flexDirection: 'row',
      paddingVertical: 1,
    },
    justifyCenter: {justifyContent: 'space-between', alignItems: 'center'},
    symbol: {
      color: Colors.grey100,
      fontWeight: '600',
    },
    quantity: {
      color: Colors.grey100,
      fontWeight: '400',
    },
    valueTitle: {
      color: Colors.grey80,
      fontWeight: '400',
    },
    value: {
      color: Colors.grey100,
      fontWeight: '600',
    },
  });
