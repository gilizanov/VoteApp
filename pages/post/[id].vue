<template>
  <PostCard v-if="post" :post="post" />
  <p v-else>Пост не найден</p>
</template>

<script setup lang="ts">
import type { Post } from '@/interfaces/post.interface'

const route = useRoute()

const API_URL = useAPI()

const { data } = await useFetch<Post>(`${API_URL}/posts/${route.params.id}`)
const post = computed(() => {
  if (!data.value) return null
  return {
    ...data.value,
    published_at: new Date(data.value.published_at),
    updated_at: new Date(data.value.updated_at)
  }
})
</script>

<style scoped>
.post {
  width: 100%;
  max-width: calc(2 / 3 * 100%);
  padding-top: 48px;
}
</style>
