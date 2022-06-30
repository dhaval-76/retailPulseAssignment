import React from 'react';
import PropTypes from 'prop-types';

import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import NotFound from './NotFound';
import Plus from './Plus';
import Search from './Search';

export const allowedIcons = [
  'left-arrow',
  'right-arrow',
  'not-found',
  'plus',
  'search',
];

const RNSvgIcon = ({name, color, size}) => {
  switch (name) {
    case allowedIcons[0]:
      return <LeftArrow color={color} size={size} />;
    case allowedIcons[1]:
      return <RightArrow color={color} size={size} />;
    case allowedIcons[2]:
      return <NotFound color={color} size={size} />;
    case allowedIcons[3]:
      return <Plus color={color} size={size} />;
    case allowedIcons[4]:
      return <Search color={color} size={size} />;

    default:
      return null;
  }
};

RNSvgIcon.propTypes = {
  name: PropTypes.oneOf(allowedIcons),
  color: PropTypes.string,
  size: PropTypes.number,
};

export default RNSvgIcon;
