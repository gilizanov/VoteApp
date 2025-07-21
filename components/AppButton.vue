<template>
  <button type="button" class="button">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  background-color: var(--color-dark);
  color: var(--color-white);
  border-radius: 20px;
}
</style>
