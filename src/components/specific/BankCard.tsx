import {
  View,
  Text,
  ViewStyle,
  StyleProp,
  StyleSheet,
  Pressable,
  TextStyle,
} from 'react-native';
import React from 'react';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {ImageResources} from 'assets/VectorResources.g';
import {SvgImage} from 'components/SvgImage';
import {TypographyStyles} from 'theme/typography';
import {CommonStyles} from 'theme/commonStyles';

interface IBankCard {
  color?: string;
  holder?: string;
  cardNumber?: string;
  expiration?: string;
  style: StyleProp<ViewStyle>;
  onPress?: () => void;
  empty?: boolean;
  disabled?: boolean;
}

export const BankCard: React.FC<IBankCard> = ({
  holder,
  cardNumber = '',
  expiration = '',
  style,
  onPress,
  empty = false,
  disabled = false,
}) => {
  return (
    <Pressable
      style={[styles.root, empty && styles.rootEmpty, style]}
      disabled={disabled}
      onPress={onPress}>
      <View style={CommonStyles.alignCenterJustifyBetweenRow}>
        <SvgImage source={ImageResources.masterCard} />
        <Text style={styles.mainText}>Universal Card</Text>
      </View>
      <Text style={styles.numberCard}>{cardNumber}</Text>
      <View style={styles.cardHolder}>
        <Text style={styles.text}>CARD HOLDER</Text>
        <Text style={styles.text}>CARD SAVE</Text>
      </View>
      <View style={CommonStyles.alignCenterJustifyBetweenRow}>
        <Text style={styles.textData}>{holder}</Text>
        <Text style={styles.textData}>{expiration}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    borderRadius: 16,
    backgroundColor: colors.blue.base,
    height: normalize('height', 200),
    paddingTop: normalize('vertical', 16),
    paddingBottom: normalize('vertical', 24),
    paddingHorizontal: normalize('horizontal', 24),
  } as ViewStyle,
  rootEmpty: {
    backgroundColor: '#999999',
  },
  mainText: {
    ...TypographyStyles.RegularTightSemibold,
    color: colors.mellow.lightest,
  } as TextStyle,
  numberCard: {
    paddingTop: normalize('vertical', 29),
    paddingBottom: normalize('vertical', 16),
    ...TypographyStyles.title3,
    color: colors.mellow.lightest,
  } as ViewStyle,
  cardHolder: {
    ...CommonStyles.alignCenterJustifyBetweenRow,
    paddingBottom: normalize('vertical', 8),
  } as ViewStyle,
  text: {
    ...TypographyStyles.Inter,
    color: colors.mellow.lightest,
    opacity: 0.5,
  } as ViewStyle,
  textData: {
    ...TypographyStyles.TinyNoneSemibold,
    color: colors.mellow.lightest,
  } as ViewStyle,
});
