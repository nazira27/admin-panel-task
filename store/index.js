export default {
  state: {
    drawer: false,
  },
  getters: {
    drawer: (state) => state.drawer,
  },
  mutations: {
    SET_DRAWER(state) {
      state.drawer = !state.drawer
    },
  },
  actions: {

  },
}
