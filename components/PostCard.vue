<template>
  <div class="post">
    <Component :is="isLink ? NuxtLink : 'div'" :to="isLink ? `/post/${post.id}` : undefined">
      <div class="post__header">
        <div class="post__author">
          <div class="post__author-avatar">
            <img src="/images/avatar.jpg" alt="Аватар" />
          </div>
          <p class="post__author-name">{{ post.author_id }}</p>
        </div>
        <div class="post__date">{{ formatDate(post.published_at || post.updated_at) }}</div>
      </div>
      <p class="post__title">{{ post.title }}</p>
      <p class="post__text">{{ post.content }}</p>
    </Component>
    <div class="post__actions-container">
      <div :class="['post__actions', { disabled: getReaction(post.id) }]">
        <button type="button" class="post__button" @click="setReaction(post.id, 'like')">
          <span class="post__button-text">{{ post.likes }}</span>
          <Icon
            :name="getReaction(post.id) === 'like' ? 'mynaui:like-solid' : 'mynaui:like'"
            size="18"
            style="color: var(--color-light-gray)"
          />
        </button>
        <button type="button" class="post__button" @click="setReaction(post.id, 'dislike')">
          <span class="post__button-text">{{ post.dislikes }}</span>
          <Icon
            :name="getReaction(post.id) === 'dislike' ? 'mynaui:dislike-solid' : 'mynaui:dislike'"
            size="18"
            style="color: var(--color-light-gray)"
          />
        </button>
      </div>
      <div class="post__actions">
        <button type="button" class="post__button">
          <Icon name="hugeicons:delete-01" size="18" style="color: var(--color-light-gray)" />
        </button>
        <button type="button" class="post__button">
          <Icon name="solar:pen-2-line-duotone" size="18" style="color: var(--color-light-gray)" />
          <span class="post__button-text">Изменить</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '@/interfaces/post.interface'
import { NuxtLink } from '#components'

defineProps<{
  post: Post
  isLink?: boolean
}>()

const reactionsStore = useReactionsStore()
const setReaction = reactionsStore.setReaction
const getReaction = reactionsStore.getReaction
</script>

<style scoped>
.post {
  display: block;
  padding-bottom: 48px;
  padding-right: 120px;
  border-bottom: 1px solid var(--color-light);
}

.post__header,
.post__author,
.post__actions,
.post__button {
  display: flex;
  align-items: center;
}

.post__header {
  margin-bottom: 16px;
  gap: 24px;
}

.post__author,
.post__button {
  gap: 8px;
}

.post__actions {
  gap: 16px;
}

.post__author-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
}

.post__author-name {
  font-weight: 300;
  font-size: 14px;
  color: var(--color-dark-gray);
}

.post__date {
  font-weight: 300;
  font-size: 14px;
  color: var(--color-gray);
}

.post__title {
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 22px;
  color: var(--color-dark);
}

.post__text {
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  color: var(--color-dark);
}

.post__actions-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post__actions.disabled {
  pointer-events: none;
  cursor: default;
}

.post__button-text {
  font-weight: 400;
  font-size: 14px;
  color: var(--color-dark-gray);
}
</style>
