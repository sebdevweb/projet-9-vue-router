<template>
  <article class="post">
    <a :href="link"><img :src="thumbnail" :alt="post.title" /></a>

    <h2>
      <a :href="link">
        {{ post.title }}
      </a>
    </h2>
    <p>
      {{ post.body }}
    </p>
  </article>
</template>


<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    post: Object
  })

  const link = computed(() => `/blog/${props.post.id}`)
  const thumbnail = computed(() => 
    `https://picsum.photos/id/${props.post.id}/280/180`
  )
</script>


<style lang="scss">
</style>