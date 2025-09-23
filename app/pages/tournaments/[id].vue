<template>
  <div class="min-h-screen bg-[#101828]" v-if="tournament">
    <!-- Tournament Header -->
    <TournamentHeader :tournament="tournament" />
    
    <!-- Tournament Tabs with Content -->
    <TournamentTabs>
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
import type { TournamentDto, TournamentView } from '~/types/tournament'

// Get tournament ID from route
const route = useRoute()
const tournamentId = route.params.id

const tournament = ref<TournamentView | null>(null)

onMounted(async () => {
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
      prize: data.prizePool ? `$${data.prizePool}` : '',
      participants: data.participantsCount ?? 0,
      maxParticipants: data.maxParticipants ?? 16,
      status: data.status ?? 'upcoming',
      progress: 0,
      image: '/game-cs2.png',
      description: data.description ?? '',
      format: data.format ?? '',
      platform: data.platform ?? 'PC',
      region: data.region ?? 'Европа',
      organizer: data.organizer?.username ?? '—'
    }
  } catch (e) {
    console.error('Failed to load tournament', e)
  }
})

// Set page title
useHead(() => ({
  title: `${tournament.value?.title || 'Турнир'} - Турнир | CyberTournaments`
}))
</script>
