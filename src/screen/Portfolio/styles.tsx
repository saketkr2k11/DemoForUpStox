import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';

export const useStyles = () =>
  StyleSheet.create({
    list: {
      paddingHorizontal: 10,
      backgroundColor: Colors.white,
    },
    separator: {
      backgroundColor: Colors.grey50,
      height: 1,
    },
    page: {
      backgroundColor: Colors.grey,
      flex: 1,
    },
    loadingPage: {
      backgroundColor: Colors.grey,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    expandedMargin: {
      marginVertical: 15,
    },
    collapsedMargin: {
      marginVertical: 15,
    },
    loading: {
      color: Colors.white,
      fontSize: 24,
    },
  });
