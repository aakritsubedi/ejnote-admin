<template>
  <div class="page">
    <div class="timeline" v-if="Object.keys(myUploads).length > 0">
      <div class="timeline__group" v-for="(upload, key) in myUploads" :key="key">
        <span class="timeline__year">{{upload[0].semester | mapSemester }}</span>
        <div class="timeline__box" v-for="(item, key) in upload" :key="key">
          <div class="timeline__date">
            <span class="timeline__day">{{item.subject_code}}</span>
            <span class="timeline__month">{{ item.created_at | formatDate }}</span>
          </div>
          <div class="timeline__post">
            <div class="timeline__content">
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
              <table class="table" v-if="item.link.length > 0">
                <tr>
                  <td>
                    <ul class="study-links">
                      <li v-for="(link, key) in item.link" :key="key">
                        <span v-if="link.type==='external'">
                          <i class="fa fa-link"></i>
                          <a :href="link.external_link">{{link.external_link}}</a>
                        </span>
                        <span v-else>
                          <i class="fa fa-book"></i>
                          <a
                            :href="'http://localhost:3000/'+link.external_link"
                          >{{link.external_link}}</a>
                        </span>
                      </li>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <span>No record to show.</span>
    </div>
  </div>
</template>

<script>
import { semesterMappings } from "@/constants/semesterMappings";

export default {
  name: "Timeline",
  props: ["myUploads"],
  filters: {
    mapSemester: value => {
      return semesterMappings[value] + " semester";
    },
    formatDate: value => {
      const joinedOn = new Date(value);
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      const month = months[joinedOn.getMonth()];
      const date = joinedOn.getDate();
      const time = date + " " + month;
      return time;
    }
  },
  data() {
    return {
      files: [],
      links: []
    };
  },
  created() {}
};
</script>