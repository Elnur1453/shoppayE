import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Keyboard,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {NavBar} from 'components/NavBar';
import {ImageResources} from 'assets/VectorResources.g';
import {colors} from 'theme/colors';
import {OTPCodeField} from 'components/OTPInputField';
import {TextLink} from 'components/TextLink';
import {modal, verification} from 'constants/textLinks';
import {Button} from 'components/Button';
import {CommonStyles} from 'theme/commonStyles';
import {normalize} from 'theme/metrics';

export const VerificationScreen = () => {
  const [code, setCode] = React.useState<string>('');
  return (
    <SafeMainProvider>
      <Pressable style={CommonStyles.flex} onPress={Keyboard.dismiss}>
        <NavBar
          largeTitle="enter sms code"
          leftIcon={ImageResources.chevronLeft}
          leftColor={colors.ink.base}
          leftOnPress={() => {}}
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
        <Button title="Continue" position="center" onPress={() => {}} />
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
