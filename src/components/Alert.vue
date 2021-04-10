<template>
  <div ref="alert">
    <div :class="alert.status === 1 ? 'alert success' : 'alert danger'">
      <span class="alert-title">{{ alert.title }}</span>
      <div class="alert-divider" />
      <p class="alert-message">
        {{ alert.message }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  data() {
    return {
      duration: 0
    }
  },
  props: ["alert"],
  created() {
    this.duration = Number(this.alert.duration);
    setTimeout(() => {
      this.$refs.alert.parentNode.removeChild(this.$refs.alert.parentNode.lastChild);
    }, Number(this.duration));
  },
};
</script>

<style scoped>
.alert {
  position: absolute;
  bottom: 0;
  right: 0;
}
.alert-title {
  display: block;
  font-weight: bold;
}
.alert-divider {
  height: 5px;
  width: 100%;
  background-color: #2e2e2e;
  margin: 3px 0 10px 0;
}
.alert-message {
  font-size: 14px;
}
.danger {
  background-color: #eb4c3d;
}
.success {
  background-color: #90ee90;
}
</style>