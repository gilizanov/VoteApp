<template>
  <div class="post-edit">
    <span class="add-icon">
      <Icon name="icon:plus" size="10" mode="svg" />
    </span>
    <form class="post-edit__form">
      <div class="post-edit__fields">
        <textarea v-model.trim="title" type="text" class="textarea" placeholder="Тема" rows="1" />
        <textarea v-model.trim="content" type="text" class="textarea textarea--text" placeholder="Текст..." />
      </div>
      <AppButton :disabled="isDisabled" class="post-edit__button" @click.prevent="updatePost">Сохранить</AppButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '@/interfaces/post.interface'

definePageMeta({
  middleware: 'auth'
})

useSeoMeta({
  title: 'Редактирование поста'
})

const { token } = storeToRefs(useAuthStore())
const API_URL = useAPI()
const route = useRoute()

// Добавить обработку
const { data } = await useFetch<Post>(`${API_URL}/posts/${route.query.id}`)

const title = ref<string | undefined>(data.value?.title)
const content = ref<string | undefined>(data.value?.content)

const isDisabled = computed(() => !title.value || !content.value)

const updatePost = async () => {
  if (isDisabled.value) return
  await $fetch(`${API_URL}/posts/${route.query.id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token.value}`
    },
    body: {
      title: title.value?.trim(),
      content: content.value?.trim()
    }
  })
  navigateTo('/')
}
</script>
