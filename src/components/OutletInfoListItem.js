import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import colors from '../constant/colors';

const OutletInfoListItem = ({title, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.entryTitle}>{title}</Text>
      <Text style={styles.entryValue}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: colors.disabled,
  },
  entryTitle: {
    flex: 0.4,
    padding: 16,
    fontSize: 16,
    backgroundColor: colors.primary,
    color: colors.textPrimary,
  },
  entryValue: {
    flex: 0.6,
    padding: 16,
    fontSize: 16,
    color: colors.textPrimary,
  },
});

export default OutletInfoListItem;
