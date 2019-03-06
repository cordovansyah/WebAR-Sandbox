<template>
  <div class="container">
    <Sidebar/>
    <header>
      <h2>AR Sandbox</h2>

      <router-link to="/furniture">
        <h2 id="sections">Furniture</h2>
      </router-link>
      <router-link to="/furniture">
        <h2 id="sections">Vehicles</h2>
      </router-link>
      <router-link to="/furniture">
        <h2 id="sections">Architecture</h2>
      </router-link>
      <router-link to="/editor">
        <h2 id="sections">360</h2>
      </router-link>
    </header>

    <Cards/>
    <Profile class="author"/>
  </div>
</template>

<script>
import Profile from "@/components/Sandbox/Profile";
import Cards from "@/components/Sandbox/Cards";
import Sidebar from "@/components/Sandbox/Sidebar";
// import Dropdown from "@/components/Dropdown.vue";
export default {
  name: "ARSandbox",
  components: {
    Profile,
    Cards
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  position: relative;
}

header {
  display: flex;
}

h2 {
  @include heading-2;
  color: black;
  margin-left: 10vh;
  /* position: relative; */
}
.author {
  margin-bottom: 50px;
}

.price-tag {
  color: blue;
  font-size: 40px;
  margin-left: 30px;
  position: absolute;
}

.object-text {
  color: $dark-gray;
  font-weight: 400;
}
#sections {
  @include heading-3;
  color: black;
  margin-left: 30px;
  position: relative;
  left: 50vh;
  top: 55px;
  &:hover {
    color: blue;
  }
  /* position: relative; */
}
#author {
  @include heading-4;
  color: black;
  position: relative;
  left: -350px;
  top: 120px;
  &:hover {
    color: blue;
    cursor: pointer;
  }
}

p {
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  margin-left: 16px;
  margin-top: 0;
}
</style>