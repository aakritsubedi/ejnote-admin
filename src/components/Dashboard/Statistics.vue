<template>
  <div>
    <h2>Staticstics</h2>
    <br />
    <div class="row statistics">
      <div class="col-md-3">
        <router-link to="/users">
          <StatisticsCard icon="fa fa-user" title="Users" :count="statistics.users" />
        </router-link>
      </div>
      <div class="col-md-6">
        <router-link to="/study-materials">
          <StatisticsCard
            icon="fa fa-book"
            title="Study Materials"
            :subCount="statistics.study_materials_links"
            :count="statistics.study_materials"
          />
        </router-link>
      </div>
      <div class="col-md-3">
        <router-link to="/visitors">
          <StatisticsCard icon="fa fa-eye" title="Views" :count="statistics.view_counts" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import StatisticsCard from "@/components/Card/StatisticsCard";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Statistics",
  components: {
    StatisticsCard
  },
  methods: {
    ...mapActions(["getStatistics"])
  },
  created() {
    this.getStatistics();
  },
  computed: {
    ...mapGetters(["statistics"])
  }
};
</script>