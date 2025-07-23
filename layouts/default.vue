<template>
  <div class="container">
    <SideBar />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  display: flex;
  width: 100vw;
  height: 100vh;
}

.content {
  flex-grow: 1;
  padding: 16px 64px;
  overflow-y: auto;
}
</style>
