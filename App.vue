<template>
  <div>
    <div class="cart">
      <p>Cart({{ cart.length }})</p>
    </div>
    <Product :premium="premium" @add-to-cart="updateCart"></Product>
  </div>
</template>

<script>
import Product from "./components/Product.vue";
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
  },
};
</script>
