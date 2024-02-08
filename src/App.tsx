/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Colors} from './theme';
import Portfolio from './screen/Portfolio';
import {Provider} from 'react-redux';
import reduxStore from './store/reduxStore';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.main}>
      <Provider store={reduxStore}>
        <StatusBar barStyle={'light-content'} />
        <Portfolio />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.grey,
    flex: 1,
  },
});

export default App;
