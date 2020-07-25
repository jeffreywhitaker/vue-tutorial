<template>
  <div>
    <NavBar />
    <router-view @add-to-cart="updateCart"></router-view>
  </div>
</template>

<script>
import Product from "./components/Product.vue";
import NavBar from "./components/NavBar.vue";
export default {
  // data() {
  //   return {
  //     premium: true,
  //     cart: [],
  //   };
  // },
  methods: {
    // updateCart(id) {
    //   this.cart.push(id);
    // },
    updateCart(id) {
      this.$store.commit("addToCartMutation", { id: id });
    },
  },
  components: {
    Product,
    NavBar,
  },
};
</script>
