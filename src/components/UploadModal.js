import React from 'react';
import {Modal, ScrollView, StyleSheet, Text, View} from 'react-native';

import CustomButton from './CustomButton';
import DisplayFileNameAndSize from './DisplayFileNameAndSize';
import PercentageLoader from './PercentageLoader';

import colors from '../constant/colors';
import DoneLottie from '../assests/lottie/DoneLottie';

const UploadModal = ({isModalVisible, onDonePress, imagesData, progress}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {}}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <Text style={styles.modalHeader}>
              {progress < 100 ? 'Uploading Photos' : 'Visit Successful !'}
            </Text>

            {progress < 100 ? (
              <>
                <View style={styles.percentageConatiner}>
                  <PercentageLoader progress={progress} />
                  <View style={styles.percentage}>
                    <Text style={styles.percentageTxt}>
                      {progress.toFixed(2)} %
                    </Text>
                    <Text style={styles.uploadedTxt}>Uploaded</Text>
                  </View>
                </View>
                {imagesData.map(image => (
                  <DisplayFileNameAndSize
                    key={image.id}
                    name={image.displayName}
                    size={image.size}
                  />
                ))}
              </>
            ) : (
              <>
                <View style={styles.doneLottieContainer}>
                  <DoneLottie />
                </View>
                <View style={styles.marHor}>
                  <CustomButton label="Done" onPress={onDonePress} />
                </View>
              </>
            )}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(51, 51, 51, 0.4)',
  },
  modalView: {
    maxHeight: '85%',
    backgroundColor: colors.white,
    borderRadius: 8,
    marginHorizontal: 16,
  },
  scrollView: {
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  modalHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.textPrimary,
  },
  percentageConatiner: {
    marginVertical: 24,
    width: 180,
    height: 180,
    alignSelf: 'center',
  },
  marHor: {
    marginHorizontal: 84,
    marginBottom: -25,
  },
  doneLottieContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadedTxt: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  percentageTxt: {
    fontSize: 28,
    color: colors.textPrimary,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  percentage: {
    // zIndex: 99,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'transparent',
  },
});

export default UploadModal;
