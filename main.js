var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "./assets/vmSocks-green-onWhite.jpg",
    count: 10,
    details: ["40% cotton", "looks great", "something someting"],
    variants: [
      {
        variantId: 1,
        variantColor: "green",
        variantImage: "./assets/vmSocks-green-onWhite.jpg",
      },
      {
        variantId: 3,
        variantColor: "blue",
        variantImage: "./assets/vmSocks-blue-onWhite.jpg",
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart: function () {
      this.cart++;
      this.count--;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    },
  },
});
