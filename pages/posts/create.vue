<template>
  <div class="post-create">
    <span class="add-icon">
      <Icon name="icon:plus" size="10" mode="svg" />
    </span>
    <form class="post-create__form">
      <div class="post-create__fields">
        <textarea v-model.trim="title" type="text" class="textarea" placeholder="Тема" rows="1" />
        <textarea v-model.trim="content" type="text" class="textarea textarea--text" placeholder="Текст..." />
      </div>
      <AppButton :disabled="isDisabled" class="post-create__button" @click.prevent="createPost">Создать</AppButton>
    </form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

useSeoMeta({
  title: 'Создание поста'
})

const API_URL = useAPI()
const { token } = storeToRefs(useAuthStore())

const title = ref<string | undefined>('')
const content = ref<string | undefined>('')

const isDisabled = computed(() => !title.value || !content.value)

const createPost = async () => {
  if (isDisabled.value) return
  await $fetch(`${API_URL}/posts/create`, {
    method: 'POST',
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
