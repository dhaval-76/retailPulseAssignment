import React from 'react';
import {View} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import PropTypes from 'prop-types';

import DoneJSON from './done.json';

const DoneLottie = ({width = 180, height = 140}) => {
  return (
    <View style={{width, height}}>
      <AnimatedLottieView source={DoneJSON} autoPlay loop />
    </View>
  );
};

DoneLottie.propTypes = {width: PropTypes.number, height: PropTypes.number};

export default DoneLottie;
