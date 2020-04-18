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
          { name: "About", url: "/about", isActiveRoute: false },
          { name: "Contact", url: "/contact", isActiveRoute: false },
          { name: "Blog", url: "/blog", isActiveRoute: false },
          { name: "Github", url: "/github", isActiveRoute: false },
        ],
      },
    },
    getters: getters,
    actions: {},
    mutations: {},
  });

export default store;
