<template>
  <div class="about clr-slateGray">
    <div class="d-flex pt-6 justify-content-center about-main flex-wrap">
      <div class="about_section_2">
        <div clas="profile m-2">
          <div class="profileImage"></div>
        </div>
      </div>
      <div class="about_section_1">
        <div class="font-md py-2 mx-4">
          <span>Hi, my name is Rahul Mahale. Software Engineer at Pune, India</span>
        </div>
        <div class="font-md py-2 mx-4">
          <span>
            I enjoy building everything from small business site to modern UX interactive web applications. My aim is provide
            bug free (approximate you can say), perfromant experience web application.
          </span>
        </div>
        <div class="font-md py-2 mx-4">
          <span>
            For last six years am working on one of important and meaningfull projetcs in field of Investment Banking, Cloud Apps and
            Product Life Cycle Management.
          </span>
        </div>

        <div class="font-md py-2 mx-4">
          <span>Techonlogy I have been working recently</span>
        </div>

        <div class="d-flex flex-wrap ml-3 aboutSkills mx-4">
          <div
            v-for="(item,index) in skills "
            :key="index"
            class="font-md pl-2 maxSkill mx-4"
          >{{item}}</div>
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

  skills = [
    "Angular Upto 14V ",
    "Vue Js",
    "TypeScript",
    "React Js",
    "Material Design",
    "Bootstrap"
  ];
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
  background-image: linear-gradient(
      rgba(31, 179, 172, 0.5),
      rgba(0, 15, 200, 0.32)
    ),
    url(../static/profile.JPG);
  margin: 10px;
  width: 250px;
  height: 300px;
  float: left;
  background-size: cover;
  vertical-align: middle;
  border: 2px solid $skyBlue;
}
.aboutSkills {
  width: 350px;
}
.maxSkill {
  width: 150px;
}
.maxSkill:before {
  content: " ";
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: #1cc2ff;
  margin: 9px 0px 0px -20px;
}
</style>
