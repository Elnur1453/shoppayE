import React, {useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {red} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import {colors} from 'theme/colors';
import {CommonStyles} from 'theme/commonStyles';
import {normalize} from 'theme/metrics';
import {TypographyStyles} from 'theme/typography';

type IOtpCodeField = {
  setCode: (code: string) => void;
  code?: string;
  triggerOnFinish?: () => void;
  length?: number;
  style?: StyleProp<ViewStyle>;
};

export const OTPCodeField: React.FC<IOtpCodeField> = ({
  setCode,
  code = '',
  length = 4,
  triggerOnFinish,
  style,
}) => {
  const boxArray = new Array(length).fill(0);

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const renderBoxDigit = (digit: string, index: number) => {
    const focus = isFocused && index === code?.length && code.length !== length;

    return (
      <View style={[styles.box, focus && styles.focusedBox]} key={index}>
        <Text style={styles.text}>{focus ? '|' : digit}</Text>
      </View>
    );
  };

  const handleTextChange = (text: string) => {
    setCode(text);
    if (text.length === length) {
      triggerOnFinish?.();
    }
  };

  const handleOnBlur = () => setIsFocused(false);

  return (
    <View style={style}>
      <View style={styles.cellView}>
        {boxArray.map((_, index) => renderBoxDigit(code[index] || '', index))}
      </View>
      <TextInput
        value={code}
        maxLength={length}
        contextMenuHidden
        keyboardType="number-pad"
        onBlur={handleOnBlur}
        style={styles.textInput}
        accessibilityLabel="OTP Input"
        onChangeText={handleTextChange}
        onFocus={() => setIsFocused(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    ...TypographyStyles.RegularNoneBold,
    lineHeight: 20,
  } as TextStyle,
  textInput: {
    opacity: 0,
    backgroundColor: colors.primary.base,
    ...StyleSheet.absoluteFillObject,
  } as TextStyle,
  cellView: {
    gap: normalize('horizontal', 24),
    ...CommonStyles.alignCenterJustifyBetweenRow,
  } as ViewStyle,
  box: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.skyLight,
    height: normalize('height', 48),
    ...CommonStyles.alignJustifyCenter,
  } as ViewStyle,
  focusedBox: {
    borderWidth: 2,
    borderColor: colors.primary.base,
  } as ViewStyle,
});
