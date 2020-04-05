import Vuex from "vuex";
import Vue from "vue";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      navBarMenuList: {
        isLoading: true,
        items: [
          { name: "About", url: "/about" },
          { name: "Contact", url: "/contact" },
          { name: "Blog", ulr: "/blog" },
          { name: "Github", url: "/github" }
        ]
      }
    },
    getters: getters,
    actions: {},
    mutations: {}
  });

export default store;
