<template>
  <div>
    <h3>
      <i class="fa fa-bell"></i>
      Notice
    </h3>
    <div class="row">
      <div class="col-md-8">
        <ul class="pl-5">
          <li v-for="(notice, key) in notices" :key="key">
            <small class="d-block text-muted">{{ notice.source }}</small>
            <b>{{ notice.title }}</b>
            <p class="mb-2">
              {{ notice.description }}
              <a :href="notice.read_more" class="d-block text-muted text-sm">
                <small>{{ notice.read_more }}</small>
              </a>
            </p>
          </li>
        </ul>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter title"
            v-model="title"
          />
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
          <input
            type="text"
            class="form-control"
            placeholder="Enter source"
            v-model="source"
          />
        </div>
        <div class="form-group">
          <label for="title">External Link</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter link"
            v-model="link"
          />
        </div>
        <div class="form-group">
          <button class="btn btn-success" @click="submitNotice">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notice",
  props: ["notices", "addNotice"],
  data() {
    return {
      title: "",
      description: "",
      source: "",
      link: "",
    };
  },
  methods: {
    submitNotice() {
      let newNotice = {
        title: this.title,
        description: this.description,
        source: this.source,
        read_more: this.link,
      };

      this.addNotice(newNotice);
      this.title = "";
      this.description = "";
      this.source = "";
      this.link = "";
    },
  },
};
</script>