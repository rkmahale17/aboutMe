<template>
  <div class="container mainBox">
    <div class="row">
      <span class="header1">Hii Guys, I am</span>
    </div>
    <div class="row">
      <span class="header2">Rahul Mahale</span>
    </div>
    <div class="row">
      <span class="header3">Professional in web development things</span>
    </div>

    <div class="row">
      <span
        class="header4"
      >With 4+ years of experience. Worked in different oraganization with different domains like Core Banking System, Product LifeCycle Management, Cloud (SAAS).Created my own E-Commerce website and often working for Freelancing projects.</span>
    </div>

    <div class="row mt-3 mb-3">
      <button class="emailButton">
        <a
          target="_blank"
          href="mailTo:rahulmahale172214@gmail.com?subject=Proposal%20for%20freelancing%20&body=Hi%20Rahul,"
        >Let's Build Awesome</a>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {}
});
</script>

<style lang="scss">
.header1 {
  color: $skyBlue;
  font-size: 0.8em;
}
.mainBox {
  margin-top: 6%;
  margin-left: 10%;
}
.header2 {
  color: white;
  font-size: 1.8em;
  font-weight: 600;
  padding: 1rem 0px;
}
.header3 {
  padding: 0px 10px;

  color: $slateGray;
  font-size: 1.8em;
  font-weight: 600;
}
.header4 {
  padding: 0px 10px;
  margin-top: 2%;
  color: white;
  font-size: 0.8em;
  font-weight: 600;
  max-width: 600px;
}
.emailButton {
  border: 1px solid #1cc2ff;
  padding: 0.3em 1em;
  color: white;
  background: transparent;
  font-size: 1.2em;
  font-weight: 600;
}
</style>
