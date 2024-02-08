import React from 'react';
import {View, StyleSheet} from 'react-native';

const TriangleIcon = ({color}: {color: string}) => {
  return <View style={[styles.innerTriangle, {borderBottomColor: color}]} />;
};

const styles = StyleSheet.create({
  innerTriangle: {
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 16,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
});

export default TriangleIcon;
