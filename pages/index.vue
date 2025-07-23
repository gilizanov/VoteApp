<template>
  <div class="post-list">
    <PostCard v-for="i in 5" :key="i" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: calc(2 / 3 * 100%);
}
</style>
