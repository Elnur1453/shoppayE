import {useCallback} from 'react';
import {StyleProp, ViewStyle, StatusBar} from 'react-native';
import {isAndroid} from 'constants/common.consts';
import {useFocusEffect} from '@react-navigation/native';

type TStatusBar = 'light-content' | 'dark-content';

export interface ISafeContainer {
  content?: TStatusBar;
  statusBarColor?: string;
  style?: StyleProp<ViewStyle>;
  children: JSX.Element | JSX.Element[];
}

export const useSetStatusBar = (
  content: TStatusBar,
  statusBarColor: string,
) => {
  const setStatusBar = useCallback(() => {
    StatusBar.setBarStyle(content);
    if (isAndroid) {
      StatusBar.setBackgroundColor(statusBarColor);
    }
  }, [content, statusBarColor]);

  useFocusEffect(setStatusBar);
};
