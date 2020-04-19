<template>
  <div class="aboutPageBack">
    <button type="button" class="hireMeButton">
      <a
        class="w-100 text-center hireMeButtonText"
        target="_blank"
        href="mailTo:coolfrontenddev@gmail.com?subject=Proposal%20for%20freelancing%20&body=Hi%20Rahul,"
      >Email Me</a>
    </button>

    <div
      class="d-flex justify-content-center align-items-center flex-wrap mb-4"
      style="height:100vh"
    >
      <b-card class="mb-2 customeTransparentCard">
        <div class="card-header">
          <span class="font-weight-bold card-header-name">Who I am ?</span>
        </div>
        <p class="card-body-text">I am WEB and MOBILE app developer with 4+ years of experience.</p>
        <p class="card-body-text">
          Worked in different oraganization with different domains like Core
          Banking System, Product LifeCycle Management, Cloud (SAAS).
        </p>
        <p class="card-body-text">
          Created my own E-Commerce website and often working for Freelancing
          projects.
        </p>
      </b-card>
      <b-card class="mb-2 ml-2 customeTransparentCard">
        <div class="card-header">
          <span class="font-weight-bold card-header-name">Skills</span>
        </div>
        <skills :skillsData="skillsData" class="card-body-text"></skills>
      </b-card>
    </div>

    <!-- <div class="right-bottom">
      <a
        style="
          background-color: black;
          color: white;
          text-decoration: none;
          padding: 4px 6px;
          font-family: -apple-system, BlinkMacSystemFont, 'San Francisco',
            'Helvetica Neue', Helvetica, Ubuntu, Roboto, Noto, 'Segoe UI', Arial,
            sans-serif;
          font-size: 12px;
          font-weight: bold;
          line-height: 1.2;
          display: inline-block;
          border-radius: 3px;
        "
        href="https://unsplash.com/@karlp?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
        target="_blank"
        rel="noopener noreferrer"
        title="Download free do whatever you want high-resolution photos from Karl Pawlowicz"
      >
        <span style="display: inline-block; padding: 2px 3px;">
          Image Credit
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style="
              height: 12px;
              width: auto;
              position: relative;
              vertical-align: middle;
              top: -2px;
              fill: white;
            "
            viewBox="0 0 32 32"
          >
            <title>unsplash-logo</title>
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
          </svg>
        </span>
        <span style="display: inline-block; padding: 2px 3px;">Karl Pawlowicz</span>
      </a>
    </div>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Action } from "nuxt-property-decorator";
import Skills from "../components/skills.vue";
@Component({
  components: {
    Skills
  }
})
export default class About extends Vue {
  @Action("updateRouterPathAction") updateRouterPathAction: any;
  created() {
    this.updateRouterPathAction(this.$route.path);
  }
  skillsData: Array<any> = [
    { name: "Angular 4/8" },
    { name: "Vue Js" },
    { name: "Angular Js" },
    { name: "Vanilla Js" },
    { name: "Bootstrap" },
    { name: "Material" },
    { name: "Node Js" },
    { name: "Fireabse " },
    { name: "Java" }
  ];
}
</script>

<style>
.aboutPageBack {
  /* Full height */
  height: 80vh;
  /* Center and scale the image nicely */
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
}
.right-bottom {
  position: fixed;
  bottom: 20px;
  right: 30px;
}

.customeTransparentCard {
  max-width: 400px;
  background: #2f2f2f;
  color: white;
  border-radius: 12px;
}
.card-header {
  text-align: center;
  font-size: 0.9em;
  font-weight: 600;
  padding: 3px 2em;
  border-bottom: 2px solid #dee2e6;
  background-color: #2f2f2f;
  color: white;
}
.card-body-text {
  padding: 0.4em 1em;
  font-size: 0.9em;
  font-weight: 500;
}
.hireMeButton {
  z-index: 1;
  position: fixed;
  bottom: 20px;
  left: calc(50% - 150px);
  background-color: #7976768f !important;
  border: 2px solid #030303;
  background-color: white;
  width: 300px;
  height: 50px;
  border-radius: 35px;
  outline: none;
  margin: auto;
  color: black;
}
.hireMeButton:hover {
  background-color: rgba(69, 62, 62, 0.56078) !important;
}
.hireMeButtonText {
  text-align: center;
  font-size: 1.5em;
  font-weight: 500;
  color: white;
}
.card-header-name {
  font-size: large;
  color: rgb(255, 255, 255);
}
</style>
