<template>
  <ClientOnly>
    <div class="pagination">
      <button
        v-for="(item, index) in visiblePages"
        :key="index"
        type="button"
        :disabled="item === '...' || item === page"
        :class="['pagination__button', page === item ? 'is-active' : '']"
        @click="setPage(+item)"
      >
        {{ item }}
      </button>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const { page, totalPages } = storeToRefs(useQueryStore())
const setPage = useQueryStore().setPage

const visiblePages = computed(() => {
  const total = totalPages.value
  const current = page.value
  const delta = 2

  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const pages: (number | string)[] = []
  const left = Math.max(2, current - delta)
  const right = Math.min(total - 1, current + delta)

  pages.push(1)
  if (left > 2) pages.push('...')

  for (let i = left; i <= right; i++) {
    pages.push(i)
  }

  if (right < total - 1) pages.push('...')
  pages.push(total)

  return pages
})
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  margin-top: 24px;
  margin-left: -16px;
}

.pagination__button {
  padding: 0 16px;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: var(--color-light-gray);
}

.pagination__button:not(:last-child) {
  border-right: 1px solid var(--color-light);
}

.pagination__button:last-child {
  border-left: 1px solid var(--color-light);
}

.pagination__button:first-child {
  border-left: none;
}

.pagination__button.is-active {
  color: var(--color-dark-gray);
}

.pagination__button:disabled {
  cursor: default;
  pointer-events: none;
}
</style>
