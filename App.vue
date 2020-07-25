<template>
  <div>
    <NavBar />
    <router-view></router-view>
    <div>
      <div class="cart">
        <p>Cart({{ cart.length }})</p>
        <router-link to="/home">Home</router-link>
      </div>
      <Product :premium="premium" @add-to-cart="updateCart"></Product>
    </div>
  </div>
</template>

<script>
import Product from "./components/Product.vue";
import NavBar from "./components/NavBar.vue";
export default {
  data() {
    return {
      premium: true,
      cart: [],
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
  },
  components: {
    Product,
    NavBar,
  },
};
</script>
