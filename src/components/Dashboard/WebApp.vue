<template>
  <div>
    <h1>WebAPP</h1>
    <hr />
    <Notice :notices="notices" :addNotice="addNotice" />
    <Alert :alert="alert" v-if="alert.display" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Alert from "@/components/Alert";

import Notice from "./Notices";

import NoticeService from "@/Services/Notice";

export default {
  name: "WebApp",
  components: { Notice, Alert },
  data() {
    return {
      alert: {
        display: false,
        title: "Hey there",
        message: "hey there!!!",
        status: 1,
        duration: 5000,
      },
    };
  },
  methods: {
    ...mapActions(["getNotices"]),
    addNotice: async function (notice) {
      try {
        await NoticeService.addNotice(notice);
        this.alert = {
          display: true,
          title: "Notice added",
          message: "New notice was added successfully.",
          status: 1,
          duration: 5000,
        };
        this.getNotices();
      } catch (e) {
        console.log("Error sending notice", e);
      }
    },
  },
  async created() {
    await this.getNotices();
  },
  computed: {
    ...mapGetters(["notices"]),
  },
};
</script>