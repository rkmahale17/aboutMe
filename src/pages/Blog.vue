
<template>
  <div class="align-items-center justify-content-center d-flex" style="height:80vh">
    <h5 class="comming-soon-block">Comming Soon</h5>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Action } from "nuxt-property-decorator";
@Component
export default class Blog extends Vue {
  @Action("updateRouterPathAction") updateRouterPathAction: any;
  created() {
    this.updateRouterPathAction(this.$route.path);
  }
}
</script>

<style scoped>
.comming-soon-block {
  color: white;
  font-size: 40px;
  border: 3px solid yellow;
  padding: 20px;
}
</style>
