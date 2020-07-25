import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import axios from "axios";

import Home from "./components/Home.vue";
import Product from "./components/Product.vue";
import App from "./App.vue";

// Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cart: [],
    premium: true,
    coinData: {},
  },
  mutations: {
    addToCartMutation(state, itemToAdd) {
      state.cart = [...state.cart, itemToAdd];
      console.log(" updated cart,", state.cart.length);
    },
    getCoinExampleData(state, data) {
      state.coinData = data;
    },
  },
});

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  base: "/",
  routes,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
  // components: {
  //   App,
  // },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.$store.state.coinData = response));
  },
}).$mount("#app");
