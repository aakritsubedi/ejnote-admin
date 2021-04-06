<template>
  <div class="card mx-sm-1 p-3 my-card" >
    <div class="card shadow p-3 my-card-icon">
      <span :class="icon" aria-hidden="true"></span>
    </div>
    <div class="text-center mt-3">
      <h3>{{title}}</h3>
    </div>
    <div class="text-center mt-2">
      <span class='stat-counter' v-if="!subCount">{{count | formatNum }} {{ title }}</span>
      <span class='stat-counter' v-else>{{count | formatNum }} Study Materials and {{subCount | formatNum}} Files Upload</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatisticsCard",
  props: ['icon', 'title', 'count', 'subCount'],
  filters: {
    formatNum: function(value) {
      return value ? value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") : 0;
    }
  }
};
</script>

<style scoped>
.my-card {
  margin: 20px 0 10px 0;
}
.my-card-icon {
  position: absolute;
  align-content: center;
  top: -20px;
  border-radius: 50%;
  font-size: 14px;
}
.stat-counter {
  font-size: 18px;
}
</style>