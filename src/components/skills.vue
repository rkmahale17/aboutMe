<template>
  <div class="m-auto mt-3 row">
    <div
      class="skills ml-2 mt-2 col-5 col-md-5 col-sm-10 col-xs-10"
      v-for="(item, index) in skillsData"
      :key="index"
    >
      <span class="w-100 text-center skillsText">{{ item.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
@Component
export default class Skills extends Vue {
  @Prop() skillsData!: Array<any>;
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
  border: 1px solid black;
  height: 35px;
}
.skills:hover {
  background: whitesmoke;
}
</style>
