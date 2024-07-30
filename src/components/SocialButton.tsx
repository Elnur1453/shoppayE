import React from 'react';
import {Pressable, StyleSheet, ViewStyle} from 'react-native';
import {Resources, SvgImage} from './SvgImage';
import {normalize} from 'theme/metrics';
import {colors} from 'theme/colors';
import {standardHitSlopSize} from '../theme/consts.styles';
import {CommonStyles} from 'theme/commonStyles';

interface ISocialButton {
  icon: Resources;
  onPress?: () => void;
}

export const SocialButton: React.FC<ISocialButton> = ({icon, onPress}) => {
  return (
    <Pressable
      hitSlop={standardHitSlopSize}
      onPress={onPress}
      style={({pressed}) => [styles.root, {opacity: pressed ? 0.8 : 1}]}>
      <SvgImage source={icon} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.skyLightest,
    padding: 16,
    borderRadius: 999,
    width: normalize('width', 60),
    height: normalize('height', 60),
    ...CommonStyles.alignJustifyCenter,
  } as ViewStyle,
});
