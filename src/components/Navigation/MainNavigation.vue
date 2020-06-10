<template>
  <div class="main-navigation">
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
}
.logo {
  margin-top: -25px;
}
</style>