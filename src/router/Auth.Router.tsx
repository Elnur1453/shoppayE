import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeScreen} from 'screens/auth/Welcome.Screen';
import {LoginScreen} from 'screens/auth/Login.Screen';
import {VerificationScreen} from 'screens/auth/Verification.Screen';
import {NavigationParamList} from 'types/navigation.types';
import {
  authStackScreenOption,
  defaultScreenOptions,
} from 'configs/navigation.configs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CommonStyles} from 'theme/commonStyles';
import {Routes} from './routes';
import {SignUpScreen} from 'screens/auth/SignUp.Screen';
import {PaymentScreensTab} from 'screens/payments';

const AuthStack = createNativeStackNavigator<NavigationParamList>();

const edges: Edges = {bottom: 'off'};

export const AuthRouter = () => {
  return (
    <SafeAreaView style={CommonStyles.flex} edges={edges}>
      <AuthStack.Navigator
        screenOptions={authStackScreenOption}
        initialRouteName={Routes.paymentScreensTab}>
        <AuthStack.Screen
          name={Routes.welcome}
          component={WelcomeScreen}
          options={defaultScreenOptions}
        />
        <AuthStack.Screen name={Routes.login} component={LoginScreen} />
        <AuthStack.Screen name={Routes.singUp} component={SignUpScreen} />
        <AuthStack.Screen
          name={Routes.verification}
          component={VerificationScreen}
        />
        <AuthStack.Screen
          name={Routes.paymentScreensTab}
          component={PaymentScreensTab}
        />
      </AuthStack.Navigator>
    </SafeAreaView>
  );
};
