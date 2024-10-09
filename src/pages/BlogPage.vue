<template>
  <h1>Blog</h1>
  <div v-if="state === 'error'">Impossible de charger les articles</div>
  <div v-else :aria-busy="state === 'loading'">
    <div class="post__container">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
  <button>Page suivante</button>

</template>

<script setup>
import { onMounted, ref } from 'vue'
import PostCard from '@/components/PostCard.vue';

const state = ref("loading")
const posts = ref([])

onMounted(() => {
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Impossible de charger les articles depuis le serveur");
    })
    .then((data) => {
      posts.value = data;
      state.value = "idle";
    })
    .catch((err) => {
      state.value = "error";
    });
});
</script>