<template>
  <div>
    <TopNavigation />
    <MainNavigation />
    <div class="container-fluid">
      <br>
      <div class="ribbon-wrapper">
        <div class="glow">&nbsp;</div>
        <div class="ribbon-front">{{materialById.semester | mapSemester }}</div>
        <div class="ribbon-edge-topleft"></div>
        <div class="ribbon-edge-topright"></div>
        <div class="ribbon-edge-bottomleft"></div>
        <div class="ribbon-edge-bottomright"></div>
      </div>
      <span class="float-right xl">{{materialById.created_at}}</span>
      <br>
      <h3>Subject Code: {{materialById.subject_code}} <br/><br/> {{materialById.title}}</h3>
      <p style="text-indent: 50px;">{{materialById.description}}</p>
      <div v-if="materialById.link">
        <table class="table">
          <tr v-for="(link, key) in materialById.link" :key="key">
            <td v-if="link.type==='external'">
              <i class="fa fa-link"></i>
              <a :href="link.external_link">{{link.external_link}}</a>
            </td>
            <td v-else>
              <i class="fa fa-book"></i>
              <a
                :href="'http://localhost:3000/'+link.external_link"
              >{{link.external_link | trimFileName}}</a>
              - ({{link.size | MBConversion }} MB)
            </td>
          </tr>
        </table>
        <button class="btn btn-success">Approve</button>
        <button class="btn btn-danger">Delete</button>
      </div>
      <span v-else>-</span>
    </div>
  </div>
</template>

<script>
import TopNavigation from "@/components/Navigation/TopNavigation";
import MainNavigation from "@/components/Navigation/MainNavigation";
import { mapGetters, mapActions } from "vuex";

import { semesterMappings } from "@/constants/semesterMappings";

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
    ...mapActions(["getStudyMaterialById"])
  },
  created() {
    this.getStudyMaterialById(this.id);
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
    }
  }
};
</script>
