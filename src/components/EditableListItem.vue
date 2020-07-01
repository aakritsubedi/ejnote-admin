<template>
  <li class="list-group-item"> 
    <div v-if="edit" class="d-inline">
      <input :type="type" class="pl-2" :value="value" v-model="data" :placeholder="`Add your ${title}`" min="1" max="8">
      <i class="fa fa-check float-right" @click="edit = !edit, $emit('update',data)"></i>
    </div>
    <div v-else class="d-inline" @click="edit = !edit">
      <span class="text-capitalize">{{title}}: </span>
      <span class="profile-text">{{ value | addPlaceholder(this.title) | mapSemester }}</span>
      <i class="fa fa-pencil float-right"></i>
    </div>
  </li>
</template>

<script>
import { semesterMappings } from "@/constants/semesterMappings";

export default {
  name: 'EditableListItem',
  props: ['title' ,'value', 'type'],
  data() {
    return {
      edit: false,
      data: this.value
    }
  },
  filters: {
    addPlaceholder: (value, title) => {
      return value ? value : `Add your ${title}`;
    },
    mapSemester: value => { 
      return typeof value === 'number' ? semesterMappings[value] + ' Semester' : value;
    }
  }
}
</script>