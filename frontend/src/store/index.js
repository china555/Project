import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "adawdawd",
    permission: "Guest",
    token: "",
  },
  mutations: {
    setpermission(state, payload) {
      state.permission = payload.permission;
    },
    checkpermission(state) {
      if (state.permission === "User") {
        return true;
      }
      return false;
    },
    setusername(state, payload) {
      state.username = payload.username;
    },
  },
  actions: {},
  modules: {},
});
