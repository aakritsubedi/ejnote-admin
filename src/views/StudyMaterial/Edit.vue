<template>
  <div>
    <TopNavigation />
    <MainNavigation />
    <div class="container-fluid mb-4">
      {{materialById}}
      <hr />
      {{materialById.link}}
    </div>
  </div>
</template>

<script>
import TopNavigation from "@/components/Navigation/TopNavigation";
import MainNavigation from "@/components/Navigation/MainNavigation";
import { mapGetters, mapActions } from "vuex";

import { semesterMappings } from "@/constants/semesterMappings";

import StudyMaterialService from "@/Services/StudyMaterials";

export default {
  name: "ShowStudyMaterial",
  components: {
    TopNavigation,
    MainNavigation
  },
  data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {
    ...mapActions(["getStudyMaterialById"]),
    updateStatus: async function() {  
      await StudyMaterialService.toggleStatus(this.id);
      await this.getStudyMaterialById(this.id);
    }
  },
  async created() {
    await this.getStudyMaterialById(this.id);
  },
  computed: {
    ...mapGetters(["materialById"])
  },
  filters: {
    trimFileName: value => {
      return value.split("Z_")[1];
    },
    MBConversion: value => {
      return parseFloat((value / (1024 * 1024)).toFixed(3));
    },
    mapSemester: value => {
      return semesterMappings[value] + " semester";
    },
    status: value => {
      return value ? 'Approved' : 'Draft';
    }
  }
};
</script>
