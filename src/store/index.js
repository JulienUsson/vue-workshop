import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  items: [],
};

const mutations = {
  addItem (state, item) {
    state.items.push(item);
  },

  removeItem (state, index) {
    state.items.splice(index, 1)
  },
};

const getters = {
  wipItems: state => {
    return state.items.filter(item => item.toUpperCase().startsWith('WIP'))
  }
}

const actions = {
  fetchItem ({ commit }) {
    setTimeout(() => {
      commit('addItem', 'Fetched item')
    }, 750)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
