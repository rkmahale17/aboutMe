<template>
  <div class="side-designs">
    <div class="side-design__left"></div>

    <div class="side-design__right"></div>

    <div class="side-design__email"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Getter } from "nuxt-property-decorator";
@Component
export default class SideDesigns extends Vue {}
</script>

<style lang="scss">
.side-design__left {
  border-left: 4px solid $skyBlue;
  background: white;
  height: 20%;
  position: absolute;
  top: 60%;
}
.side-design__right {
  border-left: 4px solid $skyBlue;
  background: white;
  height: 20%;
  position: absolute;
  top: 60%;
  right: 0%;
}
.side-design__email {
  position: absolute;
  right: 0%;
  bottom: 10px;
  color: $slateGray;
  font-size: 0.8em;
}
</style>
