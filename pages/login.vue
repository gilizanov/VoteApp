<template>
  <div class="auth">
    <h1 class="auth__title">Вход на платформу</h1>
    <form class="auth__form">
      <InputField v-model="email" placeholder="Email" type="email" icon-name="ic:baseline-alternate-email" />
      <InputField
        v-model="password"
        placeholder="Пароль"
        type="password"
        icon-name="material-symbols:vpn-key-outline-rounded"
      />
      <AppButton class="auth__form-button" @click.prevent="login">Войти в аккаунт</AppButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import type { LoginResponse } from '@/interfaces/auth.interface'

const API_URL = useAPI()
const email = ref<string | undefined>('')
const password = ref<string | undefined>('')

const authStore = useAuthStore()
const setToken = authStore.setToken
const setUser = authStore.setUser

const login = async () => {
  const data = await $fetch<LoginResponse>(`${API_URL}/auth/login`, {
    method: 'POST',
    body: {
      email: email.value?.trim(),
      password: password.value?.trim()
    }
  })
  setToken(data.token)
  setUser(data.user)
  navigateTo('/')
}
</script>

<style scoped>
.auth {
  max-height: calc(100dvh - 32px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.auth__title {
  margin-bottom: 24px;
  font-weight: 500;
  font-size: 32px;
  color: var(--color-dark-gray);
}

.auth__form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 33%;
}

.auth__form-button {
  margin-top: 8px;
}
</style>
