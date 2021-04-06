<template>
  <div class="dashboard-wrapper clearfix">
    <div class="sidebar">
      <div class="company-title">
        <span class="sidebar-title" @click="() => setComponent('AboutUs')">
          <i class="icon fa fa-book"></i> BCT Notes
        </span>
      </div>
      <ul class="menu">
        <li
          @click="() => setComponent('Statistics')"
          :class="component == 'Statistics' ? 'active' : ''"
        >
          <i class="fa fa-dashboard"></i>
          <span class="menu-title">Dashboard</span>
        </li>
        <li
          @click="() => setComponent('WebApp')"
          :class="component == 'WebApp' ? 'active' : ''"
        >
          <i class="fa fa-desktop"></i>
          <span class="menu-title">Web App</span>
        </li>
        <li
          @click="() => setComponent('Profile')"
          :class="component == 'Profile' ? 'active' : ''"
        >
          <img :src="users.photo" />
          <span class="menu-username"
            >{{ users.first_name }} {{ users.last_name }}</span
          >
        </li>
      </ul>
    </div>
    <div class="display-area container-fluid">
      <TopNavigation />
      <transition name="component-fade" mode="out-in">
        <component :is="component" class="pb-75"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import WebApp from "@/components/Dashboard/WebApp";
import Statistics from "@/components/Dashboard/Statistics";
import Profile from "@/components/Dashboard/Profile";
import TopNavigation from "@/components/Navigation/TopNavigation";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Dashboard",
  components: {
    TopNavigation,
    Statistics,
    Profile,
    WebApp,
  },
  data() {
    return {
      component: "Statistics",
      chat: false,
    };
  },
  methods: {
    ...mapActions(["getUserInfo"]),
    setComponent: function (component) {
      this.component = component;
    },
  },
  created() {
    this.getUserInfo();
  },
  computed: {
    ...mapGetters(["users"]),
  },
};
</script>

<style>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media only screen and (max-width: 768px) {
}
</style>