import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';

export const useStyles = () =>
  StyleSheet.create({
    headerContainer: {
      backgroundColor: Colors.purple,
      paddingVertical: 10,
      paddingHorizontal: 15,
    },
    title: {
      color: Colors.white,
      fontWeight: '500',
    },
  });
