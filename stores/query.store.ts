export const useQueryStore = defineStore('query', () => {
  const route = useRoute()

  const page = ref<number>(Number(route.query.page as string) || 1)
  const page_size = ref<number>(Number(route.query.page_size as string) || 10)
  const sortingMethods = [
    {
      name: 'По дате',
      value: 'date'
    },
    {
      name: 'По рейтингу',
      value: 'rating'
    }
  ]
  const sortBy = ref<string>((route.query.sort as string) || sortingMethods[0].value)
  const totalPages = ref<number>(1)

  const query = computed(() => ({
    page: page.value,
    page_size: page_size.value,
    sort: sortBy.value
  }))

  const setPage = (newPage: number) => {
    page.value = newPage
  }

  return { page, page_size, sortingMethods, sortBy, totalPages, query, setPage }
})
