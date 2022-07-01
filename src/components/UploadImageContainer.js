import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import DashedContainer from './DashedContainer';

import doveIcon from '../assests/images/dove.png';
import lifebuoyIcon from '../assests/images/lifebuoy.png';
import colors from '../constant/colors';

const UploadImageContainer = ({item, index, onPress, imageObj}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.demoImageTxt}>Upload Image {index + 1}</Text>
        <Image source={item.image_url === 'dove' ? doveIcon : lifebuoyIcon} />
      </View>

      {imageObj?.uri ? (
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{uri: imageObj.uri}}
        />
      ) : (
        <DashedContainer onPress={onPress} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginVertical: 16,
    marginHorizontal: 36,
  },
  demoImageTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 12,
  },
  image: {
    width: 170,
    height: 170,
  },
});

export default UploadImageContainer;
