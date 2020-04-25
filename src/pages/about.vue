<template>
  <div class="about clr-slateGray">
    <div class="d-flex pt-6 justify-content-center about-main flex-wrap">
      <div class="about_section_2 pd-5">
        <div clas="profile m-2">
          <img class="profileImage" src="../static/profile.png" alt="profile Image" />
        </div>
      </div>
      <div class="about_section_1 pd-5">
        <p class="font-md">Hi, my name is Rahul Mahale. Software Engineer at Pune, India</p>
        <p class="font-md">
          I enjoy building everything from small business site to modern UX interactive web applications. My aim is provide
          bug free (approximate you can say), perfromant experience web application.
        </p>
        <p class="font-md">
          For last five years am working on one of important and meaningfull projetcs in field of Investment Banking, Cloud Apps and
          Product Life Cycle Management.
        </p>

        <div class="font-md">Techonlogy I have been working recently</div>

        <div class="d-flex ml-3">
          <div>
            <div class="font-md">Angular 2/4/8</div>
            <div class="font-md">Vue JS</div>
            <div class="font-md">SCSS</div>
          </div>
          <div class="ml-2">
            <div class="font-md">TypeScript</div>
            <div class="font-md">Vanilla JS</div>

            <div class="font-md">Git</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Action } from "nuxt-property-decorator";
import MySkills from "../components/MySkills.vue";
@Component({
  components: {
    MySkills
  }
})
export default class About extends Vue {
  @Action("updateRouterPathAction") updateRouterPathAction: any;
  created() {
    this.updateRouterPathAction(this.$route.path);
  }
  skillsData: Array<any> = ["Angular 4/8"];
}
</script>

<style lang="scss">
.about {
  max-width: 1000px;
  position: relative;
  margin: 0px auto;
  padding: 150px 0px;
}
.about-main {
  max-width: 800px;
  position: relative;
  margin: 0px auto;
}
.about_section_1 {
  flex: 1;
}
.about_section_2 {
  flex: 1;
}
.profileImage {
  height: auto;
  width: 250px;
}
</style>
