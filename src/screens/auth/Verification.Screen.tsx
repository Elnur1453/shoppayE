import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Keyboard,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React, {useRef} from 'react';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {NavBar} from 'components/NavBar';
import {ImageResources} from 'assets/VectorResources.g';
import {colors} from 'theme/colors';
import {OTPCodeField} from 'components/OTPInputField';
import {TextLink} from 'components/TextLink';
import {modal, verification} from 'constants/textLinks';
import {Button, IButton} from 'components/Button';
import {CommonStyles} from 'theme/commonStyles';
import {normalize} from 'theme/metrics';
import Modal, {IModalRefCallbacks} from 'components/Modal';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from 'types/navigation.types';
import {Routes} from 'router/routes';

export const VerificationScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.verification>
> = ({navigation, route}) => {
  const [code, setCode] = React.useState<string>('');
  const modalRef = useRef<IModalRefCallbacks>(null);

  const buttonsArray: IButton[] = [
    {
      title: 'Agree and continue',
      type: 'primary',
      position: 'center',
      onPress: () => {
        modalRef?.current?.close();
        if (route.name === Routes.verification) {
          navigation.navigate(Routes.paymentMethod);
          return;
        }
      },
    },
    {
      title: 'Disagree and close',
      type: 'transparent',
      position: 'center',
      onPress: () => {
        modalRef?.current?.close();
        navigation.goBack();
      },
    },
  ];
  return (
    <SafeMainProvider>
      <Pressable style={CommonStyles.flex} onPress={Keyboard.dismiss}>
        <NavBar
          largeTitle="enter sms code"
          leftIcon={ImageResources.chevronLeft}
          leftColor={colors.ink.base}
          leftOnPress={() => navigation.goBack()}
        />
        <OTPCodeField
          length={4}
          triggerOnFinish={() => console.log('finish')}
          setCode={setCode}
          code={code}
        />
        <View style={styles.resentText}>
          <TextLink
            center
            content={verification.content}
            highlighted={verification.highlighted}
            fontColor={colors.primary.base}
          />
        </View>
        <Button
          disabled={code.length !== 4}
          title="Continue"
          type="primary"
          position="center"
          onPress={() => modalRef?.current?.open()}
        />
        <View>
          <Modal
            subTitle={
              <TextLink
                center
                content={modal.content}
                fontColor={colors.primary.base}
                highlighted={modal.highlighted}
              />
            }
            closeable
            buttons={buttonsArray}
            ref={modalRef}
            wrapperStyle={styles.wrapper}
          />
        </View>
      </Pressable>
    </SafeMainProvider>
  );
};

const styles = StyleSheet.create({
  resentText: {
    paddingVertical: normalize('vertical', 32),
  } as TextStyle,
  otp: {
    paddingHorizontal: 32,
    marginTop: 16,
    marginBottom: 32,
  } as ViewStyle,
  wrapper: {
    gap: normalize('vertical', 24),
  },
});
