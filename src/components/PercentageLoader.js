import React from 'react';
import {Svg, G, Circle} from 'react-native-svg';
import {View, StyleSheet} from 'react-native';

import colors from '../constant/colors';

const {PI} = Math;

const PercentageLoader = ({
  progress,
  strokeWidth = 8,
  size = 180,
  innerStrokeColor = colors.disabled,
  strokeColor = colors.secondary,
  rotation = '-90',
}) => {
  const edgeDistance = Math.ceil(strokeWidth);
  const radius = (size - edgeDistance * 2) / 2;
  const circumference = 2 * PI * radius;

  return (
    <View style={styles.container}>
      <Svg height={size} width={size}>
        <G rotation={rotation} origin={`${size / 2}, ${size / 2}`}>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth.toString()}
            stroke={innerStrokeColor}
            strokeDasharray={circumference}
            strokeLinecap="round"
          />
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth.toString()}
            stroke={strokeColor}
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress / 100)}
            strokeLinecap="round"
          />
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

export default PercentageLoader;
