import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
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
