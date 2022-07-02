import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import colors from '../constant/colors';

const DisplayFileNameAndSize = ({name, size}) => {
  return (
    <View style={styles.container}>
      <Text
        style={[styles.text, styles.maxWidth]}
        numberOfLines={1}
        ellipsizeMode="tail">
        {name}
      </Text>
      <Text style={styles.text}>{size}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexShrink: 1,
  },
  text: {
    fontSize: 14,
    color: colors.textPrimary,
  },
  maxWidth: {
    maxWidth: '70%',
  },
});

export default DisplayFileNameAndSize;
