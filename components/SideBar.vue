<template>
  <div class="sidebar">
    <NuxtLink to="/" class="sidebar__button" title="На главную">
      <Icon name="icon:home" size="24" />
    </NuxtLink>
    <NuxtLink to="/login" class="sidebar__button" title="Выход">
      <Icon name="icon:exit" size="24" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>

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
