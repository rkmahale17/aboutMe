
<template>
  <div class="align-items-center justify-content-center d-flex" style="height:80vh">
    <div class="contact-info-box p-4">
      <div class="row">
        <div class="col-5 text-left">Mobile No</div>
        <div class="col-7 text-left">+91 - 8007610593</div>
      </div>
      <div class="row mt-4 px-0">
        <div class="col-5">
          <button class="info-buttons">Copy No</button>
        </div>
        <div class="col-7">
          <button class="info-buttons">Call Me</button>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-5 text-left">Email Id</div>
        <div class="col-7 text-left word-break-all">coolfrontenddev@gmail.com</div>
      </div>

      <div class="row mt-4 px-0">
        <div class="col-5">
          <button class="info-buttons">Copy Email</button>
        </div>
        <div class="col-7">
          <button class="info-buttons">Email Me</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
@Component
export default class Contact extends Vue {}
</script>

<style scoped>
.contact-info-box {
  background: #2f2f2f;
  color: white;
  border-radius: 25px;
  width: 60%;
  max-width: 500px;
  min-width: 300px;
}
.info-buttons {
  color: white;
  width: 100px;
  background: black;
  border: none;
  border-radius: 20px;
  padding: 4px;
}
.word-break-all {
  word-break: break-word;
}
</style>
