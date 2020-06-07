<template>
  <div class="tmp">
    <ul class="table" id="team">
      <li
        v-for="n in 8"
        v-bind:key="n"
        v-bind:class="{ selected: n == targetIcon }"
      >
        <teamIcon
          v-bind:hero="selectedHeros[n]"
          v-on:click.native="updateTarget(n)"
        ></teamIcon>
      </li>
    </ul>
    <ul class="table" id="hero">
      <li
        v-for="(hero, heroId) in HeroList"
        v-bind:key="heroId"
        v-bind:class="{ selected: heroId == currentSelectHero }"
      >
        <teamIcon
          v-bind:hero="hero"
          v-on:click.native="updateSelected(heroId)"
        ></teamIcon>
      </li>
    </ul>
    <button v-on:click="updateHeroList">change</button>
  </div>
</template>

<script>
import teamIcon from "./teamIcon.vue";
import heros from "./heros.json";
var HeroList = JSON.parse(JSON.stringify(heros));
delete HeroList["default"];

module.exports = {
  components: { teamIcon },
  data: function() {
    return {
      HeroList,
      selectedHeros: {
        "1": heros.default,
        "2": heros.default,
        "3": heros.default,
        "4": heros.default,
        "5": heros.default,
        "6": heros.default,
        "7": heros.default,
        "8": heros.default,
      },
      targetIcon: 1,
      currentSelectHero: Object.keys(heros)[1],
    };
  },
  methods: {
    updateTarget: function(key) {
      if (this.targetIcon == key && this.selectedHeros[key]) {
        this.selectedHeros[key] = heros.default;
      }
      this.targetIcon = key;
    },
    updateSelected: function(heroId) {
      this.currentSelectHero = heroId;
      const hero = heros[heroId];

      const currentHero = this.selectedHeros[this.targetIcon];
      const existHeroKey = Object.keys(this.selectedHeros).find(
        (key) => this.selectedHeros[key].name === hero.name
      );
      if (existHeroKey) {
        if (currentHero.name != "null") {
          this.selectedHeros[existHeroKey] = currentHero;
        } else {
          this.selectedHeros[existHeroKey] = heros.default;
        }
      }
      this.selectedHeros[this.targetIcon] = hero;
    },
    updateHeroList: function() {
      if (this.HeroList.goku) {
        this.HeroList = { naruto: heros.naruto };
      } else {
        this.HeroList = HeroList;
      }
    },
  },
};
</script>

<style scoped>
.tmp {
  height: 100%;
  width: 100%;
  max-width: 700px;
  margin: auto;
}
.table {
  float: left;
  width: 50%;
  height: 100%;
  background: #ff9;
  list-style: none;
  padding: 0;
}
.table:after,
.tmp:after {
  content: "";
  display: block;
  clear: both;
}
.table li {
  float: left;
  width: 25%;
  height: 25%;
  outline: 1px solid #000;
}
.table .selected .hello {
  background: #f00;
}
</style>
