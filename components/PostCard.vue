<template>
  <div class="post">
    <div class="post__header">
      <div class="post__author">
        <div class="post__author-avatar">
          <img src="/images/avatar.jpg" alt="Аватар" />
        </div>
        <p class="post__author-name">Ruslan G.</p>
      </div>
      <div class="post__date">4 дня назад</div>
    </div>
    <p class="post__title">Добавить функцию голосования</p>
    <p class="post__text">
      Попробовать добавить в приложение функцию голосования, которая позволит определить, какая фича более полезна, а
      какая нет. После добавления поста какой-то текст какой-то текст какой-то текст какой-то текст какой-то текст
      какой-то текст какой-то текст какой-то текст какой-то текст какой-то текст
    </p>
    <div class="post__actions-container">
      <div class="post__actions">
        <button type="button" class="post__button">
          <span class="post__button-text">10</span>
          <Icon name="mynaui:like" size="18" style="color: var(--color-light-gray)" />
        </button>
        <button type="button" class="post__button">
          <span class="post__button-text">1</span>
          <Icon name="mynaui:dislike" size="18" style="color: var(--color-light-gray)" />
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

<script setup lang="ts"></script>

<style scoped>
.post {
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

.post__button-text {
  font-weight: 400;
  font-size: 14px;
  color: var(--color-dark-gray);
}
</style>
