import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#3f51b5",
        teal_accent_3: "#1DE9B6",
        error: "#b71c1c",
      },
    },
  },
});
