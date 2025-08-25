<template>
  <div class="sidebar">
    <NuxtLink to="/" class="sidebar__button" title="На главную">
      <Icon name="icon:home" size="24" />
    </NuxtLink>
    <NuxtLink v-if="!isAuth" to="/login" class="sidebar__button" title="Выход" @click="logout">
      <Icon name="icon:exit" size="24" />
    </NuxtLink>
    <button v-else type="button" class="sidebar__button" @click="handleLogout">
      <Icon name="icon:exit" size="24" />
    </button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const logout = useAuthStore().logout
const { token, user } = storeToRefs(useAuthStore())
const isAuth = computed(() => !!token.value && !!user.value)

const handleLogout = () => {
  logout()
  router.push('/login')
}
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-right: 1px solid var(--color-light);
}

.sidebar__button {
  padding: 8px;
}
</style>
