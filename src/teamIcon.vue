<template>
  <div class="hello">{{ hero.name }}</div>
</template>

<script>
module.exports = {
  props: { hero: Object },
};
</script>

<style scoped>
.hello {
  padding: 0.5em;
  font-size: 2em;
  background-color: #fcf;
}
</style>
