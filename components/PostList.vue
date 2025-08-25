<template>
  <div class="post-list">
    <PostCard v-for="post in posts" :key="post.id" :post="post" is-link />
  </div>
</template>

<script setup lang="ts">
import type { GetPostResponse } from '@/interfaces/post.interface'

const API_URL = useAPI()

const router = useRouter()

const { query, sortBy, page, totalPages } = storeToRefs(useQueryStore())

const changeRoute = () =>
  router.replace({
    query: {
      sort: sortBy.value,
      page: page.value,
      page_size: query.value.page_size
    }
  })

watch([sortBy, page], () => {
  changeRoute()
})

const { reactions } = storeToRefs(useReactionsStore())
watch(
  reactions,
  () => {
    refresh()
  },
  { deep: true }
)

const { data, refresh } = await useFetch<GetPostResponse>(`${API_URL}/posts`, {
  key: 'products',
  query
})

const posts = computed(() =>
  data.value?.posts.map((post) => ({
    ...post,
    published_at: new Date(post.published_at),
    updated_at: new Date(post.updated_at)
  }))
)

totalPages.value = Number(data.value?.total_pages)
</script>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 32px;
  max-width: calc(2 / 3 * 100%);
  width: 100%;
  padding-top: 32px;
  overflow-y: auto;
  scrollbar-width: none;
}

.post-list::-webkit-scrollbar {
  display: none;
}
</style>
