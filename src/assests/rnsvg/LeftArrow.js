import React from 'react';
import PropTypes from 'prop-types';
import Svg, {Path} from 'react-native-svg';

import colors from '../../constant/colors';

const LeftArrow = ({color = colors.textPrimary, size = 24}) => {
  const height = size;
  const width = size;

  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 24 24">
      <Path
        d="M19 11H7.14l3.63-4.36a1.001 1.001 0 0 0-1.54-1.28l-5 6a1.191 1.191 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13.026.052.056.102.09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .77-1.64L7.14 13H19a1 1 0 0 0 0-2Z"
        fill={color}
      />
    </Svg>
  );
};

LeftArrow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default LeftArrow;
