import {Text, View} from 'react-native';
import React from 'react';
import {useStyles} from './styles';

type SummaryTileProps = {
  leftText: string;
  rightText: string;
  padding?: number;
};

const SummaryTile: React.FC<SummaryTileProps> = ({
  leftText,
  rightText,
  padding = 0,
}) => {
  const styles = useStyles();
  return (
    <View style={[styles.main, {paddingVertical: padding}]}>
      <View style={[styles.row, styles.justifyCenter]}>
        <Text style={styles.symbol}>{leftText}</Text>
        <View style={styles.row}>
          <Text style={styles.valueTitle}>{rightText}</Text>
        </View>
      </View>
    </View>
  );
};

export default SummaryTile;
