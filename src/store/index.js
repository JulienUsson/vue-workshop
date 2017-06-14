import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    items: [],
};

const mutations = {
    addItem(state, item) {
        state.items.push(item);
    },

    removeItem(state, index) {
        state.items.splice(index, 1)
    },
};

export default new Vuex.Store({
    state,
    mutations,
});