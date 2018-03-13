import Vue from 'vue';

const Vuex = require('vuex');

Vue.use(Vuex);

const state = {
  count: 0,
};

const mutations = {
  INCREMENT_VALUE() {
    state.count += 1;
  },
};

export default new Vuex.Store({
  state,
  mutations,
});
