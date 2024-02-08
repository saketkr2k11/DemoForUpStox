import {Text, View} from 'react-native';
import React from 'react';
import {useStyles} from './styles';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({title = ''}) => {
  const styles = useStyles();
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default React.memo(Header);
