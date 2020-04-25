<template>
  <div class="experience mt-5 pd-2">
    <div v-for="(item,index) in experience" :key="index">
      <div class="float-left project_locator" :class="{'bck-red' : (index)}"></div>
      <div
        class="experience__compony-name clr-slateGray font-md border-bottom-gray"
      >{{item.compony_name}}</div>
      <div v-for="(project_data , index2) in item.projects" :key="index2">
        <div class="d-flex project_name_box font-md">
          <span class="project_name clr-skyblue">{{project_data.number}}.</span>
          <span class="clr-white">{{project_data.project_name}}</span>
        </div>
        <div class="pd-5">
          <div class="d-flex font-md client-box">
            <section class="clr-slateGray client_name">Client</section>
            <section class="clr-white domain_name">{{project_data.client}}</section>
          </div>
          <div class="d-flex font-md">
            <section class="clr-slateGray client_name">Domain</section>
            <section class="clr-white domain_name">{{project_data.domain}}</section>
          </div>
        </div>
        <div class="pd-5">
          <h3 class="project_header clr-slateGray font-md border-bottom-gray-thin">About Project</h3>

          <div class="pd-2 about_project_box">
            <div class="about_project clr-white font-md">{{project_data.about}}</div>
            <div class="about_myRole clr-white font-md pt-3">{{project_data.role}}</div>
          </div>
        </div>

        <div class="pd-5 pt-4 pb-4">
          <h3 class="skills_header clr-slateGray border-bottom-gray-thin font-md">Skills</h3>
          <MySkills :skillsData="project_data.skills" class="pd-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import MySkills from "../components/MySkills.vue";
import { Component, Prop, Vue, Getter, Action } from "nuxt-property-decorator";
@Component({
  components: { MySkills }
})
export default class Logo extends Vue {
  experience = [
    {
      compony_name: "Mobile Programming LLC",
      projects: [
        {
          number: "01",
          project_name: "Business Workflow",
          domain: "Cloud Platform",
          client: "BMC Software",
          about:
            "BMC Helix Business Workflows is a modern case management solution built for lines of business, including HR, facilities, and other groups—in a scalable, managed, and automated way.",
          role:
            "I am creating web components here by using Angular 8 which is using fully modern approach of js, maintainable, production cable and almost bug free code",
          skills: [
            "Angular 8",
            "AWS",
            "JAVA",
            "TypeScript",
            "GIT",
            "SCSS",
            "VSCODE"
          ]
        },
        {
          number: "02",
          project_name: "SolidEdge",
          domain: "Product Life Cycle",
          client: "Siemens",
          about:
            "Solid Edge delivers cloud-ready design – on your terms. Solid Edge delivers the cloud capabilities you need, by providing easy access to professional 3D CAD across different devices, instant configuration of your CAD environment to your personal preferences, and the ability to quickly share your data across your design resources and with suppliers and customers. ",
          role:
            "Basically am here creating reusable components in Vus Js, adding support for 3D rendering of CAD files, edit and save facility, CICD pipeline creation. ",
          skills: ["VUE", "GIT", "AWS", ".Net", "TypeScript", "SCSS", "VSCODE"]
        }
      ]
    },
    {
      compony_name: "Tata Consultancy Services",
      projects: [
        {
          number: "03",
          project_name: "Swayam Dashboard",
          domain: "Core Banking Solution",
          client: "State Bank Of India",
          about:
            "Swayam Dashboard is a Self passbook printing machine installed in SBI ATMs. So we have to create a dashboard which will analyse the number of persons printing passbook from Swayam machine to no of people printing passbook from the bank itself (manually).",
          role:
            "My job is to create this dashboard by using Angular js, Perl for backend language to create data in JSON format from text files. And to create sub dashboard which will calculating the Penalty on Swayam Machine vendor if machine is down for certain time.",
          skills: ["Angular Js", "Jquery", "PERL", "LESS", "Sublime"]
        }
      ]
    }
  ];
  @Action("updateRouterPathAction") updateRouterPathAction: any;
  created() {
    this.updateRouterPathAction(this.$route.path);
  }
}
</script>

<style lang="scss">
.project_locator {
  width: 20px;
  height: 20px;
  background: black;
  border: 2px solid white;
  border-radius: 10px;

  position: relative;
  left: -2.5em;
  background: #03eb03;
}
.project_header {
  width: 150px;
  margin-top: 3em;
}
</style>
