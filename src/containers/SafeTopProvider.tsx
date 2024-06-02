import React from 'react';
import {View} from 'react-native';
import {colors} from 'theme/colors';
import {CommonStyles} from 'theme/commonStyles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ISafeContainer, useSetStatusBar} from 'types/safe.provider.types';

export const SafeTopProvider: React.FC<ISafeContainer> = ({
  style,
  children,
  content = 'dark-content',
  statusBarColor = colors.white,
}) => {
  const paddingTop = useSafeAreaInsets().top;
  useSetStatusBar(content, statusBarColor);
  return (
    <View style={[CommonStyles.flex, {paddingTop}, style]}>{children}</View>
  );
};
