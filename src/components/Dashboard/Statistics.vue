<template>
  <div v-if="recentlyJoinedUsers.length">
    <h2>Staticstics</h2>
    <div class="row statistics">
      <div class="col-md-4">
        <router-link :to="{ name: 'users' }">
          <StatisticsCard
            icon="fa fa-user"
            title="Students"
            :count="statistics.users"
            cardImg="@/assets/images/card-users.png"
          />
        </router-link>
      </div>
      <div class="col-md-4">
        <router-link :to="{ name: 'studyMaterial' }">
          <StatisticsCard
            icon="fa fa-book"
            title="Study Materials"
            :subCount="statistics.study_materials_links"
            :count="statistics.study_materials"
          />
        </router-link>
      </div>
      <div class="col-md-4">
        <router-link :to="{ name: 'visitors' }">
          <StatisticsCard
            icon="fa fa-eye"
            title="Views"
            :count="statistics.view_counts"
          />
        </router-link>
      </div>
    </div>
    <h2>Highlights</h2>
    <div class="highlights">
      <ul class="highlights-student">
        <span>- </span>
        <li v-for="user in recentlyJoinedUsers" :key="user.id">
          {{ user.first_name }},
        </li>
        <span>joined recently.</span>
      </ul>
      <ul class="highlights-student">
        <span>- </span>
        <li v-for="sm in recentlyUploadedSM" :key="sm.id">{{ sm.title }},   </li>
        <span>recently uploaded.</span>
      </ul>
      <ul class="highlights-student">
        <span>- </span>
        <li v-for="user in recentlyLoggedInUsers" :key="user.id">{{ user.first_name }},   </li>
        <span>recently logged in.</span>
      </ul>
      <ul class="highlights-student">
        <span>- </span>
        <li>{{ recentlyLoggedInUsers.length }} unique visitor in last 12hrs.</li> 
      </ul>
    </div>
    <hr>
  </div>
</template>

<script>
import StatisticsCard from "@/components/Card/StatisticsCard";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Statistics",
  components: {
    StatisticsCard,
  },
  data() {
    return {
      recentlyJoinedUsers: [],
      recentlyLoggedInUsers: [],
      recentlyUploadedSM: [],
    };
  },
  async created() {
    await this.getAllUsers();
    await this.getAllStudyMaterial();
    this.getStatistics();
    this.newlyJoined();
  },
  computed: {
    ...mapGetters(["statistics", "allUsers", "allMaterials"]),
  },
  methods: {
    ...mapActions(["getStatistics", "getAllUsers", "getAllStudyMaterial"]),
    lastNSecondData(datas, filterBy, seconds = 86400) {
      let recentData = [];
      datas.forEach((data) => {
        const yesterday = new Date().getTime() / 1000 - seconds;
        const joinedOn = new Date(data[filterBy]).getTime() / 1000;
        if (joinedOn >= yesterday) {
          recentData.push(data);
        }
      });
      return recentData.reverse();
    },
    getUserInfo(id){
      return this.allUsers.filter(user => user.id === id)[0];
    },
    newlyJoined() {
      this.recentlyJoinedUsers = this.lastNSecondData(this.allUsers, 'created_at', 86400);
      this.recentlyLoggedInUsers = this.lastNSecondData(this.allUsers, 'updated_at', 43200);
      this.recentlyUploadedSM = this.lastNSecondData(this.allMaterials, 'created_at', 86400);
    },
  },
};
</script>