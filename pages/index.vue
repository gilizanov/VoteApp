<template>
  <div class="post-layout">
    <PostControls />
    <PostList />
    <PostPagination />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  titleTemplate: '',
  description: 'Система голосования - VoteApp',
  ogDescription: 'Система голосования - VoteApp'
})
</script>

<style scoped>
.post-layout {
  display: flex;
  flex-direction: column;
  max-height: calc(100dvh - 16px - 16px);
  height: 100%;
}
</style>
