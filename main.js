Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: `
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
        <li v-for="detail in details">
          {{ detail }}
        </li>
      </ul>
      <div
        class="color-box"
        v-for="(variant, index) in variants"
        :style="{backgroundColor: variant.variantColor}"
        :key="variant.variantId"
        @mouseover="updateProduct(index)"
      ></div>
      <button
        v-on:click="addToCart"
        :disabled="count < 1"
        :class="{disabledButton: count < 1}"
      >
        Add to Cart
      </button>
    <div>
      <h2> Reviews </h2>
      <p v-if="reviews.length < 1">No Reviews Submitted</p>
      <ul v-else>
        <li v-for="review in reviews">{{ review }}</li>
      </ul>
    </div>
    </div>
    <product-review @review-submitted="addReview"></product-review>
  </div>
  `,
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
    addToCart: function () {
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
      if (this.premium) {
        return "Free";
      } else {
        return 2.99;
      }
    },
  },
});

Vue.component("product-review", {
  template: `
  <form class="review-form" @submit.prevent="onSubmit">
    <p v-if="errors.length > 1">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </p>
    <p>
      <label for="name">Name:</label>
      <input id="name" v-model="name" placeholder="name">
    </p>
    
    <p>
      <label for="review">Review:</label>      
      <textarea id="review" v-model="review"></textarea>
    </p>
    
    <p>
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    </p>
        
    <p>
      <input type="submit" value="Submit">  
    </p>    

  </form>
  `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      errors: [],
    };
  },
  methods: {
    onSubmit() {
      if (this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          timestamp: Date.now(),
        };

        this.$emit("review-submitted", productReview);

        this.name = null;
        this.review = null;
        this.rating = null;
      } else {
        if (!this.name) this.errors.push("Name is required!");
        if (!this.review) this.errors.push("Review required!");
        if (!this.rating) this.errors.push("Rating is required.");
      }
    },
  },
});

var app = new Vue({
  el: "#app",
  data: {
    premium: true,
    cart: [],
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
  },
});
