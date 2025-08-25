<template>
  <label class="label">
    <Icon v-if="iconName" :name="iconName" size="24" class="input-icon" />
    <input v-model="model" :type="type" class="input" :placeholder="placeholder" />
  </label>
</template>

<script setup lang="ts">
defineProps<{
  iconName?: string
  type?: string
  placeholder?: string
}>()

const model = defineModel<string>()
</script>

<style scoped>
.label {
  position: relative;
  width: 100%;
}

.label:has(.input-icon) .input {
  padding-left: 48px;
}

.input {
  width: 100%;
  padding: 10px 16px;
  border: 1px solid var(--color-light);
  border-radius: 24px;
  font-weight: 500;
  font-size: 18px;
  color: var(--color-dark);
}

.input::placeholder {
  color: var(--color-light-gray);
}

.input-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
