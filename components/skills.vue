<template>
  <div class="m-auto mt-3 row">
    <div class="skills ml-2 mt-2 col-5" v-for="(item, index) in skillsData" :key="index">
      <span class="w-100 text-center text-justify skillsText">{{ item.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from "nuxt-property-decorator";
import Vue from "vue";

export default Vue.extend({
  name: "skills",
  components: {},
  data: function() {
    return {};
  },
  props: ["skillsData"]
});
</script>

<style scoped>
.skills {
  width: 150px;
  border-radius: 35px;
  border: 1px solid black;
  height: 35px;
}
.skillsText {
  line-height: 35px;
}
</style>
