<template>
  <div class="error">
    <img src="@/assets/images/error.svg"  class="error-photo img-fluid" />
    <h1 v-if='code'>{{code}}</h1>
    <h1 v-else>{{title}}</h1>
    <h3 v-if='code'>{{title}}</h3>
    <p v-if='desc'>{{desc}}</p>
    <span>Go back to <router-link  :to='{path: link}'> {{linkTitle}} </router-link></span>
    <img src="@/assets/images/logo_125.svg" />
  </div>
</template>

<script>
export default {
  name: "NotFoundError",
  props: ['code', 'title', 'desc','link', 'linkTitle']
};
</script>
