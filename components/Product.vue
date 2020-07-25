<template>
  <div>
    <div class="cart">
      <p>Cart({{ cartLength }})</p>
    </div>
    <div class="product">
      <div class="product-image">
        <img :src="image" />
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="count >= 5">In Stock</p>
        <p v-else-if="count < 5">Only {{ count }} more left!</p>
        <p v-else>Sold Out</p>
        <p>Shipping is: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details" :key="detail">{{ detail }}</li>
        </ul>
        <div
          class="color-box"
          v-for="(variant, index) in variants"
          :style="{ backgroundColor: variant.variantColor }"
          :key="variant.variantId"
          @mouseover="updateProduct(index)"
        ></div>
        <button
          v-on:click="addToCart"
          :disabled="count < 1"
          :class="{ disabledButton: count < 1 }"
        >
          Add to Cart
        </button>
        <div>
          <h2>Reviews</h2>
          <p v-if="reviews.length < 1">No Reviews Submitted</p>
          <ul v-else>
            <li v-for="review in reviews" :key="review">{{ review }}</li>
          </ul>
        </div>
      </div>
      <ProductReview @review-submitted="addReview" />
    </div>
  </div>
</template>

<script>
import ProductReview from "./ProductReview.vue";

export default {
  // props: {
  //   premium: {
  //     type: Boolean,
  //     required: true,
  //   },
  //   cart: {
  //     type: Array,
  //     required: true,
  //   },
  // },
  data() {
    return {
      product: "Socks",
      brand: "JeffCo",
      selectedVariant: 0,
      details: ["40% cotton", "looks great", "something someting"],
      variants: [
        {
          variantId: 1,
          variantColor: "green",
          variantImage: "./assets/vmSocks-green-onWhite.jpg",
          variantQuantity: 10,
        },
        {
          variantId: 3,
          variantColor: "blue",
          variantImage: "./assets/vmSocks-blue-onWhite.jpg",
          variantQuantity: 14,
        },
      ],
      reviews: [],
    };
  },
  methods: {
    addToCart: function() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].variantId);
      this.variants[this.selectedVariant].variantQuantity--;
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
    addReview(productReview) {
      this.reviews.push(productReview);
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    count() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping() {
      if (this.$store.premium) {
        return "Free";
      } else {
        return 2.99;
      }
    },
    cartLength() {
      return this.$store.state.cart.length;
    },
  },
  components: {
    ProductReview,
  },
};
</script>
