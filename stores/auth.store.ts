import type { User } from '@/interfaces/user.interface'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const token = ref<string | undefined>('')
    const setToken = (value: string) => (token.value = value)
    const clearToken = () => (token.value = undefined)

    const user = ref<User | undefined>(undefined)
    const setUser = (value: User) => (user.value = value)
    const clearUser = () => (user.value = undefined)

    const logout = () => {
      clearToken()
      clearUser()
    }

    return { token, setToken, user, setUser, logout }
  },
  {
    persist: true
  }
)
