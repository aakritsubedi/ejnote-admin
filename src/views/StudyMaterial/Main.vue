<template>
  <div>
    <TopNavigation />
    <MainNavigation />
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-6">
          <h3>Study Materials</h3>
          <span>Total no. of study materials: {{allMaterials.length}}</span>
        </div>
        <div class="col-md-6">
          <input type="text" class="form-control" v-model="search" placeholder="Search by title" />
        </div>
      </div>

      <b-table
        bordered
        class="mt-4"
        sort-icon-left
        responsive
        id="my-table"
        :fields="fields"
        :items="filteredMaterials"
        :per-page="perPage"
        :current-page="currentPage"
      >
        <template v-slot:cell(status)="data">
          <span v-if="data.item.status===1" class="status-dot status-active" title="Acitve"></span>
          <div v-else class="status-dot status-inactive" title="Inactive"></div>
        </template>
        <template v-slot:cell(link)="data">
          <div v-if="data.item.link.length !== 0">
            <ul class="study-links">
              <li v-for="(link, key) in data.item.link" :key="key">
                <span v-if="link.type==='external'">
                  <i class="fa fa-link"></i>
                  <a :href="link.external_link">{{link.external_link}}</a>
                </span>
                <span v-else>
                  <i class="fa fa-book"></i>
                  <a :href="'http://localhost:3000/'+link.external_link">{{link.external_link | trimFileName}}</a> - ({{link.size | MBConversion }} MB)
                </span>
              </li>
            </ul>
          </div>
          <span v-else> - </span>
        </template>
        <template v-slot:cell(Options)="data">
          <router-link :to="{ name: 'viewStudyMaterial', params: { id: data.item.id }}">
            <i class="fa fa-eye"></i>
          </router-link>|
          <i class="fa fa-edit"></i> |
          <i class="fa fa-trash"></i>
        </template>
      </b-table>
      <b-pagination
        class="float-right"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import TopNavigation from "@/components/Navigation/TopNavigation";
import MainNavigation from "@/components/Navigation/MainNavigation";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Users",
  components: {
    TopNavigation,
    MainNavigation
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      fields: [
        { key: "id", sortable: true, tdClass: "text-center" },
        { key: "title", sortable: true },
        { key: "link", label: "Items" },
        { key: "status", sortable: false, tdClass: "text-center" },
        { key: "semester", sortable: true, tdClass: "text-center"},
        { key: "Options" }
      ],
      search: ""
    };
  },
  methods: {
    ...mapActions(["getAllStudyMaterial"]),
    userType: value => {
      return value === 1 ? "Admin" : "Student";
    }
  },
  created() {
    this.getAllStudyMaterial();
  },
  computed: {
    ...mapGetters(["allMaterials"]),
    filteredMaterials: function() {
      return this.allMaterials.filter(material => {
        let title = material.title.toLowerCase();
        let keyword = this.search.toLowerCase();
        return title.match(keyword);
      });
    },
    rows: function() {
      return this.filteredMaterials.length;
    }
  },
  filters: {
    trimFileName: value => {
      return value.split("Z_")[1];
    },
    MBConversion: value => {
      return parseFloat((value/(1024*1024)).toFixed(3))
    }
  }
};
</script>

<style>
.status-dot {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  display: inline-block;
  border: 1px solid #2c2c2c;
}
.status-active {
  background-color: green;
}
.status-inactive {
  background-color: red;
}
</style>