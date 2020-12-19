<template>
  <div>
    <h1>WebAPP</h1>
    <hr />
    <h3>
      <i class="fa fa-bell"></i>
      Notice
    </h3>
    <div class="row">
      <div class="col-md-8">
        <ul class="pl-5">
          <li v-for="(notice, key) in notices" :key="key">
            <b>{{notice.title}}</b>
            <p>{{notice.description}}</p>
          </li>
        </ul>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" placeholder="Enter title" v-model="title" />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            class="form-control"
            placeholder="Add description"
            rows="4"
            v-model="description"
          />
        </div>
        <div class="form-group">
          <label for="title">Source</label>
          <input type="text" class="form-control" placeholder="Enter source" v-model="source" />
        </div>
        <div class="form-group">
          <label for="title">External Link</label>
          <input type="text" class="form-control" placeholder="Enter link" v-model="link" />
        </div>
        <div class="form-group">
          <button class="btn btn-success" @click="addNotice">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import NoticeService from "@/Services/Notice";

export default {
  name: "WebApp",
  data() {
    return {
      title: '',
      description: '',
      source: '',
      link: ''
    }
  },
  methods: {
    ...mapActions(["getNotices"]),
    addNotice: async function () {
      let notice = {
        title: this.title,
        description: this.description,
        source: this.source,
        read_more: this.link
      }

      await NoticeService.addNotice(notice);
    }
  },
  async created() {
    await this.getNotices();
  },
  computed: {
    ...mapGetters(["notices"]),
  },
};
</script>