<template>
  <div class="logo">
    <span>R</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Getter } from "nuxt-property-decorator";
@Component
export default class Logo extends Vue {}
</script>

<style lang="scss">
.logo {
  border: 2px solid $skyBlue;
  padding: 0px 15px;
  font-size: 1em;
  font-weight: 600;
}
</style>
