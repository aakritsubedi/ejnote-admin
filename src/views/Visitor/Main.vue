<template>
  <div>
    <TopNavigation />
    <MainNavigation />
    <div class="count-container">
      <img src="@/assets/images/logo_125.svg" alt />
      <p>This website has been visited</p>
      <animated-number
        class="counter"
        :value="statistics['view_counts']"
        :formatValue="formatValue"
        :duration="duration"
      />
      <p>Total no. of users: {{statistics['users']}}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AnimatedNumber from "animated-number-vue";
import TopNavigation from "@/components/Navigation/TopNavigation";
import MainNavigation from "@/components/Navigation/MainNavigation";

export default {
  name: "Visitor",
  components: {
    AnimatedNumber,
    TopNavigation,
    MainNavigation
  },
  methods: {
    ...mapActions(["getStatistics"]),
    formatValue: value => {
      return `${Number(value).toFixed(0)}`;
    }
  },
  data() {
    return {
      duration: 3000
    };
  },
  created() {
    this.getStatistics();
  },
  computed: {
    ...mapGetters(["statistics"])
  }
};
</script>

<style>
.count-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.counter {
  font-size: 60px;
}
</style>