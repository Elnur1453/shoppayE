import React, {useState, useMemo, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleProp,
  ViewStyle,
  Pressable,
  TextStyle,
  StyleSheet,
  KeyboardTypeOptions,
} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {SvgImage, Resources} from './SvgImage';
import {CommonStyles} from 'theme/commonStyles';
import {TypographyStyles} from 'theme/typography';
import {standardHitSlopSize} from '../theme/consts.styles';
import {ImageResources} from 'assets/VectorResources.g';

type TIcon = {
  source: Resources;
  color?: string;
  width?: number;
  height?: number;
  position?: 'left' | 'right';
};

type TLabel = {
  variant?: 'default' | 'floating';
};

export interface IInput {
  icon?: TIcon;
  label?: string;
  value?: string;
  caption?: string;
  disabled?: boolean;
  maxLength?: number;
  placeholder?: string;
  errorMessage?: string;
  variant?: TLabel | string;
  style?: StyleProp<ViewStyle>;
  keyboardType?: KeyboardTypeOptions;
  type?: 'text' | 'phone' | 'password' | 'select';
  onBlur?: () => void;
  onFocus?: () => void;
  onInputPress?: () => void;
  setValue?: (value: string) => void;
}

export const Input: React.FC<IInput> = ({
  icon,
  value,
  disabled,
  setValue,
  type = 'text',
  variant = 'default',
  ...props
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(false);
  const placeholderColor = disabled ? colors.skyBase : colors.ink.lighter;
  const isMoreIcon = useMemo(
    () =>
      ('position' in (icon ?? {}) && (icon as TIcon)?.position === 'right') ||
      type === 'password',
    [icon, type],
  );

  const isPressable = props.onInputPress instanceof Function;

  const handleSecurityIcon = useCallback(() => {
    if (disabled) {
      return;
    }
    setSecureTextEntry(state => !state);
  }, [disabled]);

  const renderIcon = useMemo(() => {
    if (type === 'password') {
      return (
        <Pressable onPress={handleSecurityIcon} hitSlop={standardHitSlopSize}>
          <SvgImage
            width={24}
            height={24}
            color={disabled ? colors.skyBase : colors.inkBase}
            source={
              !secureTextEntry ? ImageResources.eyeOff : ImageResources.eye
            }
          />
        </Pressable>
      );
    }

    if (!icon) {
      return null;
    }

    if ('source' in icon) {
      return (
        <SvgImage
          source={icon.source}
          width={icon.width}
          color={icon.color}
          height={icon.height}
        />
      );
    }

    return (
      <SvgImage
        source={icon}
        color={disabled ? colors.skyBase : colors.inkBase}
      />
    );
  }, [icon, disabled, secureTextEntry, type, handleSecurityIcon]);

  const handleOnFocused = () => {
    setFocused(true);
    props?.onFocus?.();
  };
  const handleOnBlur = () => {
    setFocused(false);
    props?.onBlur?.();
  };

  const renderFloatingLabel = () => {
    return (
      <View style={styles.floating}>
        <Text
          style={[
            styles.floatingText,
            disabled ? styles.floatingTextDisabled : null,
          ]}>
          {props.label}
        </Text>
        <TextInput
          value={value}
          editable={!disabled}
          onBlur={handleOnBlur}
          autoCapitalize="none"
          onChangeText={setValue}
          onFocus={handleOnFocused}
          placeholder={props.placeholder}
          keyboardType={props.keyboardType}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={placeholderColor}
        />
      </View>
    );
  };

  return (
    <View style={[styles.root, props?.style]}>
      {props.label && variant === 'default' ? (
        <Text style={TypographyStyles.RegularNoneSemibold}>{props.label}</Text>
      ) : null}
      <View
        style={[
          styles.wrapper,
          focused && styles.focused,
          disabled && styles.wrapperDisabled,
          isMoreIcon && CommonStyles.rowReverse,
        ]}>
        {renderIcon}
        {variant === 'floating' ? (
          renderFloatingLabel()
        ) : (
          <TextInput
            value={value}
            placeholder={props.placeholder}
            keyboardType={props.keyboardType}
            maxLength={props.maxLength}
            onFocus={handleOnFocused}
            onBlur={handleOnBlur}
            onPressIn={props.onInputPress}
            editable={!isPressable || !disabled}
            autoCapitalize="none"
            secureTextEntry={
              type === 'password' ? !secureTextEntry : secureTextEntry
            }
            onChangeText={setValue}
            placeholderTextColor={placeholderColor}
            style={styles.input}
          />
        )}
      </View>
      {props.caption || props.errorMessage ? (
        <Text
          style={[
            styles.caption,
            props?.errorMessage ? styles.error : undefined,
          ]}>
          {props.errorMessage ?? props.caption}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    borderRadius: 8,
    gap: normalize('vertical', 12),
  } as ViewStyle,
  focused: {
    borderWidth: 2,
    borderColor: colors.primary.base,
  } as ViewStyle,
  wrapperDisabled: {
    color: colors.skyBase,
    borderColor: colors.skyLighter,
    backgroundColor: colors.skyLighter,
  } as ViewStyle,
  error: {
    color: colors.primary.base,
  } as TextStyle,
  caption: {
    color: colors.ink.lighter,
    ...TypographyStyles.SmallNormalRegular,
  } as TextStyle,
  wrapper: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.skyLight,
    height: normalize('height', 48),
    gap: normalize('horizontal', 12),
    paddingHorizontal: normalize('horizontal', 16),
    ...CommonStyles.alignCenterRow,
  } as ViewStyle,
  input: {
    flex: 1,
    flexGrow: 1,
    height: '100%',
    ...TypographyStyles.RegularNoneRegular,
    lineHeight: 0,
  } as TextStyle,
  floating: {
    flexGrow: 1,
    flex: 1,
    width: '100%',
    gap: normalize('vertical', 4),
  } as ViewStyle,
  floatingText: {
    color: colors.ink.lighter,
    ...TypographyStyles.TinyNoneRegular,
  } as TextStyle,
  floatingTextDisabled: {
    color: colors.skyBase,
  } as TextStyle,
});
