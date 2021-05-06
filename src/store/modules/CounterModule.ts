import { CounterModel } from '@/models/CounterModel';

const CounterModule = {

  namespaced: true,

  state: (): CounterModel => ({
    count: 0,
  }),

  getters: {
    //  Potential getters
  },

  actions: {
    //  Potential actions
  },

  mutations: {
    increment(state: CounterModel): void {
      state.count += 1;
    },
  },

};

export default CounterModule;
