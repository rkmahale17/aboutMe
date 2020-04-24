<template>
  <div>
    <toolbar></toolbar>
    <nuxt />
  </div>
</template>
<script>
import Vue from "vue";
import toolbar from "~/components/toolbar.vue";

export default Vue.extend({
  components: { toolbar }
});
</script>

<style lang="scss">
html,
body {
  /* Center and scale the image nicely */
  background: $black;
  background-position: bottom;
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
