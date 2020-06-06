<template>
  <div class="clearfix">
    <ul class="top-nav-left-items">
      <li v-for="item in topNavMenuItem" v-bind:key="item">{{item}}</li>
    </ul>

    <ul class="social-icon-nav">
      <li v-for="icon in socialMedia" v-bind:key="icon.id">
        <a :href="icon.link" target="_blank">
          <i :class="icon.icon"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopNavigation",
  data() {
    return {
      socialMedia: [
        {
          id: 1,
          link: "https://facebook.com/aakritsubedi9",
          icon: "fa fa-facebook"
        },
        {
          id: 2,
          link: "https://twitter.com/SubediAakrit",
          icon: "fa fa-twitter"
        },
        {
          id: 3,
          link: "https://instagram.com/aakrit_subedi",
          icon: "fa fa-instagram"
        },
        {
          id: 4,
          link: "https://linkedin.com/aakritsubedi",
          icon: "fa fa-linkedin"
        }
      ],
      topNavMenuItem: ["BCT Notes", "Engineering Notes"]
    };
  }
};
</script>