<template>
  <div class="dashboard-wrapper clearfix">
    <div class="sidebar">
      <div class="company-title">
        <span class="sidebar-title" @click="() => setComponent('AboutUs')">
          <i class="icon fa fa-book"></i> BCT Notes
        </span>
      </div>
      <ul class="menu">
        <li @click="() => setComponent('Statistics')" :class="component == 'Statistics' ? 'active':''">
          <i class="fa fa-dashboard"></i>
          <span class="menu-title">Dashboard</span>
        </li>
        <li @click="() => setComponent('WebApp')" :class="component == 'WebApp' ? 'active':''">
          <i class="fa fa-desktop"></i>
          <span class="menu-title">Web App</span>
        </li>
        <li @click="() => setComponent('Profile')" :class="component == 'Profile' ? 'active':''">
          <img :src="users.photo" />
          <span class="menu-username">{{ users.first_name }} {{ users.last_name}}</span>
        </li>
      </ul>
    </div>
    <div class="display-area container-fluid">
      <TopNavigation />
      <transition name="component-fade" mode="out-in">
        <component :is="component" class="pb-75"></component>
      </transition>
      <div class="chat" @click="chat = !chat">
        <i class="fa fa-user-o"></i>
      </div>
      <div class="chat-box" :class="chat ? 'active-chat': '' ">
        <img :src="users.photo" />
        <span class="menu-username">{{ users.first_name }} {{ users.last_name}}</span>
        <span class="menu-email"> {{ users.email }}</span>
      </div>
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
    WebApp
  },
  data() {
    return {
      component: "Statistics",
      chat: false
    };
  },
  methods: {
    ...mapActions(["getUserInfo"]),
    setComponent: function(component) {
      this.component = component;
    }
  },
  created() {
    this.getUserInfo();
  },
  computed: {
    ...mapGetters(["users"])
  }
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
/* Chat */
.chat {
  height: 60px;
  width: 60px;
  background-color: #2c2c2c;
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: #ffffff;
  font-size: 35px;
  text-align: center;
  border-radius: 50%;
}
.chat-box {
  width: 250px;
  height: 0px;
  background-color: #2c2c2c;
  position: absolute;
  bottom: 70px;
  right: 40px;
  display: none;
  transition: all 5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

.active-chat {
  height: 400px;
  display: block;
}
@media only screen and (max-width: 768px) {
  .chat, .chat-box {
    display: none;
  }
}
</style>