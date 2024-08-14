import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {colors} from 'theme/colors';
import {SvgImage} from './SvgImage';
import {normalize} from 'theme/metrics';
import {CommonStyles} from 'theme/commonStyles';
import {TypographyStyles} from 'theme/typography';
import {ImageResources} from 'assets/VectorResources.g';

type TButton = {
  typeButton: 'bank' | 'add';
};

interface ITable {
  text?: string;
  type?: TButton | string;
  isPressable?: boolean;
  onPress?: () => void;
}

export const Table: React.FC<ITable> = ({
  text,
  isPressable,
  onPress,
  type = 'add',
}) => {
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <View style={styles.main}>
        <SvgImage
          onPress={onPress}
          pressableHitSlop={12}
          isPressable={isPressable}
          style={styles.controller}
          source={
            type === 'add'
              ? ImageResources.controlsButton
              : ImageResources.masterCardBlack
          }
        />
        <View style={styles.texts}>
          <Text style={TypographyStyles.RegularNoneSemibold}>{text}</Text>
          {type === 'bank' ? (
            <View style={styles.container}>
              <Text style={styles.textCard}>Primary</Text>
            </View>
          ) : null}
        </View>
      </View>
      <SvgImage source={ImageResources.iconPlaceholder} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingVertical: normalize('vertical', 12),
    ...CommonStyles.alignCenterJustifyBetweenRow,
  },
  main: {
    gap: normalize('horizontal', 12),
    ...CommonStyles.alignCenterRow,
  },
  controller: {
    paddingVertical: normalize('vertical', 12),
  },
  texts: {
    gap: normalize('vertical', 8),
  },
  container: {
    width: normalize('width', 74),
    borderRadius: 100,
    backgroundColor: colors.lavender.lightest,
  },
  textCard: {
    textAlign: 'center',
    ...TypographyStyles.TinyNoneSemibold,
    color: colors.lavender.base,
    paddingVertical: normalize('vertical', 4),
  },
});
