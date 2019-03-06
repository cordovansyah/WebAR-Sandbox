<template>
  <transition name="slide-in-left" enter-active-class="animated slideInLeft">
    <div
      v-show="show"
      class="profilepage"
      :class="{'light-request' : isDarkMode, 'dark-request' : !isDarkMode}"
    >Developed by
      <router-link to="/myprofile">Cordova Putra Handri Ansyah</router-link>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.show = true;
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style scoped lang="scss">
.profilepage {
  position: absolute;
  bottom: -150px;
  left: 750px;
}
.light-request {
  color: rgba(255, 255, 255, 0.3);
  a {
    color: white;
  }
}
.dark-request {
  color: rgba(0, 0, 0, 0.3);
  a {
    color: $black;
  }
}
</style>