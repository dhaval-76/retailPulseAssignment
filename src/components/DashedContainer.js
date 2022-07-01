import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import RNSvgIcon from '../assests/rnsvg/RNSvgIcon';
import colors from '../constant/colors';

const DashedContainer = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <RNSvgIcon name="plus" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.secondary,
    borderStyle: 'dashed',
    borderRadius: 8,
    backgroundColor: '#F5FCFF',
  },
});

export default DashedContainer;
