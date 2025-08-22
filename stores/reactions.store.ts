import type { Reaction } from '@/interfaces/reaction.interface'

export const useReactionsStore = defineStore(
  'reactions',
  () => {
    const config = useAppConfig()
    const API_URL = config.API_URL

    const reactions = ref<Reaction[]>([])

    const setReaction = async (id: number, action: 'like' | 'dislike') => {
      const existing = reactions.value.find((reaction) => reaction.id === id)

      if (existing) return

      if (!existing) {
        reactions.value.push({ id, action })
        await $fetch(`${API_URL}/posts/${id}/${action}`, { method: 'POST' })
      }
    }

    const getReaction = (id: number) => {
      return reactions.value.find((r) => r.id === id)?.action
    }

    return { reactions, setReaction, getReaction }
  },
  {
    persist: {
      key: 'reactions',
      pick: ['reactions']
    }
  }
)
