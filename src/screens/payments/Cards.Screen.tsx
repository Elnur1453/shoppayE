import {StyleSheet} from 'react-native';
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
import {useNavigation} from '@react-navigation/native';
import {useUserStore} from 'store/user/user.store';

export const CardsScreen: React.FC<SceneRendererProps> = ({jumpTo}) => {
  const navigation = useNavigation();

  const {
    selectedCard,
    actions: {selectCard},
  } = useUserStore(state => state);

  const onLeftPress = () => {
    jumpTo(Routes.paymentMethod);
    selectCard(null);
  };

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
        cardNumber={selectedCard?.cardNumber}
        holder={selectedCard?.holder}
        expiration={selectedCard?.expiration}
      />
      <Button
        title={'Add new card'}
        type={'outlined'}
        position={'center'}
        onPress={() => jumpTo(Routes.addNewCard)}
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
