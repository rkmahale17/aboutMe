<template>
  <div class="toolbarBackground">
    <b-navbar toggleable="sm" type="dark" class="border-bottom">
      <b-navbar-brand href="/" style="color:white">ABOUT ME</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav varient="light">
        <b-navbar-nav></b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            class="ml-2 noBullet toolbarMenuBottom toobarMenuBottoBorder"
            v-for=" (item,index) in getNavBarMenuList"
            :class="{activeRoute : (item.url === getCurrentRouterPath.path)}"
            :key="index"
            :href="item.name !=='Github'? item.url : 'https:/github.com/rkmahale17/'"
          >{{item.name}}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Getter } from "nuxt-property-decorator";
@Component
export default class Toolbar extends Vue {
  @Getter("getNavBarMenuList") getNavBarMenuList: any;
  @Getter("getCurrentRouterPath") getCurrentRouterPath: any;
  goTOGithub() {
    window.open("https:/github.com/rkmahale17/");
  }
}
</script>

<style>
.noBullet {
  list-style-type: none;
}
.toolbarMenuBottom {
  width: 60px;
  text-align: center !important;
  cursor: pointer;
  border-bottom: 4px solid transparent;
  color: rgb(203, 207, 213);
}
.toobarMenuBottoBorder:hover {
  border-bottom-color: rgb(203, 207, 213);
  color: white;
}
a {
  color: rgb(203, 207, 213);
  text-decoration: none; /* no underline */
}
a:hover {
  text-decoration: none; /* no underline */
  color: white;
}
.toolbarBackground {
  background-color: black;
  color: white;
}
.activeRoute {
  border-bottom: 4px solid transparent;
  border-bottom-color: rgb(203, 207, 213);
}
::v-deep .navbar-toggler {
  background: rgb(185, 181, 181) !important;
}
</style>
