import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';

export const useStyles = () =>
  StyleSheet.create({
    main: {
      paddingHorizontal: 10,
    },
    row: {
      flexDirection: 'row',
      paddingVertical: 1,
    },
    justifyCenter: {justifyContent: 'space-between', alignItems: 'center'},
    symbol: {
      color: Colors.grey100,
      fontWeight: '800',
    },
    valueTitle: {
      color: Colors.grey80,
      fontWeight: '600',
    },
  });
