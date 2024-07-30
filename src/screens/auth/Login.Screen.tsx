import {View, Text, ScrollView, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import React from 'react';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {NavBar} from 'components/NavBar';
import {ImageResources} from 'assets/VectorResources.g';
import {TextLink} from 'components/TextLink';
import {colors} from 'theme/colors';
import {Button} from 'components/Button';
import {Input} from 'components/Input';
import {SocialButton} from 'components/SocialButton';
import {Linking} from 'react-native';
import {CommonStyles} from 'theme/commonStyles';
import {normalize} from 'theme/metrics';
import {TypographyStyles} from 'theme/typography';


export interface ILoginForm {
  email: string;
  password: string;
  fullName: string;
}

export const LoginScreen: React.FC = () => {

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
  // const onSubmit = async (data: ILoginForm) => {
  //   const res = await axios({
  //     url: ENDPOINTS.auth.login,
  //     method: 'POST',
  //     data: {
  //       username: data.email.replace('@gmail.com', ''),
  //       password: data.password,
  //     },
  //   });

  //   if (res.status === 200) {
  //     initUser(res.data);
  //     showToast('success', 'Login successful');
  //     // navigation.navigate(Routes.verification, data);
  //   } else {
  //     showToast('error', 'Login failed');
  //   }
  return (
    <SafeMainProvider>
      <ScrollView scrollEnabled={false}
        style={CommonStyles.flex}
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={CommonStyles.flex}>
       <NavBar largeTitle='Welcome!' leftIcon={ImageResources.chevronLeft} leftColor={colors.ink.base} leftOnPress={() => {}} />
        <View style={styles.inputs}>
          <Input placeholder='Enter your email' label='Email' setValue={(value) => console.log(value)} keyboardType='email-address'/>
          <Input placeholder='Enter your password' label='Password' setValue={(value) => console.log(value)} keyboardType='default' />
        </View>
        <View style={styles.loginContainer}>
        <Button
            title={'Login'}
            size={'block'}
            type={'primary'}
            position={'center'}
            // loading={isSubmitting}
            // disabled={isSubmitting}
            // onPress={handleSubmit(onSubmit)}
          />
          <Text style={styles.singInText}>or sign in with</Text>
          <View style={styles.socialButton}>
            <SocialButton
              icon={ImageResources.googleButton}
              onPress={() => Linking.openSettings()}
            />
            <SocialButton
              icon={ImageResources.facebookButton}
              onPress={() => Linking.openSettings()}
            />
            <SocialButton
              icon={ImageResources.twitterButton}
              onPress={() => Linking.openSettings()}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <TextLink
            center
            fontColor={colors.primary.base}
            content={'Already have an account? Sign up'}
            highlighted={[
              {
                text: 'Sign up',
                callback: () => navigation.navigate(Routes.singUp),
              },
            ]}
          />
        </View>
      </ScrollView>
    </SafeMainProvider>
  );
};


const styles = StyleSheet.create({
  loginContainer: {
    gap: normalize('vertical', 32),
  } as ViewStyle,
  socialButton: {
    gap: normalize('horizontal', 24),
    ...CommonStyles.alignJustifyCenterRow,
  } as ViewStyle,
  singInText: {
    textAlign: 'center',
    color: colors.ink.dark,
    ...TypographyStyles.TinyNormalRegular,
  } as TextStyle,
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingVertical: normalize('vertical', 14),
  } as ViewStyle,
  inputs: {
    gap: normalize('vertical', 24),
    paddingTop: normalize('vertical', 24),
    paddingBottom: normalize('vertical', 32),
  } as ViewStyle,
});