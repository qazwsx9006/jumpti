<template>
  <div class="hero-icon">
    <div class="icon">
      <div class="image">
        <img v-bind:src="hero.imageUrl" alt />
      </div>
      <span class="color" v-bind:class="hero.color"></span>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: { hero: Object }
};
</script>

<style scoped>
.hero-icon {
  width: 100%;
  padding-top: 100%;
  position: relative;
}
.icon {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}
.image img {
  width: 100%;
}
.color {
  position: absolute;
  width: 25%;
  padding-top: 25%;
  border-radius: 50%;
  left: 2px;
  bottom: 2px;
  box-shadow: 0 0 3px #666;
}
.color.yellow {
  background: #ff0;
}
.color.green {
  background: #0f0;
}
.color.red {
  background: #f00;
}
.color.blue {
  background: #00f;
}
</style>
