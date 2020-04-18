<template>
  <div class="toolbarBackground">
    <b-navbar toggleable="lg" class="border-bottom">
      <b-navbar-brand href="#" style="color:white">ABOUT ME</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav></b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            class="ml-2 noBullet toolbarMenuBottom"
            v-for=" (item,index) in getNavBarMenuList"
            @mouseover="activeHover = index"
            @mouseout="activeHover = -11"
            :class="{toobarMenuBottoBorder: (activeHover == index), activeRoute : (item.url === path)}"
            :key="index"
          >
            <nuxt-link :to="{path:item.url}">{{item.name}}</nuxt-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
export default Vue.extend({
  components: {},
  name: "toolbar",
  data: function() {
    return {
      activeHover: false,
      path: ""
    };
  },
  computed: {
    ...mapGetters({ getNavBarMenuList: "getNavBarMenuList" })
  },
  created() {
    if (this.$route.path) {
      this.path = this.$route.path;
    }
  }
});
</script>

<style>
.noBullet {
  list-style-type: none;
}
.toolbarMenuBottom {
  width: 60px;
  text-align: center;
  cursor: pointer;
  border-bottom: 4px solid transparent;
  color: rgb(203, 207, 213);
}
.toobarMenuBottoBorder {
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
</style>
