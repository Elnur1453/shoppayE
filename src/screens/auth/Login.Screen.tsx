import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {NavBar} from 'components/NavBar';
import {ImageResources} from 'assets/VectorResources.g';
import {TextLink} from 'components/TextLink';
import {colors} from 'theme/colors';
import {Button} from 'components/Button';
import {Input} from 'components/Input';

export interface ILoginForm {
  email: string;
  password: string;
  fullName: string;
}

// const {
//   control,
//   handleSubmit,
//   formState: {errors, isSubmitting},
// } = useForm<ILoginForm>({
//   defaultValues: {
//     email: __DEV__ ? 'emilys@gmail.com' : '',
//     password: __DEV__ ? 'emilyspass' : '',
//   },
// });
export const LoginScreen = () => {
  return (
    <SafeMainProvider>
      <ScrollView style={styles.root}>
        <NavBar
          largeTitle="WELCOME!"
          leftIcon={ImageResources.chevronLeft}
          leftColor="red"
        />
        <Input label="Email" placeholder="Enter your email" />
        <Button
          title={'Login'}
          size={'block'}
          type={'primary'}
          position={'center'}
          // loading={isSubmitting}
          // disabled={isSubmitting}
          // onPress={handleSubmit(onSubmit)}
        />
      </ScrollView>
    </SafeMainProvider>
  );
};

const styles = StyleSheet.create({
  root: {gap: 12, borderWidth: 1},
  footer: {flex: 1},
});
