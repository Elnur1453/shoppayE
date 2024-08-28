import {create} from 'zustand';
import {IUserStore} from './user.types';
import {ICardInputFrom} from 'types/card.types';
import {IUser} from 'types/user';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const initial: Omit<IUserStore, 'actions'> = {
  user: null,
  selectedCard: null,
  cards: [],
};

export const useUserStore = create<IUserStore>(set => ({
  ...initial,
  actions: {
    initUser: (user: IUser) => {
      set({user});
    },
    addCard: (card: ICardInputFrom) => {
      set(state => ({cards: [...state.cards, card]}));
    },
    removeCard: (id: string) => {
      set(state => ({cards: state.cards.filter(card => card.id !== id)}));
    },
    selectCard: (id: string | null) => {
      if (id === null) {
        set({selectedCard: null});
        return;
      }
      set({selectedCard: get(id) as ICardInputFrom});
    },
    reset: () => {
      set(initial);
    },
    initialize: function (): void {
      throw new Error('Function not implemented.');
    },
    logout: function (): void {
      throw new Error('Function not implemented.');
    },
  },
}));
