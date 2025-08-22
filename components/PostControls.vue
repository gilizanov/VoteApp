<template>
  <div class="post-controls">
    <button type="button" class="add-button">
      <span class="add-button__icon">
        <Icon name="icon:plus" size="10" mode="svg" />
      </span>
      <span class="add-button__text">Добавить новое обновление для голосования</span>
    </button>
    <div class="post-sorting-block">
      <button
        v-for="(method, index) in sortingMethods"
        :key="index"
        type="button"
        :class="['sorting-button', sortBy === method.value ? 'is-active' : '']"
        @click="sortBy = method.value"
      >
        {{ method.name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { sortBy } = storeToRefs(useQueryStore())
const sortingMethods = useQueryStore().sortingMethods
</script>

<style scoped>
.post-sorting-block {
  margin-top: 32px;
  display: flex;
  align-items: center;
  gap: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-light);
  max-width: calc(3 / 4 * 100%);
  width: 100%;
}

.sorting-button {
  position: relative;
  padding-bottom: 8px;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  color: var(--color-gray);
  transition: color 0.15s;
}

.sorting-button::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--color-dark-gray);
  transition: width 0.15s;
}

.sorting-button.is-active {
  color: var(--color-dark-gray);
}

.sorting-button.is-active::before {
  width: 100%;
}

.add-button {
  display: flex;
  align-items: center;
  gap: 8px;
}

.add-button__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 50%;
  background-color: var(--color-extra-light);
  transition: background-color 0.15s;
}

.add-button__text {
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  color: var(--color-dark-gray);
}

@media (hover: hover) {
  .add-button:hover .add-button__icon {
    background-color: var(--color-light);
  }

  .sorting-button:hover::before {
    width: 100%;
  }
}
</style>
