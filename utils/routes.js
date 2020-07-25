import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/Home.vue";
import Product from "../components/Product.vue";

Vue.use(VueRouter);

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

export default new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  base: "/",
  routes,
});
