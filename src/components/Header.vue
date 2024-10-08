<template>
  <header class="header">
    <a href="#" class="header__logo">MyApp</a>
    <nav>
      <a href="#blog">Blog</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
</template>


<script setup>
</script>


<style lang="scss">
  .header {
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
    gap: 1rem;
    background: #ffffff10;
    border-bottom: 1px solid #ffffff2d;
    .header__logo {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
    }
    nav {
      display: flex;
      gap: 8px;
      a {
        color: #fff;
        text-decoration: none;
        &:hover {
          text-decoration: underline
        }
      }
    }
  }
</style>