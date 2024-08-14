import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {NavBar} from 'components/NavBar';
import {colors} from 'theme/colors';
import {ImageResources} from 'assets/VectorResources.g';
import {SceneRendererProps} from 'react-native-tab-view';
import {Routes} from 'router/routes';
import {BankCard} from 'components/specific/BankCard';
import {Button} from 'components/Button';
import {normalize} from 'theme/metrics';

export const CardsScreen: React.FC<SceneRendererProps> = ({jumpTo}) => {
  return (
    <SafeMainProvider>
      <NavBar
        leftColor={colors.ink.base}
        leftOnPress={() => jumpTo(Routes.paymentMethod)}
        leftIcon={ImageResources.chevronLeft}
        title="YOUR CARDS"
      />
      <BankCard
        style={styles.card}
        onPress={() => console.log('press')}
        cardNumber="1234 1234 1234 1234"
        holder="Elnur Namaz"
        expiration="12/27"
      />
      <BankCard
        style={styles.card}
        onPress={() => console.log('press')}
        cardNumber="-"
        holder="-"
        expiration="-/-"
        empty={true}
        disabled={true}
      />
      <Button
        title={'Add new card'}
        type={'outlined'}
        position={'center'}
        // onPress={() => jumpTo(Routes.addNewCard)}
      />
    </SafeMainProvider>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: normalize('vertical', 24),
    marginBottom: normalize('vertical', 32),
  },
});
