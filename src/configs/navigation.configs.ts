import {normalize} from 'theme/metrics';
import {colors} from 'theme/colors';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  orientation: 'portrait',
  animation: 'ios',
  contentStyle: {
    backgroundColor: colors.white,
  },
};

export const authStackScreenOption: NativeStackNavigationOptions = {
  ...defaultScreenOptions,
  contentStyle: {
    backgroundColor: colors.white,
    paddingHorizontal: normalize('horizontal', 24),
  },
};
