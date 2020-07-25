import Vue from "vue";

import store from "./utils/store";
import router from "./utils/routes";
import App from "./App.vue";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
