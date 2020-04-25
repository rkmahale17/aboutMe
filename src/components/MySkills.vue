<template>
  <div class="mt-3 row skills_box">
    <div
      class="skills ml-2 text-center"
      style="line-height:30px"
      v-for="(item, index) in skillsData"
      :key="index"
    >
      <span class="w-100 skillsText">{{ item }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { State, Action, Getter } from "vuex-class";

import { mapActions } from "vuex";
@Component
export default class MySkills extends Vue {
  @Prop() skillsData!: [];
}
// export default Vue.extend({
//   name: "skills",
//   components: {},
//   data: function() {
//     return {};
//   },
//   props: ["skillsData"]
// });
</script>

<style scoped>
.skills {
  width: 200px;
  max-width: 150px;
  border-radius: 35px;
  border: 1px solid #dee2e6;
  height: 35px;
  color: white;
  margin-top: 10px;
}
.skills:hover {
  background: rgb(58, 57, 57);
}
.skills_box {
  max-width: 700px;
}
</style>
