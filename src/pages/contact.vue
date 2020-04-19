
<template>
  <div class="align-items-center justify-content-center d-flex contact-box">
    <div class="contact-info-box p-4">
      <div class="row">
        <div class="col-5 text-left">Mobile No</div>
        <div class="col-7 text-left">
          <a>+91 8007610593</a>
        </div>
      </div>
      <div class="row mt-4 px-0">
        <div class="col-5">
          <button
            class="info-buttons"
            v-clipboard:copy="phoneNo"
            @click="showModal(messageCopyNo)"
          >Copy No</button>
        </div>
        <div class="col-7">
          <button class="info-buttons">
            <a href="tel:8007610593">Call Me</a>
          </button>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-5 text-left">Email Id</div>
        <div class="col-7 text-left word-break-all">
          <a>coolfrontenddev@gmail.com</a>
        </div>
      </div>

      <div class="row mt-4 px-0">
        <div class="col-5">
          <button
            class="info-buttons"
            v-clipboard:copy="mailId"
            @click="showModal(messageCopyEmail)"
          >Copy Email</button>
        </div>
        <div class="col-7">
          <button class="info-buttons">
            <a
              target="_blank"
              href="mailTo:coolfrontenddev@gmail.com?subject=Proposal%20for%20freelancing%20&body=Hi%20Rahul,"
            >Email Me</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Action } from "nuxt-property-decorator";

@Component
export default class Contact extends Vue {
  messageCopyNo: String = "Phone Number Copied !!";
  messageCopyEmail: String = "Email Id Copied !!";
  message: string = "";
  mailId: string = "coolfrontenddev@gmail.com";
  phoneNo: Number = 8007610593;
  @Action("updateRouterPathAction") updateRouterPathAction: any;
  created() {
    this.updateRouterPathAction(this.$route.path);
  }
  showModal(text: string) {
    this.message = text;
    this.makeToast(false);
  }
  makeToast(append = false) {
    this.$bvToast.toast(` ${this.message}`, {
      title: "Copy Success",
      autoHideDelay: 500,
      appendToast: append
    });
  }
}
</script>

<style scoped>
.contact-info-box {
  background: #2f2f2f;
  color: white;
  border-radius: 12px;
  max-width: 400px;

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
.contact-box {
  height: 80vh;
}
.success-infoBox {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  background: #2f2f2f;
  color: white;
  border-radius: 12px;
  width: 400px;
}
</style>
