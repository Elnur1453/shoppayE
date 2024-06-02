import {StyleSheet, TextStyle} from 'react-native';
import {normalize} from './metrics';
import {colors} from './colors';
import {isIos} from 'constants/common.consts';

export const bebasFonts = {
  700: isIos ? 'BebasNeue' : 'BebasNeue Bold',
};

export const montserratFonts = {
  400: 'Montserrat-Regular',
  600: 'Montserrat-SemiBold',
  700: 'Montserrat-Bold',
};

export const InterFonts = {
  500: 'Inter-Medium',
};

export const commonFontStyling: TextStyle = {
  includeFontPadding: false,
  padding: 0,
  color: colors.ink.darkest,
};

const fontSize48 = normalize('font', 48);
const fontSize32 = normalize('font', 32);
const fontSize24 = normalize('font', 24);
const fontSize18 = normalize('font', 18);
const fontSize16 = normalize('font', 16);
const fontSize14 = normalize('font', 14);
const fontSize12 = normalize('font', 12);

const lineHeight56 = normalize('font', 56);
const lineHeight36 = normalize('font', 36);
const lineHeight32 = normalize('font', 32);
const lineHeight24 = normalize('font', 24);
const lineHeight20 = normalize('font', 20);
const lineHeight18 = normalize('font', 18);
const lineHeight16 = normalize('font', 16);
const lineHeight14 = normalize('font', 14);
const lineHeight14_52 = normalize('font', 14.52);
const lineHeight12 = normalize('font', 12);

export const TypographyStyles = StyleSheet.create({
  title1: {
    fontFamily: bebasFonts[700],
    fontSize: fontSize48,
    lineHeight: lineHeight56,
    ...commonFontStyling,
  } as TextStyle,
  title2: {
    fontFamily: bebasFonts[700],
    fontSize: fontSize32,
    lineHeight: lineHeight36,
    ...commonFontStyling,
  } as TextStyle,
  title3: {
    fontFamily: bebasFonts[700],
    fontSize: fontSize24,
    lineHeight: lineHeight32,
    ...commonFontStyling,
  } as TextStyle,
  LargeNoneSemibold: {
    fontFamily: montserratFonts[600],
    fontSize: fontSize18,
    lineHeight: lineHeight18,
    ...commonFontStyling,
  } as TextStyle,
  RegularNoneBold: {
    fontFamily: montserratFonts[700],
    fontSize: fontSize16,
    lineHeight: lineHeight16,
    ...commonFontStyling,
  } as TextStyle,
  TinyNormalRegular: {
    fontFamily: montserratFonts[400],
    fontSize: fontSize12,
    lineHeight: lineHeight16,
    ...commonFontStyling,
  } as TextStyle,
  mediumNormal: {
    fontFamily: montserratFonts[400],
    fontSize: fontSize14,
    lineHeight: lineHeight16,
    ...commonFontStyling,
  } as TextStyle,
  SmallNormalRegular: {
    fontFamily: montserratFonts[400],
    fontSize: fontSize14,
    lineHeight: lineHeight20,
    ...commonFontStyling,
  } as TextStyle,
  RegularNoneRegular: {
    fontFamily: montserratFonts[400],
    fontSize: fontSize16,
    lineHeight: lineHeight16,
    ...commonFontStyling,
  } as TextStyle,
  RegularTightRegular: {
    fontFamily: montserratFonts[400],
    fontSize: fontSize16,
    lineHeight: lineHeight20,
    ...commonFontStyling,
  } as TextStyle,
  RegularNormalRegular: {
    fontFamily: montserratFonts[400],
    fontSize: fontSize16,
    lineHeight: lineHeight24,
    ...commonFontStyling,
  } as TextStyle,
  TinyNoneRegular: {
    fontFamily: montserratFonts[400],
    fontSize: fontSize12,
    lineHeight: lineHeight12,
    ...commonFontStyling,
  } as TextStyle,
  TinyNoneSemibold: {
    fontFamily: montserratFonts[600],
    fontSize: fontSize12,
    lineHeight: lineHeight12,
    ...commonFontStyling,
  } as TextStyle,
  SmallNoneSemibold: {
    fontFamily: montserratFonts[600],
    fontSize: fontSize14,
    lineHeight: lineHeight14,
    ...commonFontStyling,
  } as TextStyle,
  RegularNoneSemibold: {
    fontFamily: montserratFonts[600],
    fontSize: fontSize16,
    lineHeight: lineHeight16,
    ...commonFontStyling,
  } as TextStyle,
  SmallNormalSemibold: {
    fontFamily: montserratFonts[600],
    fontSize: fontSize14,
    lineHeight: lineHeight20,
    ...commonFontStyling,
  } as TextStyle,
  RegularTightSemibold: {
    fontFamily: montserratFonts[600],
    fontSize: fontSize16,
    lineHeight: lineHeight20,
    ...commonFontStyling,
  } as TextStyle,
  RegularNormalSemibold: {
    fontFamily: montserratFonts[600],
    fontSize: fontSize16,
    lineHeight: lineHeight24,
  } as TextStyle,
  RegularNormalSemiBold: {
    fontSize: fontSize16,
    fontFamily: montserratFonts[600],
    ...commonFontStyling,
  },
  Inter: {
    fontFamily: InterFonts[500],
    fontSize: fontSize12,
    lineHeight: lineHeight14_52,
    ...commonFontStyling,
  } as TextStyle,
  textAlignCenter: {
    textAlign: 'center',
  } as TextStyle,
});
