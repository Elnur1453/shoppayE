import {create} from 'zustand';
import {ICardStore} from './card.types';

const initial: Omit<ICardStore, 'action'> = {
  count: 0,
};

export const useCardStore = create<ICardStore>(set => ({
  ...initial,
  action: {
    increment: () => set(state => ({count: state.count + 1})),
    decrement: () => set(state => ({count: state.count - 1})),
    reset: () => {},
  },
}));
