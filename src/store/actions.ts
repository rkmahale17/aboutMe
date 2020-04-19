export default {
  updateRouterPathAction(context: any, path: string): any {
    console.log(path);
    context.commit("updaeRouterPath", { path });
  }
};
