import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Routes} from 'router/routes';

export type AppNavigation = NativeStackNavigationProp<NavigationParamList>;

export type NavigationParamList = {
  [Routes.authRouter]: undefined;
  [Routes.mainRouter]: undefined;
  [Routes.welcome]: undefined;
  [Routes.login]: undefined;
  [Routes.singUp]: undefined;
  [Routes.register]: undefined;
  [Routes.paymentMethod]: undefined;
  [Routes.paymentScreensTab]: undefined;
  [Routes.cards]: undefined;
  [Routes.verification]: undefined;
  [Routes.test]: undefined;
};
