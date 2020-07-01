<template>
  <div>
    <TopNavigation />
    <MainNavigation />
    <div class="container-fluid profile-body">
      <div class="row mt-4">
        <div class="col-md-3">
          <UserProfileCard :user="userById" />
        </div>
        <div class="col-md-9">
          <h3>{{ userById.first_name }}'s Uploads</h3>
          <Timeline :myUploads="uploaderMaterials" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Timeline from "@/components/Timeline/Timeline";
import TopNavigation from "@/components/Navigation/TopNavigation";
import MainNavigation from "@/components/Navigation/MainNavigation";
import UserProfileCard from "@/components/Card/UserProfileCard";
import Footer from "@/components/Footer/Footer";

export default {
  name: "ShowUser",
  components: {
    TopNavigation,
    MainNavigation,
    UserProfileCard,
    Timeline,
    Footer
  },
  methods: {
    ...mapActions(["getUserById", "getUploaderMaterials"])
  },
  created() {
    this.getUserById(this.id);
    this.getUploaderMaterials(this.id);
  },
  computed: {
    ...mapGetters(["userById", "uploaderMaterials"])
  },
  data() {
    return {
      id: this.$route.params.id
    };
  }
};
</script>

<style scoped>
  .profile-body {
    min-height: 70vh;
  }
</style>