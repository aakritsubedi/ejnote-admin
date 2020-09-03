<template>
  <div>
    <TopNavigation />
    <MainNavigation />
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-6">
          <h3>Users</h3>
          <span>Total no. of users: {{allUsers.length}}</span>
        </div>
        <div class="col-md-6">
          <input type="text" class="form-control" v-model="search" placeholder="Search by Name" />
        </div>
      </div>

      <b-table
        bordered
        class="mt-4"
        sort-icon-left
        responsive
        id="my-table"
        :fields="fields"
        :items="filteredUser"
        :per-page="perPage"
        :current-page="currentPage"
      > 
        <template v-slot:cell(email)="data">
          <a :href="'mailto:'+data.item.email">{{data.item.email}}</a>
        </template>
        <template v-slot:cell(status)="data">
          <span v-if="data.item.status===1" class="status-dot status-active" title="Acitve"></span>
          <div v-else class="status-dot status-inactive" title="Inactive"></div>
        </template>
        <template v-slot:cell(isAdmin)="data">
          <span v-if="data.item.isAdmin===1" class="btn btn-sm btn-success">Admin</span>
          <span v-else class="btn btn-sm btn-warning">Student</span>
        </template>
        <template v-slot:cell(Options)="data">
          
          <router-link :to="{ name: 'viewUser', params: { id: data.item.id }}"><i class="fa fa-eye"></i></router-link> | 
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
        { key: "name", sortable: true },
        { key: "email", sortable: true },
        { key: "status", sortable: false, tdClass: "text-center" },
        { key: "login_count", sortable: true, tdClass: "text-center"},
        { key: "updated_at", label: 'Last Login', sortable: false, tdClass: "text-center", formatter: this.formatDate },
        { key: "isAdmin", sortable: false, label: "User Type" },
        { key: "created_at", sortable: false, formatter: this.formatDate },
        { key: "Options" }
      ],
      search: ""
    };
  },
  methods: {
    ...mapActions(["getAllUsers"]),
    userType: value => {
      return value === 1 ? "Admin" : "Student";
    },
    formatDate: value => {
      const option = { year: "numeric", month: "short", day: "2-digit" };
      const newDate = new Intl.DateTimeFormat("en", option).format(
        new Date(value)
      );
      return newDate;
    }
  },
  created() {
    this.getAllUsers();
  },
  computed: {
    ...mapGetters(["allUsers"]),
    filteredUser: function() {
      return this.allUsers.filter(user => {
        let name = user.name.toLowerCase();
        let keyword = this.search.toLowerCase();
        return name.match(keyword);
      });
    },
    rows: function() {
      return this.filteredUser.length;
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