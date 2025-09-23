<template>
  <div class="space-y-6">
    <div class="bg-[#1e2939] rounded-lg p-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-[20px] leading-[28px] font-bold text-white">
          Участники турнира ({{ tournament.participants }}/{{ tournament.maxParticipants }})
        </h2>
        <button v-if="canJoin" @click="isJoinModalOpen = true" class="px-4 py-2 bg-[#00ffe0] text-[#101828] font-medium rounded-md hover:opacity-90 transition">Принять участие</button>
      </div>
      
      <!-- Participants List -->
      <div v-if="tournament.participantsList && tournament.participantsList.length > 0" class="space-y-3">
        <div 
          v-for="participant in tournament.participantsList" 
          :key="participant.id"
          class="flex items-center justify-between p-3 bg-[#2a3441] rounded-lg"
        >
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-[#00ffe0] rounded-full flex items-center justify-center">
              <span class="text-[#101828] font-bold text-sm">{{ participant.user.username.charAt(0).toUpperCase() }}</span>
            </div>
            <div>
              <p class="text-white font-medium">{{ participant.user.username }}</p>
              <p v-if="participant.user.team" class="text-[#99a1af] text-sm">{{ participant.user.team }}</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-[#99a1af] text-sm">{{ formatDate(participant.joinedAt) }}</p>
            <span class="inline-block px-2 py-1 bg-green-600 text-white text-xs rounded-full">
              {{ participant.status }}
            </span>
          </div>
        </div>
      </div>
      
      <!-- Empty State -->
      <div v-else class="text-center py-8">
        <p class="text-[16px] leading-[24px] text-[#99a1af]">
          Пока нет зарегистрированных участников
        </p>
      </div>
    </div>

    <JoinTournamentModal 
      :open="isJoinModalOpen" 
      :loading="isSubmitting"
      @update:open="val => isJoinModalOpen = val"
      @cancel="closeModal"
      @confirm="confirmJoin"
    />
  </div>
</template>

<script setup lang="ts">
import type { TournamentView } from '~/types/tournament'
import JoinTournamentModal from '~/components/tournaments/JoinTournamentModal.vue'

const props = defineProps<{
  tournament: TournamentView
}>()

const isJoinModalOpen = ref(false)
const selectedCharacter = ref('')
const isSubmitting = ref(false)

// Get refresh function from parent
const refreshTournament = inject<() => void>('refreshTournament')

const canJoin = computed(() => props.tournament?.status === 'REGISTRATION')

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const closeModal = () => {
  isJoinModalOpen.value = false
  selectedCharacter.value = ''
}

const confirmJoin = async (character?: string) => {
  const finalCharacter = character ?? selectedCharacter.value
  if (!finalCharacter) return
  try {
    isSubmitting.value = true
    const { api } = useApi()
    await api(`/tournaments/${props.tournament.id}/join`, { method: 'POST', body: { character: finalCharacter } })
    closeModal()
    
    // Refresh tournament data to update participants list
    if (refreshTournament) {
      await refreshTournament()
    }
  } catch (e) {
    console.error('Failed to join tournament', e)
  } finally {
    isSubmitting.value = false
  }
}
</script>
