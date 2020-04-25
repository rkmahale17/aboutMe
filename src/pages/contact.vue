
<template>
  <div>
    <div class="mainHeading">Let's connect To Build Something Awesome</div>
    <div class="d-flex flex-wrap contact_box_wrapper">
      <div class="contact-box contact-box-left">
        <div class="contact_header1">Email</div>
        <div class="contact_header2">rahulmahale172214@gmail.com</div>
        <div>
          <button
            class="round-btn"
            v-clipboard:copy="mailId"
            @click="showModal(messageCopyEmail)"
          >Copy Mail Id</button>
        </div>
        <div>
          <button class="round-btn">
            <a
              target="_blank"
              href="mailTo:rahulmahale172214@gmail.com?subject=Proposal%20for%20freelancing%20&body=Hi%20Rahul,"
            >Email Me</a>
          </button>
        </div>
      </div>
      <div class="contact-box contact-box-right">
        <div class="contact_header1">Mobile No</div>
        <div class="contact_header2">rahulmahale172214@gmail.com</div>
        <div>
          <button
            class="round-btn"
            v-clipboard:copy="phoneNo"
            @click="showModal(messageCopyNo)"
          >Copy Mobile No</button>
        </div>
        <div>
          <button class="round-btn">
            <a href="tel:8007610593">Call Me</a>
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
.contact-box-left {
  padding-left: 10%;
}
.contact-box-right {
  padding-left: 10%;
}
.contact-box {
  flex: 1;
}
.contact_box_wrapper {
  margin-top: 10px;
}
.contact_header1 {
  padding: 10px 0px;
  color: slateGray;
  border-bottom: 1px solid gray;
  width: 200px;
}
.contact_header2 {
  color: white;
  padding: 20px 0px 0px 0px;
  font-size: 0.8em;
  margin-top: 10px;
}
</style>
