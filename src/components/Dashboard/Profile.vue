<template>
  <div>
    <div class="profile">
      <div class="picture">
        <img :src="users.photo" v-if="users.photo" />
        <i class="fa fa-user" style="font-size: 125px;" v-else></i>
      </div>
      <div class="team-content">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <h3 class="name">{{ users.first_name }} {{ users.last_name }}</h3>
          </li>
          <li class="list-group-item">
            <h4 class="title">
              <a :href="'mailto:'+users.email">{{ users.email }}</a>
            </h4>
          </li>
          <ExtraInfo
            title="address"
            :value="extraInfo.address"
            type="text"
            @update="setValue('address', $event)"
          />
          <ExtraInfo
            :value="extraInfo.semester"
            title="semester"
            type="number"
            @update="setValue('semester', $event)"
          />
          <ExtraInfo
            title="dob"
            :value="extraInfo.dob"
            type="date"
            @update="setValue('dob', $event)"
          />
          <ExtraInfo
            :value="extraInfo.contact_no"
            title="contact no"
            type="text"
            @update="setValue('contact_no', $event)"
          />
          <ExtraInfo
            title="college"
            :value="extraInfo.college"
            type="text"
            @update="setValue('college', $event)"
          />
        </ul>
        <button class="logout-btn" @click="logout">
          <span class="fa fa-unlock-alt"></span>
          Logout
        </button>
      </div>
      <ul class="social">
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import LoginService from "@/Services/Login";
import UserService from "@/Services/User";

import { mapGetters, mapActions } from "vuex";
import ExtraInfo from "@/components/EditableListItem";

export default {
  name: "Profile",
  components: {
    ExtraInfo
  },
  data() {
    return {
      extraInfo: {}
    };
  },
  methods: {
    ...mapActions(["getUserInfo"]),
    logout: function() {
      LoginService.logout();
    },
    setValue: async function(title, e) {
      if (e !== "") {
        e = title === "semester" ? Number(e) : e;
        this.users[title] = e;
        this.$store.commit("setUsers", this.users);
        localStorage.setItem("users", JSON.stringify(this.users));
        this.extraInfo[title] = e;
        await UserService.addProfileInfo(this.extraInfo);
      }
    }
  },
  async created() {
    this.getUserInfo();

    this.extraInfo = {
      users_id: this.users.id,
      address: this.users.address || null,
      dob: this.users.dob || null,
      semester: this.users.semester || null,
      contact_no: this.users.contact_no || null,
      college: this.users.college || null
    };
  },
  computed: {
    ...mapGetters(["users"])
  }
};
</script>