import React from 'react';
import {View} from 'react-native';
import {colors} from 'theme/colors';
import {CommonStyles} from 'theme/commonStyles';
import {ISafeContainer, useSetStatusBar} from 'types/safe.provider.types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const SafeBottomProvider: React.FC<ISafeContainer> = ({
  style,
  children,
  content = 'dark-content',
  statusBarColor = colors.white,
}) => {
  useSetStatusBar(content, statusBarColor);
  const paddingBottom = useSafeAreaInsets().bottom;
  return (
    <View style={[CommonStyles.flex, {paddingBottom}, style]}>{children}</View>
  );
};
