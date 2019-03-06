<template>
  <div id="sidebar">
    <div class="container">
      <div class="left-pane"></div>
      <div class="right-pane"></div>
    </div>
    <div class="action-btn">+</div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped style="scss">
body {
  margin: 0;
  padding: 0;
}
.container {
  height: 600px;
}
.left-pane {
  display: inline-block;
  background-color: #307490;
  width: 30%;
  height: 600px; /* should match containers height */
}
.right-pane {
  display: inline-block;
  width: 70%;
  height: 100%;
  height: 600px; /* should match containers height */

  background-image: url("https://placeimg.com/1000/600/nature");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
</style>