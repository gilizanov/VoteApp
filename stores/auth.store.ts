import type { User } from '@/interfaces/user.interface'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const token = ref<string | undefined>('')
    const user = ref<User | undefined>(undefined)

    const logout = () => {
      token.value = undefined
      user.value = undefined
    }

    return { token, user, logout }
  },
  {
    persist: true
  }
)
