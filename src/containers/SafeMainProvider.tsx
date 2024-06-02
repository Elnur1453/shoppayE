import React from 'react';
import {View} from 'react-native';
import {colors} from 'theme/colors';
import {CommonStyles} from 'theme/commonStyles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ISafeContainer, useSetStatusBar} from 'types/safe.provider.types';

export const SafeMainProvider: React.FC<ISafeContainer> = ({
  style,
  children,
  content = 'dark-content',
  statusBarColor = colors.white,
}) => {
  useSetStatusBar(content, statusBarColor);
  const paddingTop = useSafeAreaInsets().top;
  const paddingBottom = useSafeAreaInsets().bottom;
  return (
    <View style={[CommonStyles.flex, {paddingTop, paddingBottom}, style]}>
      {children}
    </View>
  );
};
