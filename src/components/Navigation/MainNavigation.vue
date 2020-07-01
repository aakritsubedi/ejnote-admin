<template>
  <div class="main-navigation">
    <a class="back-btn" @click="$router.go(-1)">
      <i aria-hidden="true" class="fa fa-chevron-left"></i>
      Back
    </a>
    <img src="@/assets/images/logo_125.svg" alt class="logo" />
  </div>
</template>

<script>
export default {
  name: "MainNavigation"
};
</script>

<style scoped>
.main-navigation {
  height: 125px;
  background: linear-gradient(to bottom, #42a2a2 0%, #22a9a9 100%);
  text-align: center;
  position: relative;
}
.logo {
  margin-top: -25px;
}
.back-btn {
  position: absolute;
  top: 2px;
  left: 16px;
  font-size: 14px;
  text-transform: uppercase;
}
</style>