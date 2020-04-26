<template>
  <div class="toolbarBackground">
    <SideDesigns />
    <b-navbar toggleable="md" type="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav varient="light">
        <b-navbar-nav></b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item
            class="ml-2 noBullet toolbarMenuBottom toobarMenuBottoBorder pb-0"
            v-for=" (item,index) in getNavBarMenuList"
            :class="{activeRoute : (item.url === getCurrentRouterPath.path)}"
            :key="index"
            :href="item.name !=='Github'? item.url : 'https:/github.com/rkmahale17/'"
          >{{item.name}}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <b-navbar-brand class="ml-auto" href="/" style="color:white">
        <Logo></Logo>
      </b-navbar-brand>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Getter } from "nuxt-property-decorator";
import Logo from "../components/Logo.vue";
import SideDesigns from "../components/SideDesigns.vue";

@Component({
  components: { Logo, SideDesigns }
})
export default class Toolbar extends Vue {
  @Getter("getNavBarMenuList") getNavBarMenuList: any;
  @Getter("getCurrentRouterPath") getCurrentRouterPath: any;
  goTOGithub() {
    window.open("https:/github.com/rkmahale17/");
  }
}
</script>

<style lang="scss">
.toolbarMenuBottom {
  text-align: center !important;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  color: $slateGray;
  font-size: 0.8em;
}
.toobarMenuBottoBorder:hover {
  border-bottom-color: $skyBlue;
  color: white;
}
a {
  color: $slateGray;
  text-decoration: none; /* no underline */
  padding: 0px 10px !important;
}
a:hover {
  text-decoration: none; /* no underline */
  color: white;
  padding: 0px 15px !important;
}

.activeRoute {
  border-bottom-color: $skyBlue;
  color: white !important;
}
::v-deep .navbar-toggler {
  background: rgb(185, 181, 181) !important;
}
::v-deep .navbar-dark .navbar-nav .nav-link {
  color: $slateGray;
}
</style>
