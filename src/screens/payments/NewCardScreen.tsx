import {View, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {NavBar} from 'components/NavBar';
import {ImageResources} from 'assets/VectorResources.g';
import {colors} from 'theme/colors';
import {Button} from 'components/Button';
import {normalize} from 'theme/metrics';
import {InputControlled} from 'components/InputControlled';
import {useForm} from 'react-hook-form';
import {FormRules} from 'constants/formRules';
import DatePicker from 'react-native-date-picker';
import {SceneRendererProps} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';
import {Routes} from 'router/routes';
import {ICardInputFrom} from 'types/card.types';
import {useUserStore} from 'store/user/user.store';
import {useUserStoreActions} from 'store/user';

export const NewCardScreen: React.FC<SceneRendererProps> = ({jumpTo}) => {
  const navigation = useNavigation();

  const [picker, setPicker] = useState<boolean>(false);
  const {addCard} = useUserStoreActions();

  const onSubmit = (data: ICardInputFrom) => {
    data.id = String(Math.floor(Math.random() * 1000));
    addCard(data);
    jumpTo(Routes.paymentMethod);
    reset();
  };

  const onDateConfirm = (date: Date) => {
    const month =
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1;
    const year = String(date.getFullYear()).slice(2);

    setValue('expiration', `${month} / ${year}`);
    setPicker(false);
  };

  const {
    reset,
    control,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm<ICardInputFrom>({
    defaultValues: __DEV__
      ? {
          cardNumber: '2344 5678 9012 3456',
          holder: 'Elnur Namaz',
          cvv: '035',
          expiration: '12 / 27',
        }
      : {},
  });

  // function onSubmit(
  //   data: ICardInputFrom,
  //   event?: BaseSyntheticEvent<object, any, any> | undefined,
  // ): unknown {
  //   throw new Error('Function not implemented.');
  // }

  return (
    <SafeMainProvider>
      <ScrollView>
        <NavBar
          largeTitle={'Add new card'}
          leftOnPress={() => jumpTo(Routes.paymentMethod)}
          leftIcon={ImageResources.chevronLeft}
          leftColor={colors.ink.base}
          rightColor={colors.ink.base}
          rightOnPress={() => console.log('press')}
          textRight={'Skip'}
        />
        <View style={styles.inputs}>
          <InputControlled
            maxLength={19}
            manipulator="cardNumber"
            name="cardNumber"
            label="Card number"
            control={control}
            rules={FormRules.bankCard}
            placeholder="Enter your card number"
            errorMessage={errors.cardNumber?.message}
          />
          <InputControlled
            name="holder"
            label="Cardholder Name"
            control={control}
            rules={FormRules.fullName}
            placeholder="Enter your holder name"
            errorMessage={errors.holder?.message}
          />
          <InputControlled
            name="cvv"
            label="CVV"
            maxLength={3}
            control={control}
            rules={FormRules.cvv}
            keyboardType="number-pad"
            placeholder="Enter your CVV"
            errorMessage={errors.cvv?.message}
          />
          <InputControlled
            name="expiration"
            control={control}
            placeholder="MM / YY"
            label="Expiration Date"
            onInputPress={() => setPicker(true)}
          />
        </View>
        <Button
          position="center"
          title={'Add card'}
          type="primary"
          size="large"
          onPress={handleSubmit(onSubmit)}
        />
        <DatePicker
          modal={true}
          open={picker}
          date={new Date()}
          mode="date"
          theme="light"
          onCancel={() => setPicker(false)}
          title={'Select Expiration Date'}
          onConfirm={onDateConfirm}
        />
      </ScrollView>
    </SafeMainProvider>
  );
};

const styles = StyleSheet.create({
  inputs: {
    gap: normalize('vertical', 24),
    paddingTop: normalize('vertical', 24),
    paddingBottom: normalize('vertical', 32),
  },
});
