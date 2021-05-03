// store.ts
import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import actions from './actions';
import FlashMessageModule from './modules/FlashMessageModule';
import mutations from './mutations';

// define your typings for the store state
export interface State {
  count: number
}

// define injection key
// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 0,
  },
  actions,
  mutations,
  modules: {
    flashMessage: FlashMessageModule,
  },
});

// define your own `useStore` composition function
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useStore() {
  return baseUseStore(key);
}
