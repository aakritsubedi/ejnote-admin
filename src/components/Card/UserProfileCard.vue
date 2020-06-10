<template>
  <div class="profile-sidebar">
    <div class="profile-photo">
      <img :src="user.photo" :alt="user.first_name" />
    </div>
    <div class="profile-user-info">
      <table class="table">
        <tr>
          <td>Name: {{user.first_name}} {{user.last_name}}</td>
        </tr>
        <tr>
          <td>Google Id: {{user.user_id}}</td>
        </tr>
        <tr>
          <td>
            Email:
            <a :href="'mailto:'+user.email">{{user.email}}</a>
          </td>
        </tr>
        <tr>
          <td>Joined on: {{user.created_at | formatDate}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  props: ["user"],
  filters: {
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
      const year = joinedOn.getFullYear();
      const month = months[joinedOn.getMonth()];
      const date = joinedOn.getDate();
      const time = month + "-" + date + "," + year;
      return time;
    }
  }
};
</script>

<style>
.profile-sidebar {
  position: fixed;
}
.profile-photo {
  margin: 5px auto;
  height: 135px;
  width: 135px;
}
.profile-photo img {
  height: 100%;
  width: 100%;
  border: 8px solid #42a2a2;
  border-radius: 50%;
}
.profile-user-info {
  margin-top: 25px;
}

@media only screen and (max-width: 768px) {
  .profile-sidebar {
    position: relative;
  }
}
</style>