<template>
  <div class="container">
    <header>
      <img class="profile-picture" src="@/assets/Profile/cordova.png">
      <p class="profile-name">Cordova Putra Handri Ansyah</p>
      <div class="description">
        <p class="profile-description-text">Cordova is a User Experience Engineer</p>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Profilepage",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style scoped lang="scss" >
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 20vh;
}
.profile-picture {
  width: 200px;
  height: 200px;
  position: relative;
  margin-top: 10px;
}
.profile-name {
  color: $dark-gray;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>