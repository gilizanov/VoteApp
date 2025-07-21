<template>
  <div class="error">
    <h1 class="error__title">{{ error.statusCode }}</h1>
    <p v-if="error.statusCode === 404" class="error__text">Страница не найдена, вернитесь на главную страницу</p>
    <p v-else class="error__text">{{ error.message }}</p>
    <AppButton @click="navigateTo('/')">На главную</AppButton>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps<{
  error: NuxtError
}>()
</script>

<style scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
}

.error__title {
  font-weight: 500;
  font-size: 120px;
  text-align: center;
  color: var(--color-dark-gray);
}

.error__text {
  margin-bottom: 24px;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: var(--color-dark-gray);
}
</style>
