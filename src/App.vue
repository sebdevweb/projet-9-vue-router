<template>
  <Header />
  <div class="container">
    <ContactPage v-if="page === 'contact'" />
    <BlogPage v-else-if="page === 'blog'" />
    <HomePage v-else-if="page === ''" />
    <SinglePage v-else-if="page === 'post'" :id="param" />
    <NotFoundPage v-else />
  </div>
</template>


<script setup>
  import Header from './components/Header.vue';
  import BlogPage from './pages/BlogPage.vue';
  import ContactPage from './pages/ContactPage.vue';
  import HomePage from './pages/HomePage.vue';
  import NotFoundPage from './pages/NotFoundPage.vue';
  import SinglePage from './pages/SinglePage.vue';
  import { usePage } from './composable/usePage.js'

  const { page, param } = usePage()


</script>


<style lang="scss">
  body {
    background: #333;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
    color: #fff;
  }
</style>
