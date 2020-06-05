<template>
  <div class="error-wrapper">
    <NotFoundError 
      image="not-found.svg"
      code="404"
      title="Page Not Found"
      link="/"
      linkTitle="Dashboard"
    />
  </div>
</template>

<script>
import NotFoundError from "@/components/Errors/Errors";

export default {
  name: "NotFound",
  components: {
    NotFoundError
  }
};
</script>