import React, {useState, useLayoutEffect} from 'react';
import {
  View,
  TouchableOpacity,
  LayoutAnimation,
  Animated,
  Easing,
} from 'react-native';
import {useStyles} from './styles';
import TriangleIcon from '../TriangleIcon';
import {Colors} from '../../theme';

const PortfolioSummary = ({
  expandedView,
  colapsedView,
}: {
  expandedView: JSX.Element;
  colapsedView: JSX.Element;
}) => {
  const [expanded, setExpanded] = useState(false);
  const animatedRotate = new Animated.Value(expanded ? 1 : 0);
  const styles = useStyles();

  useLayoutEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [expanded]);

  const toggleExpanded = () => {
    setExpanded(!expanded);
    Animated.timing(animatedRotate, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const rotateArrow = animatedRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <TouchableOpacity style={styles.main} onPress={toggleExpanded}>
      <View style={styles.arrow}>
        <Animated.View style={{transform: [{rotate: rotateArrow}]}}>
          <TriangleIcon color={Colors.purple} />
        </Animated.View>
      </View>
      {expanded ? expandedView : colapsedView}
    </TouchableOpacity>
  );
};

export default React.memo(PortfolioSummary);
