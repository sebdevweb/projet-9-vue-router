<template>
  <h1>
    title
  </h1>
  <img :src="thumbnail" alt="">
</template>

<script setup>
  import { computed } from 'vue'



  const props = defineProps({
    post: Object
  })

  const thumbnail = computed(() => `https://picsum.photos/id/${post.value.id}/280/180`)

</script>