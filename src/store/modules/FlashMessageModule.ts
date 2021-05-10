import { Commit as VuexCommit } from 'vuex';
import { FlashMessageModel } from '@/models/FlashMessageModel';

type Getters = {
  awaitTime: number;
}

type Commit = {
  commit: VuexCommit;
  getters: Getters;
}

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
    awaitTime(state: FlashMessageModel): number {
      return state.active ? state.timeout : 0;
    },
  },

  actions: {
    createMessage({ commit, getters }: Commit, payload: FlashMessageModel): void {
      setTimeout(() => {
        commit('setMessage', payload);
        setTimeout(() => {
          commit('hideMessage');
        }, payload.timeout ? payload.timeout : defaultTimeout);
      }, getters.awaitTime);
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
