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

<style>
html,
body {
  background-image: url("/back.jpg");
  /* Center and scale the image nicely */
  background-position: bottom;
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #000000;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
