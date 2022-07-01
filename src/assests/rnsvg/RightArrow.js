import React from 'react';
import PropTypes from 'prop-types';
import Svg, {Path} from 'react-native-svg';

import colors from '../../constant/colors';

const RightArrow = ({color = colors.white, size = 26}) => {
  const height = (24 / 26) * size;
  const width = size;

  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 24 26">
      <Path
        d="M25.06 13.06a1.5 1.5 0 0 0 0-2.12l-9.545-9.547a1.5 1.5 0 1 0-2.122 2.122L21.88 12l-8.486 8.485a1.5 1.5 0 1 0 2.122 2.122l9.546-9.546ZM0 13.5h24v-3H0v3Z"
        fill={color}
      />
    </Svg>
  );
};

RightArrow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default RightArrow;
