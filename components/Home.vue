<template>
  <div>
    <h1>This is the home page!</h1>
    <p>{{ this.$store.state.coinData }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.$store.state.coinData = response));
  },
};
</script>
