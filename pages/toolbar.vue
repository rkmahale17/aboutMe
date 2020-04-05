<template>
  <div>
    <div class="row">
      <li
        class="m-2 noBullet pb-4 toolbarMenuBottom"
        v-for=" (item,index) in getNavBarMenuList"
        @mouseover="activeHover = index"
        @mouseout="activeHover = -11"
        :class="{toobarMenuBottoBorder: (activeHover == index)}"
        :key="index"
      >
        <nuxt-link :to="{path:item.url}">{{item.name}}</nuxt-link>
      </li>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
export default Vue.extend({
  components: {},
  data: function() {
    return {
      activeHover: false
    };
  },
  computed: {
    ...mapGetters({ getNavBarMenuList: "getNavBarMenuList" })
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
  color: black;
}
.toobarMenuBottoBorder {
  border-bottom-color: gray;
}
a,
a:hover {
  text-decoration: none; /* no underline */
  color: black;
}
</style>
