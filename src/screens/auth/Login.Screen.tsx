import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {NavBar} from 'components/NavBar';
import {ImageResources} from 'assets/VectorResources.g';

export const LoginScreen = () => {
  return (
    <SafeMainProvider>
      <ScrollView>
        <NavBar
          largeTitle={'Welcome'}
          leftColor="red"
          leftIcon={ImageResources.chevronLeft}
        />
      </ScrollView>
    </SafeMainProvider>
  );
};
