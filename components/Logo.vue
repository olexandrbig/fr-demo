<template>
  <img :src="require(`~/assets/pic/logo.png`)" alt="Company" class="logo">
</template>
<style>
  .logo {
    height: 48px;
    width: auto;
  }
  @media (max-width: 991px) {
    .logo {
      width: auto;
    }
  }
  @media (max-width: 768px) {
    .logo {
      width: 200px;
      height: auto;
    }
  }
</style>
