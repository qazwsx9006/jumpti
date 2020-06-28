<template>
  <div class="tmp">
    <ul class="table" id="hero">
      <li
        v-for="(hero, heroId) in HeroList"
        v-bind:key="heroId"
        v-bind:class="{ selected: heroId == currentSelectHero }"
      >
        <teamIcon v-bind:hero="hero" v-on:click.native="updateSelected(heroId)"></teamIcon>
      </li>
    </ul>
    <ul class="table" id="team">
      <li v-for="n in 16" v-bind:key="n" v-bind:class="{ selected: n == targetIcon }">
        <teamIcon v-bind:hero="selectedHeros[n]" v-on:click.native="updateTarget(n)"></teamIcon>
      </li>
    </ul>
    <ul class="table" id="info">
      <li>
        <heroInfo v-bind:heroInfo="currentHeroInfo"></heroInfo>
      </li>
    </ul>
    <!-- <button v-on:click="updateHeroList">change</button> -->
  </div>
</template>

<script>
import teamIcon from "./team-icon.vue";
import heroInfo from "./hero-info.vue";
import heros from "./heros.json";
var HeroList = JSON.parse(JSON.stringify(heros));
delete HeroList["default"];

module.exports = {
  components: { teamIcon, heroInfo },
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
        "9": heros.default,
        "10": heros.default,
        "11": heros.default,
        "12": heros.default,
        "13": heros.default,
        "14": heros.default,
        "15": heros.default,
        "16": heros.default
      },
      targetIcon: 1,
      currentSelectHero: Object.keys(heros)[1],
      currentHeroInfo: heros.default
    };
  },
  methods: {
    updateTarget: function(key) {
      if (this.targetIcon == key && this.selectedHeros[key]) {
        this.selectedHeros[key] = heros.default;
      } else {
        this.currentHeroInfo = this.selectedHeros[key];
      }
      this.targetIcon = key;
    },
    updateSelected: function(heroId) {
      this.currentSelectHero = heroId;
      const hero = heros[heroId];
      this.currentHeroInfo = hero;

      const currentHero = this.selectedHeros[this.targetIcon];
      const existHeroKey = Object.keys(this.selectedHeros).find(
        key => this.selectedHeros[key].name === hero.name
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
    }
  }
};
</script>

<style scoped>
.tmp {
  height: 100%;
  width: 100%;
  max-width: 1280px;
  margin: auto;
}
.table {
  float: left;
  width: 33.333%;
  height: 100%;
  background: url("../public/images/bg.jpg");
  list-style: none;
  padding: 3px;
  box-sizing: border-box;
  overflow: auto;
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
  padding: 1px;
  box-sizing: border-box;
}

#team {
  box-shadow: 0 0 10px #666;
  z-index: 1;
}

#team .selected {
  background: rgba(180, 125, 0, 0.5);
}

#info li {
  width: 100%;
  height: 100%;
}
</style>
