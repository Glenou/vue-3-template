import { FlashMessageModel } from '@/models/FlashMessageModel';

const FlashMessageModule = {

  namespaced: true,

  state: (): any => ({
    text: '',
    class: 'info',
    pop: false,
  }),

  getters: {
    //  Potential getters
  },

  actions: {
    //  Potential actions
  },

  mutations: {
    setMessage(state: any, payload: FlashMessageModel): void {
      state.text = payload.text;
      state.class = payload.class;
      state.pop = payload.pop;
    },
  },

};

export default FlashMessageModule;
