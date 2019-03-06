<template>
  <div class="cards">
    <transition appear appear-active-class="animated flipInX">
      <a class="card card-1" :class="{'light-card': !isDarkMode, 'dark-card': isDarkMode}">
        <div class="price-tag">
          <h2 id="price-amt">$0.5</h2>
        </div>
        <a href="@/assets/orange.usdz" rel="ar">
          <img src="@/assets/orange.jpg" class="card-header">
        </a>
        <h3 class="object-text">Orange</h3>
        <!-- <p :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Test description</p> -->
      </a>
    </transition>
    <transition appear appear-active-class="animated flipInX">
      <a class="card card-2" :class="{'light-card': !isDarkMode, 'dark-card': isDarkMode}">
        <div class="price-tag">
          <h2 id="price-amt">$0.5</h2>
        </div>
        <img src="@/assets/burger.png" class="card-header">
        <!-- <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Burger</h3> -->
        <h3 class="object-text">Burger</h3>
      </a>
    </transition>
    <transition appear appear-active-class="animated flipInX">
      <a class="card card-3" :class="{'light-card': !isDarkMode, 'dark-card': isDarkMode}">
        <div class="price-tag">
          <h2 id="price-amt">$0.5</h2>
        </div>
        <img src="@/assets/ramen.png" class="card-header">
        <!-- <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Ramen</h3> -->
        <h3 class="object-text">Ramen</h3>
      </a>
    </transition>
    <transition appear appear-active-class="animated flipInX">
      <a class="card card-4" :class="{'light-card': !isDarkMode, 'dark-card': isDarkMode}">
        <div class="price-tag">
          <h2 id="price-amt">$0.5</h2>
        </div>
        <img src="@/assets/icecream.png" class="card-header">
        <!-- <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Ice Cream</h3> -->
        <h3 class="object-text">Ice Cream</h3>
      </a>
    </transition>
    <transition appear appear-active-class="animated flipInX">
      <a class="card card-5" :class="{'light-card': !isDarkMode, 'dark-card': isDarkMode}">
        <div class="price-tag">
          <h2 id="price-amt">$0.5</h2>
        </div>
        <img src="@/assets/juice.png" class="card-header">
        <!-- <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Juice</h3> -->
        <h3 class="object-text">Juice</h3>
      </a>
    </transition>
    <transition appear appear-active-class="animated flipInX">
      <a class="card card-6" :class="{'light-card': !isDarkMode, 'dark-card': isDarkMode}">
        <div class="price-tag">
          <h2 id="price-amt">$0.5</h2>
        </div>
        <img src="@/assets/orange.png" class="card-header">
        <!-- <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Orange</h3> -->
        <h3 class="object-text">Orange</h3>
      </a>
    </transition>
    <transition appear appear-active-class="animated flipInX">
      <a class="card card-7" :class="{'light-card': !isDarkMode, 'dark-card': isDarkMode}">
        <div class="price-tag">
          <h2 id="price-amt">$0.5</h2>
        </div>
        <img src="@/assets/pie.png" class="card-header">
        <!-- <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Pie</h3> -->
        <h3 class="object-text">Pie</h3>
      </a>
    </transition>
    <transition appear appear-active-class="animated flipInX">
      <a class="card card-8" :class="{'light-card': !isDarkMode, 'dark-card': isDarkMode}">
        <div class="price-tag">
          <h2 id="price-amt">$0.5</h2>
        </div>
        <img src="@/assets/tomato.png" class="card-header">
        <!-- <h3 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Tomato</h3> -->
        <h3 class="object-text">Tomato</h3>
      </a>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Cards",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style scoped lang="scss">
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 10vh;
  align-items: space-evenly;
}

.card {
  width: 100%;
  max-width: 300px;
  height: 400px;
  border-radius: 10px;
  margin: 20px;

  &:hover {
    box-shadow: 20px 20px 40px 0px rgba(0, 0, 0, 0.5);
    transition: height 0.3s, opacity 0.3s;
  }
}
.card-1 {
  animation-delay: 0s;
}
.card-2 {
  animation-delay: 0.5s;
}
.card-3 {
  animation-delay: 1s;
}
.card-4 {
  animation-delay: 1.5s;
}
.card-5 {
  animation-delay: 2s;
}
.card-6 {
  animation-delay: 2.5s;
}
.card-7 {
  animation-delay: 3s;
}
.card-8 {
  animation-delay: 3.5s;
}

.card-header {
  width: 100%;
  border-radius: 10px 10px 0 0;
  background-color: #f9f9f9;
}

h3 {
  @include heading-3;
}

.light-header {
  background: $light-gray;
}
.dark-header {
  background: #283049;
}
.light-card {
  background: $white;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  &:hover {
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.35);
  }
}
.dark-card {
  background: $super-dark-blue;
  box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(255, 255, 255, 0.35);
  }
}
.price-tag {
  color: $dark-gray;
  background-color: white;
  font-size: 40px;
  border-radius: 100px;
  width: 100%;
  max-width: 120px;
  height: 45px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.09);
  margin: 10px -20px;
  position: absolute;

  #price-amt {
    font-size: 20px;
    position: relative;
    bottom: 6px;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
}

.object-text {
  color: $dark-gray;
  font-weight: 400;
}
</style>