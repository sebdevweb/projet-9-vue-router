<template>
  <Header />
  <div class="container">
    <RouterView />
  </div>
</template>


<script setup>
  import Header from './components/Header.vue';

</script>


<style lang="scss">
  body {
    background: #333;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
    color: #fff;
    .container {
      padding-top: 2rem;
      max-width: calc(100vw - 4rem);
    }
  }
</style>
