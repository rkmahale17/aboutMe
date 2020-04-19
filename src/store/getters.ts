export default {
  getNavBarMenuList: (state: any) => {
    console.log(state);
    return state.navBarMenuList.items;
  },
  getCurrentRouterPath: (state: any) => {
    return state.currentRoutePath;
  }
};
