import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';

export const useStyles = () =>
  StyleSheet.create({
    main: {
      paddingVertical: 6,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: Colors.white,
    },
    arrow: {
      alignItems: 'center',
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
