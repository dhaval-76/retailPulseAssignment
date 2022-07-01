import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import colors from '../constant/colors';

const CustomButton = ({disabled = false, onPress = () => {}, label = ''}) => {
  if (disabled) {
    return (
      <View style={[styles.container, {backgroundColor: colors.disabled}]}>
        <Text style={styles.labelTxt}>{label}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor: colors.secondary}]}>
      <Text style={styles.labelTxt}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  labelTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default CustomButton;
