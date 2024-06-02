import {Dimensions as NativeSizes} from 'react-native';

const Dimensions = [NativeSizes.get('window'), NativeSizes.get('screen')];

const windowWidth = Dimensions[0].width;
const windowHeight = Dimensions[0].height;
const screenWidth = Dimensions[1].width;
const screenHeight = Dimensions[1].height;

const activeOpacityIndex = 0.8;
const standardHitSlopSize = 12;
const smallHitSlopSize = 8;

export {
  activeOpacityIndex,
  standardHitSlopSize,
  smallHitSlopSize,
  screenHeight,
  screenWidth,
  windowHeight,
  windowWidth,
};
