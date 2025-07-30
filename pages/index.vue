<template>
  <div class="post-list">
    <PostCard v-for="post in posts" :key="post.id" :post="post" is-link />
  </div>
</template>

<script setup lang="ts">
import type { GetPostResponse } from '@/interfaces/post.interface'

const config = useAppConfig()
const API_URL = config.API_URL

const { data } = await useFetch<GetPostResponse>(`${API_URL}/posts`)
const posts = computed(() =>
  data.value?.posts.map((post) => ({
    ...post,
    published_at: new Date(post.published_at),
    updated_at: new Date(post.updated_at)
  }))
)
</script>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: calc(2 / 3 * 100%);
  width: 100%;
  padding-top: 48px;
}
</style>
