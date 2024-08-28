import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Pressable,
} from 'react-native';
import React from 'react';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {ImageResources} from 'assets/VectorResources.g';
import {colors} from 'theme/colors';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from 'types/navigation.types';
import {Routes} from 'router/routes';
import {NavBar} from 'components/NavBar';
import {Button} from 'components/Button';
import {TextLink} from 'components/TextLink';
import {methodPayment} from 'constants/textLinks';
import {normalize} from 'theme/metrics';
import {TypographyStyles} from 'theme/typography';
import {Table} from 'components/Table';
import {SceneRendererProps} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';
import {useUserStore} from 'store/user/user.store';
import {ICardInputFrom} from 'types/card.types';
import {BankCard} from 'components/specific/BankCard';

export const PaymentMethodScreen: React.FC<SceneRendererProps> = ({jumpTo}) => {
  const navigation = useNavigation();
  const {
    cards,
    actions: {selectCard},
  } = useUserStore(state => state);

  const renderCards = (data: ICardInputFrom) => {
    const onPress = () => {
      selectCard(data.id);
      jumpTo(Routes.cards);
    };
    return (
      <Pressable>
        <Table
          type={'bank'}
          key={data.id}
          isPressable={true}
          onPress={onPress}
          text={`* * * * * * * * * * * * ${data.cardNumber.slice(-4)}`}
        />
      </Pressable>
    );
  };
  return (
    <SafeMainProvider>
      <NavBar
        leftColor={colors.ink.base}
        leftOnPress={() => navigation.goBack()}
        textRight={'Skip'}
        // rightOnPress={() => navigation.navigate(Routes.login)}
        leftIcon={ImageResources.chevronLeft}
        largeTitle={'PAYMENT METHODS'}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.main}>
          <View style={styles.textLink}>
            <Text style={styles.text}>STORED CARD</Text>
            <TextLink
              content={methodPayment.content}
              fontColor={colors.primary.base}
              highlighted={methodPayment.highlighted}
            />
          </View>
          <View style={styles.buttons}>
            {cards.map(renderCards)}
            <Table
              type={'add'}
              isPressable={true}
              text={'Add another card'}
              onPress={() => jumpTo(Routes.cards)}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>STORED CARD</Text>
            <Text style={styles.textError}>
              You don’t have a connected bank account.
            </Text>
          </View>
        </View>
        <Button
          title={'Connect a bank account'}
          type={'primary'}
          position={'center'}
          onPress={() => jumpTo(Routes.cards)}
        />
      </ScrollView>
    </SafeMainProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    gap: normalize('vertical', 32),
  } as ViewStyle,
  contentContainerStyle: {
    paddingBottom: normalize('vertical', 60),
  } as ViewStyle,
  textLink: {
    gap: normalize('vertical', 12),
    paddingTop: normalize('vertical', 24),
  } as TextStyle,
  buttons: {
    gap: normalize('vertical', 16),
  } as ViewStyle,
  text: {
    ...TypographyStyles.RegularNoneSemibold,
    color: colors.ink.darkest,
  } as TextStyle,
  textContainer: {
    gap: normalize('vertical', 12),
    paddingBottom: normalize('vertical', 24),
  } as ViewStyle,
  textError: {
    ...TypographyStyles.RegularNormalRegular,
    color: colors.ink.lighter,
  } as TextStyle,
});
