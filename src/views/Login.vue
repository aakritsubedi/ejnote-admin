<template>
  <div class="login-wrapper">
    <div class="login-logo">
      <img src="@/assets/images/logo_125.svg" />
    </div>
    <div class="login-container">
      <GoogleLogin
        :params="params"
        :renderParams="renderParams"
        :onSuccess="onSuccess"
        :onFailure="onFailure"
        class="login-botton"
        style="width:185px;"
      ></GoogleLogin>
      <p>
        By signing in, you agree to the
        <br />Terms of Use and Privacy Policy.
      </p>
    </div>
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
import LoginService from "@/Services/Login";
import { mapGetters } from "vuex";
import router from "@/router";

export default {
  name: "login",
  components: {
    GoogleLogin
  },
  methods: {
    async onSuccess(googleUser) {
      const userInfo = googleUser.getBasicProfile();

      const user = {
        user_id: userInfo.getId(),
        first_name: userInfo.getGivenName(),
        last_name: userInfo.getFamilyName(),
        photo: userInfo.getImageUrl(),
        email: userInfo.getEmail()
      };
      const users = await LoginService.login(user);
      if (users.code && users.code === 401) {
        throw users;
      }

      this.$store.commit("setUsers", user);
      router.push("/");
    },
    onFailure() {
      this.error.status = true;
      this.error.title = "Login Failed";
      this.error.message = "Please try to login again with google account.";
    }
  },
  computed: {
    ...mapGetters(["users"])
  },
  data() {
    return {
      params: {
        client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID
      },
      renderParams: {
        width: 185,
        longtitle: true
      },
      error: {
        status: false,
        title: "",
        message: ""
      }
    };
  }
};
</script>

<style>
@import "./../assets/css/login.css";
</style>