import Vue from "vue";
import team from "./team.vue";

new Vue({
  el: "#app",
  mounted: function () {
    console.log("Hello Webpack and Vue !?!");
  },
  data: {
    hero: { name: "default" },
  },
  components: { team },
  // template: "<team/>",
});
