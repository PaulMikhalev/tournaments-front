<template>
  <div class="min-h-screen bg-[#101828]" v-if="tournament">
    <!-- Tournament Header -->
    <TournamentHeader :tournament="tournament" />
    
    <!-- Tournament Tabs with Content -->
    <TournamentTabs :tabs="tabs">
      <!-- Main Content -->
      <template #default="{ activeTab }">
        <TournamentOverview :tournament="tournament" :activeTab="activeTab" />
      </template>
    </TournamentTabs>
  </div>
</template>

<script setup lang="ts">
import TournamentHeader from '~/components/tournaments/TournamentHeader.vue'
import TournamentTabs from '~/components/tournaments/TournamentTabs.vue'
import TournamentOverview from '~/components/tournaments/TournamentOverview.vue'
import type { TournamentDto, TournamentView, TournamentStatus } from '~/types/tournament'

// Get tournament ID from route
const route = useRoute()
const tournamentId = route.params.id

const tournament = ref<TournamentView | null>(null)
const tabs = ref<{ id: string; label: string }[]>([
  { id: 'bracket', label: 'Турнирная сетка' },
  { id: 'stream', label: 'Трансляция' },
  { id: 'participants', label: 'Участники' },
  { id: 'rules', label: 'Правила' }
])

const loadTournament = async () => {
  try {
    const { api } = useApi()
    const tournamentResponseData = await api<TournamentDto>(`/tournaments/${tournamentId}`, { method: 'GET' })
    if (!tournamentResponseData.success || !tournamentResponseData.data) throw new Error(tournamentResponseData.message || 'Failed to load tournament')
    const data = tournamentResponseData.data
    tournament.value = {
      id: data.id,
      title: data.title,
      game: data.game,
      date: data.startDate ? new Date(data.startDate).toLocaleDateString('ru-RU') : '',
      time: data.startDate ? new Date(data.startDate).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }) : '',
      prize: data.prizePool ? `${data.prizePool}` : 'Хуёв тачка',
      participants: data.currentParticipants ?? 0,
      maxParticipants: data.maxParticipants ?? 16,
      status: data.status ?? 'REGISTRATION',
      progress: 0,
      image: data.image ?? '/sc6/logo.jpg',
      description: data.description ?? '',
      format: data.format ?? '',
      platform: 'PC', // Default value since not in API
      region: 'Европа', // Default value since not in API
      organizer: data.organizer?.username ?? '—',
      participantsList: data.participants ?? []
    }

    if (tournament.value?.status === 'REGISTRATION') {
      tabs.value = [
        { id: 'participants', label: 'Участники' },
        { id: 'rules', label: 'Правила' }
      ]
    }
  } catch (e) {
    console.error('Failed to load tournament', e)
  }
}

onMounted(loadTournament)

// Expose refresh function for child components
const refreshTournament = () => {
  loadTournament()
}

provide('refreshTournament', refreshTournament)

// Set page title
useHead(() => ({
  title: `${tournament.value?.title || 'Турнир'} - Турнир | BlackholeTournaments`
}))
</script>
