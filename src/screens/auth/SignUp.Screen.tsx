import {View, ViewStyle, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {NavBar} from 'components/NavBar';
import {ImageResources} from 'assets/VectorResources.g';
import {colors} from 'theme/colors';
import {InputControlled} from 'components/InputControlled';
import {Button} from 'components/Button';
import {useForm} from 'react-hook-form';
import {FormRules} from 'constants/formRules';
import {signUp} from 'constants/textLinks';
import {TextLink} from 'components/TextLink';
import {normalize} from 'theme/metrics';
import {Routes} from 'router/routes';
import {NavigationParamList} from 'types/navigation.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface ILoginForm {
  email: string;
  password: string;
  fullName: string;
}

export const SignUpScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.singUp>
> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<ILoginForm>({
    defaultValues: {
      fullName: __DEV__ ? 'Elnur Namaz' : '',
      email: __DEV__ ? 'elnz1453@gmail.com' : '',
      password: __DEV__ ? 'Elnur!123' : '',
    },
  });
  const onSubmit = (data: ILoginForm) => {
    navigation.navigate(Routes.verification);
    new Promise(resolve => setTimeout(resolve, 2000));
  };
  console.log(errors);
  return (
    <SafeMainProvider>
      <ScrollView scrollEnabled={false}>
        <NavBar
          largeTitle="Create Account"
          leftIcon={ImageResources.chevronLeft}
          leftColor={colors.ink.base}
          leftOnPress={() => navigation.goBack()}
        />
        <View style={styles.inputs}>
          <InputControlled
            control={control}
            name={'fullName'}
            label="Full Name"
            type="text"
            rules={FormRules.fullName}
            keyboardType="default"
            placeholder="Elnur Namaz"
            errorMessage={errors.fullName?.message}
          />
          <InputControlled
            control={control}
            name={'email'}
            label="Email"
            type="text"
            rules={FormRules.email}
            keyboardType="email-address"
            placeholder="Enter your email"
            errorMessage={errors.email?.message}
          />
          <InputControlled
            control={control}
            name={'password'}
            label="Password"
            type="password"
            rules={FormRules.password}
            placeholder="Enter your password"
            errorMessage={errors.password?.message}
          />
        </View>
        <Button
          title={'Create an account'}
          size={'block'}
          type={'primary'}
          position={'center'}
          loading={isSubmitting}
          disabled={isSubmitting}
          onPress={handleSubmit(onSubmit)}
        />
      </ScrollView>
      <View style={styles.footer}>
        <TextLink
          center
          content={signUp.content}
          highlighted={signUp.highlighted}
          fontColor={colors.primary.base}
        />
      </View>
    </SafeMainProvider>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingVertical: normalize('vertical', 12),
  } as ViewStyle,
  inputs: {
    paddingTop: normalize('vertical', 24),
    paddingBottom: normalize('vertical', 32),
    gap: normalize('vertical', 24),
  } as ViewStyle,
});
