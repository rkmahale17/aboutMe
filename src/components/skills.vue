<template>
  <div class="m-auto mt-3 row">
    <div
      class="skills ml-2 mt-2 col-lg-5 col-sm-5 col-xl-5 col-md-5 col-10 text-center"
      style="line-height:30px"
      v-for="(item, index) in skillsData"
      :key="index"
    >
      <span class="w-100 skillsText">{{ item.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { State, Action, Getter } from "vuex-class";

import { mapActions } from "vuex";
@Component
export default class Skills extends Vue {
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
  width: 150px;
  border-radius: 35px;
  border: 2px solid #dee2e6;
  height: 35px;
}
.skills:hover {
  background: rgb(58, 57, 57);
}
</style>
