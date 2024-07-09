import React, {Fragment} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextStyle,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {SvgImage, Resources} from './SvgImage';
import {CommonStyles} from 'theme/commonStyles';
import {TypographyStyles} from 'theme/typography';
import {standardHitSlopSize} from '../theme/consts.styles';
import {Button} from './Button';
interface INavBar {
  title?: string;
  largeTitle?: string;
  leftIcon?: Resources;
  rightIcon?: Resources;
  disabled?: boolean;
  leftColor?: string;
  rightColor?: string;
  textRight?: string;
  styleTitle?: StyleProp<ViewStyle>;
  leftOnPress?: () => void;
  rightOnPress?: () => void;
}

export const NavBar: React.FC<INavBar> = ({
  title,
  leftIcon,
  rightIcon,
  largeTitle,
  leftOnPress,
  rightOnPress,
  rightColor,
  leftColor,
  textRight,
  styleTitle,
}) => {
  return (
    <Fragment>
      <View style={styles.root}>
        {leftIcon ? (
          <Pressable
            hitSlop={standardHitSlopSize}
            style={({pressed}) => [
              {opacity: pressed ? 0.5 : 1},
              styles.leftContainer,
            ]}
            onPress={leftOnPress}>
            <SvgImage source={leftIcon} color={leftColor} />
          </Pressable>
        ) : (
          <View style={styles.leftContainer} />
        )}
        {title ? (
          <Text style={[styles.title, {color: styleTitle}]}>{title}</Text>
        ) : (
          <View />
        )}
        {rightIcon || textRight ? (
          <View style={styles.rightContainer}>
            <Pressable
              hitSlop={standardHitSlopSize}
              style={({pressed}) => [{opacity: pressed ? 0.5 : 1}]}
              onPress={rightOnPress}>
              {rightIcon ? (
                <SvgImage source={rightIcon} color={rightColor} />
              ) : (
                <Text style={styles.textRight}>{textRight}</Text>
              )}
            </Pressable>
          </View>
        ) : (
          <View style={styles.rightContainer} />
        )}
      </View>
      {largeTitle ? (
        <Text style={[TypographyStyles.title2, styles.largeText]}>
          {largeTitle}
        </Text>
      ) : null}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingVertical: normalize('vertical', 12),
    ...CommonStyles.alignCenterJustifyBetweenRow,
  } as ViewStyle,
  title: {
    flex: 1,
    textAlign: 'center',
    ...TypographyStyles.title3,
  } as TextStyle,
  largeText: {
    paddingTop: normalize('vertical', 16),
    paddingBottom: normalize('vertical', 8),
  } as TextStyle,
  textRight: {
    ...TypographyStyles.LargeNoneSemibold,
    color: colors.primary.base,
  } as TextStyle,
  leftContainer: {
    width: '15%',
  } as ViewStyle,
  rightContainer: {
    width: '15%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  } as ViewStyle,
});
