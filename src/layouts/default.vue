<template>
  <div>
    <Toolbar />
    <nuxt />
  </div>
</template>
<script>
import Vue from "vue";
import Toolbar from "~/components/Toolbar.vue";

export default Vue.extend({
  components: { Toolbar }
});
</script>

<style lang="scss">
.mi{ padding : 20px;}
</style>
