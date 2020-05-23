import Vuex from "vuex";
import Vue from "vue";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
export const strict = false;
Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      navBarMenuList: {
        isLoading: true,
        items: [
          { name: "About", url: "/about", isActiveRoute: false },
          { name: "Contact Me", url: "/contact", isActiveRoute: false },
          { name: "Experience", url: "/experience", isActiveRoute: false },
          { name: "Blog", url: "/blog", isActiveRoute: false }        ]
      },
      currentRoutePath: ""
    },
    getters: getters,
    actions: actions,
    mutations: mutations
  });

export default store;
