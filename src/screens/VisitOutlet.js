/* eslint-disable no-alert */
import React, {useCallback, useEffect, useState} from 'react';
import {
  BackHandler,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import mime from 'mime';
import moment from 'moment';

import UploadImageContainer from '../components/UploadImageContainer';

import RNSvgIcon from '../assests/rnsvg/RNSvgIcon';
import colors from '../constant/colors';
import CustomButton from '../components/CustomButton';

const VisitOutlet = ({route, navigation}) => {
  const {outlet} = route.params;

  const [selectedImages, setSelectedImages] = useState([]);

  const onBackPress = useCallback(() => {
    navigation.goBack();

    return true;
  }, [navigation]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );

    return () => backHandler.remove();
  }, [onBackPress]);

  const chooseImage = async id => {
    try {
      const imageRes = await launchImageLibrary({
        mediaType: 'photo',
        quality: 1,
      });

      if (imageRes.didCancel) return;

      const imageUri = imageRes.assets[0].uri;

      let fileName = imageRes.assets[0].fileName.split('.');

      fileName =
        fileName[0] + moment().format('__YYYYMMD__hhmmss.') + fileName[1];

      const imgObj = {
        id,
        displayName: imageRes.assets[0].fileName,
        fileName,
        type: mime.getType(imageUri),
        uri: imageUri,
        size: imageRes.assets[0].fileSize,
      };

      setSelectedImages(prev => [...prev, imgObj]);
    } catch (err) {
      alert('Error selecting the photo');
    }
  };

  const uploadPhotos = () => {
    console.log(selectedImages);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.statusBar} barStyle="light-content" />

      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onBackPress}>
          <RNSvgIcon name="left-arrow" />
        </TouchableOpacity>
      </View>

      <Text style={styles.titleTxt}>OL Name: {outlet.outlet_name}</Text>

      <FlatList
        data={outlet.programs}
        keyExtractor={item => item.id}
        renderItem={props => (
          <UploadImageContainer
            onPress={() => chooseImage(props.item.id)}
            imageObj={selectedImages.find(item => item.id === props.item.id)}
            {...props}
          />
        )}
      />

      <View style={styles.marHor}>
        <CustomButton label="Upload Photos" onPress={uploadPhotos} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    backgroundColor: colors.white,
    padding: 15,
  },
  titleTxt: {
    fontSize: 20,
    color: colors.textPrimary,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },
  marHor: {
    marginHorizontal: 16,
  },
});

export default VisitOutlet;
