<template>
  <div class="nav-bar">
    <router-link class="link" to="/home">Home</router-link>
    <router-link class="link" to="/product">Product</router-link>
  </div>
</template>

<style scoped>
.link {
  width: 20px;
  padding: 20px 10px;
  text-emphasis: none;
  text-decoration: none;
  color: black;
}

.router-link-active {
  background-color: pink;
}
</style>