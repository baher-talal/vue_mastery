import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {id: 'asd123', name: 'Baher Talal'},
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
    events: [
      {id: 1, title: '....', organizer: '...'},
      {id: 2, title: '....', organizer: '...'},
      {id: 3, title: '....', organizer: '...'},
      {id: 4, title: '....', organizer: '...'},
    ]
  },

  mutations: {},

  actions: {},

  modules: {},

  getters: {
    catLength: state => {
      return state.categories.length
    },

    getEventById: state => id => {
      return state.events.find(events => events.id === id)
    }
  },
});
