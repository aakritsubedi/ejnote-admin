<template>
  <div class="dashboard-wrapper clearfix">
    <div class="sidebar">
      <div class="company-title">
        <span class="sidebar-title" @click="() => setComponent('AboutUs')">
          <i class="icon fa fa-book"></i> BCT Notes
        </span>
      </div>
      <ul class="menu">
        <li @click="() => setComponent('Search')" :class="component == 'Search' ? 'active':''">
          <i class="fa fa-search"></i>
          <span class="menu-title">Search</span>
        </li>
        <li @click="() => setComponent('SemesterMenu')" :class="component == 'SemesterMenu' ? 'active':''">
          <i class="fa fa-dashboard"></i>
          <span class="menu-title">Dashboard</span>
        </li>
        <!-- <li class="tablet-off">
          <i class="fa fa-wechat"></i>
          <span class="menu-title">Discussion</span>
        </li> -->
        <li @click="() => setComponent('Syllabus')" :class="component == 'Syllabus' ? 'active':''">
          <i class="fa fa-book"></i>
          <span class="menu-title">Syllabus</span>
        </li>
        <li @click="() => setComponent('ShareResource')" :class="component == 'ShareResource' ? 'active':''">
          <i class="fa fa-share-alt"></i>
          <span class="menu-title">Share</span>
        </li>
        <li @click="() => setComponent('Profile')" :class="component == 'Profile' ? 'active':''">
          <img :src="users.photo" />
          <span class="menu-username">{{ users.first_name }} {{ users.last_name}}</span>
        </li>
      </ul>
    </div>
    <div class="display-area container-fluid">
      <!-- <TopNavigation /> -->
      <transition name="component-fade" mode="out-in">
        <component :is="component" class="pb-75"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";


import { mapGetters, mapActions } from "vuex";

export default {
  name: "Dashboard",
  components: {
    HelloWorld
  },
  data() {
    return {
      component: "HelloWorld"
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
</style>