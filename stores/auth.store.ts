import type { User } from '@/interfaces/user.interface'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const token = ref<string | undefined>('')
    const user = ref<User | undefined>(undefined)

    const isAuth = computed(() => !!token.value && !!user.value)

    const logout = () => {
      token.value = undefined
      user.value = undefined
    }

    return { token, user, logout, isAuth }
  },
  {
    persist: true
  }
)
