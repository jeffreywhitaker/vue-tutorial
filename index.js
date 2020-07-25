import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import App from "./App.vue";

// Vue.config.productionTip = false;
Vue.use(VueRouter);
const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
  // components: {
  //   App,
  // },
}).$mount("#app");
