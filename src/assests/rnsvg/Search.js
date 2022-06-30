import React from 'react';
import PropTypes from 'prop-types';
import Svg, {Path} from 'react-native-svg';

import colors from '../../constant/colors';

const Search = ({color = colors.disabled, size = 24}) => {
  const height = size;
  const width = size;

  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 24 24">
      <Path
        d="m21 21-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0v0Z"
        stroke={color}
        strokeOpacity={0.25}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};

Search.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Search;
