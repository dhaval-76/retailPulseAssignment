import React from 'react';
import {View} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import PropTypes from 'prop-types';

import LoaderJSON from './loader.json';

const LoaderLottie = ({width = 140, height = 140}) => {
  return (
    <View style={{width, height}}>
      <AnimatedLottieView source={LoaderJSON} autoPlay loop />
    </View>
  );
};

LoaderLottie.propTypes = {width: PropTypes.number, height: PropTypes.number};

export default LoaderLottie;
