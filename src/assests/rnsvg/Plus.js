import React from 'react';
import PropTypes from 'prop-types';
import Svg, {Path} from 'react-native-svg';

import colors from '../../constant/colors';

const Plus = ({color = colors.secondary, size = 40}) => {
  const height = size;
  const width = size;

  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 40 40">
      <Path
        d="M20 20H6.666M20 33.333V20v13.333ZM20 20V6.667 20Zm0 0h13.333H20Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};

Plus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Plus;
