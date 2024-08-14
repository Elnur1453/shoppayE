import {
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {SvgImage} from './SvgImage';
import {colors} from '../theme/colors';
import {TypographyStyles} from 'theme/typography';
import {normalize} from 'theme/metrics';
import {CommonStyles} from 'theme/commonStyles';
import {useState} from 'react';
import {TTypesButton, getButtonTheme} from 'helpers/buttonTheme';

type TSizes = 'small' | 'block' | 'large';
type TPosition = 'left' | 'right' | 'center';
export interface IButton {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  type?: TTypesButton;
  size?: TSizes;
  icon?: NodeRequire;
  position?: TPosition;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  hitSlop?: PressableProps['hitSlop'];
}

export const Button: React.FC<IButton> = ({
  type = 'primary',
  size = 'block',
  position = 'left',
  disabled = false,
  loading = false,
  title,
  icon,
  style,
  hitSlop,
  onPress,
}) => {
  const [pressed, setPressed] = useState<boolean>(false);
  const svgSize = size === 'small' ? 16 : 24;

  const onPressIn = () => setPressed(true);
  const onPressOut = () => setPressed(false);

  const {component: componentStyle, text: textStyle} = getButtonTheme(type, {
    pressed,
    disabled,
  });

  const renderInLoading = () => {
    return loading ? (
      <ActivityIndicator
        color={colors.white}
        size="small"
        style={StyleSheet.absoluteFillObject}
      />
    ) : null;
  };

  return (
    <Pressable
      hitSlop={hitSlop}
      style={[
        styles.root,
        styles[size],
        styles[position],
        componentStyle,
        style,
      ]}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={disabled || loading}
      onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
      {icon ? (
        <SvgImage
          color={colors.white}
          width={svgSize}
          height={svgSize}
          source={icon}
        />
      ) : null}
      {renderInLoading()}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'transparent',
    overflow: 'hidden',
    ...CommonStyles.alignCenterJustifyBetweenRow,
  },
  text: {
    color: colors.white,
    alignSelf: 'center',
    ...TypographyStyles.RegularNormalSemiBold,
  },
  small: {
    backgroundColor: colors.primary.base,
    padding: normalize('vertical', 7),
  },
  left: {
    flexDirection: 'row-reverse',
  },
  center: {
    ...CommonStyles.alignJustifyCenter,
  },
  right: {},
  block: {
    padding: normalize('vertical', 15),
  },
  primary: {
    backgroundColor: colors.primary.base,
  },
  secondary: {
    backgroundColor: colors.primary.lightest,
  },
  large: {
    backgroundColor: colors.primary.base,
    padding: normalize('vertical', 15),
  },
  pressed: {
    backgroundColor: colors.primary.darkest,
  },
  disabled: {
    backgroundColor: colors.skyLight,
  },
});
