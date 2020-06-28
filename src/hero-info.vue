<template>
  <div class="hero-info" v-if="heroInfo.name.length > 0">
    <h3>{{ heroInfo.name }}</h3>
    <div class="measurements">
      <div class="hp">{{ heroInfo.hp }}</div>
      <div class="attack">{{ heroInfo.attack }}</div>
      <div class="recovery">{{ heroInfo.recovery }}</div>
      <div class="type">{{ heroInfo.type }}</div>
    </div>
    <div data-text="必殺" class="skill">{{ heroInfo.skill }}</div>
    <div data-text="友情" class="skill">{{ heroInfo.friend }}</div>
    <div data-text="特性" class="skill">{{ heroInfo.special }}</div>
  </div>
</template>

<script>
module.exports = {
  props: { heroInfo: Object }
};
</script>

<style scoped>
.hero-info {
  padding: 10px 5px;
  background: rgba(255, 255, 255, 0.6);
}
.hero-info h3 {
  width: 100%;
  text-align: center;
  padding: 3px;
  margin: 0;
}

.hero-info .hp:before {
  content: "血　量：";
  margin-right: 5px;
}

.hero-info .attack:before {
  content: "攻擊力：";
  margin-right: 5px;
}

.hero-info .recovery:before {
  content: "回復力：";
  margin-right: 5px;
}

.hero-info .type:before {
  content: "類型：";
  margin-right: 5px;
}

.hero-info .skill {
  background: #f0f;
  position: relative;
  margin: 3px 0;
  padding: 3px;
}

.hero-info .skill:before {
  content: attr(data-text);
  font-size: 0.8rem;
  display: inline-block;
  padding: 1px 2px;
  background: #fff;
  margin-right: 5px;
}
</style>
