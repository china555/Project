import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    permission: "Guest",
    userID: "",
    token: "",
  },
  mutations: {
    setpermission(state, payload) {
      state.permission = payload.permission;
    },
  },
  actions: {},
  modules: {},
});
