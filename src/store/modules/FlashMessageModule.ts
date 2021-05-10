import { CommitModel } from '@/models/CommitModel';
import { FlashMessageModel } from '@/models/FlashMessageModel';

const defaultTimeout = 8000;

const FlashMessageModule = {

  namespaced: true,

  state: (): FlashMessageModel => ({
    title: '',
    text: '',
    class: 'info',
    active: false,
    timeout: defaultTimeout,
  }),

  getters: {
    //  Potential getters
  },

  actions: {
    createMessage({ commit }: CommitModel, payload: FlashMessageModel): void {
      commit('setMessage', payload);
      setTimeout(() => {
        commit('hideMessage');
      }, payload.timeout ? payload.timeout : defaultTimeout);
    },
  },

  mutations: {
    setMessage(state: FlashMessageModel, payload: FlashMessageModel): void {
      state.title = payload.title;
      state.text = payload.text;
      state.class = payload.class;
      state.active = true;
      state.timeout = payload.timeout ? payload.timeout : defaultTimeout;
    },

    hideMessage(state: FlashMessageModel): void {
      state.active = false;
    },
  },

};

export default FlashMessageModule;
