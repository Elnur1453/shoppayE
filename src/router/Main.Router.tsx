import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TestScreen} from 'screens/main/Test.Screen';
import {Routes} from './routes';
// import {NavigationParamList} from 'types/navigation.types';

const MainStack = createNativeStackNavigator();

export const MainRouter = () => {
  return (
    <MainStack.Navigator initialRouteName={Routes.test}>
      <MainStack.Screen name={Routes.test} component={TestScreen} />
    </MainStack.Navigator>
  );
};
