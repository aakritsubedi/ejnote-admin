<template>
  <div class="about-us">
    <div class="login-logo" id="logo-about">
      <img src="@/assets/images/logo_125.svg" />
    </div>
    <div>
      <p>Choose what you'd like to learn from our extensive subscription library. High quality notes and study materials. Learn from notes anytime anywhere. Access to high quality study guides to get better grades.</p>
      <span class="about-title h5">Our Mission</span>
      <p>To help you learn the skills you need to achieve your full potential.</p>
    </div>
    <div class="mt-1">
      <span class="about-title h5">Contact Us</span>
      <span>
        bctNotes.com
        <br />44600 Basundhara Kathmandu, Nepal
      </span>
      <br />
      <a href="mailto:aakritsubedi9@gmail.com">aakritsubedi9@gmail.com</a>
      <h5>+977-01-2070021</h5>
    </div>
    <div class="page-count mt-3">
      <p>
        Copyright &copy; {{ year }}
        <span class="font-weight-bold">Engineering Notes</span>.
        <br />All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AboutUs",
  data() {
    return {
      count: 0,
      year: 0,
      chatMessage: []
    };
  },
 computed: {
    ...mapGetters(["users"])
  },
  methods: {
    ...mapActions(["getUserInfo"]),
  },
  async created() {
    this.getUserInfo();
    this.year = new Date().getFullYear();
  }
};
</script>