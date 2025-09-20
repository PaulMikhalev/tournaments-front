<template>
  <div class="min-h-screen bg-[#101828]">
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

<script setup>
import TournamentHeader from '~/components/tournaments/TournamentHeader.vue'
import TournamentTabs from '~/components/tournaments/TournamentTabs.vue'
import TournamentOverview from '~/components/tournaments/TournamentOverview.vue'

// Get tournament ID from route
const route = useRoute()
const tournamentId = route.params.id

// Mock tournament data - в реальном проекте будет загружаться с API
const tournament = ref({
  id: tournamentId,
  title: 'Winter Championship 2025',
  game: 'Counter-Strike 2',
  date: '15 января',
  time: '19:00 MSK',
  prize: '$50,000',
  participants: 16,
  maxParticipants: 16,
  status: 'live',
  progress: 100,
  image: '/game-cs2.png',
  description: 'Крупнейший зимний турнир по Counter-Strike 2 с участием лучших команд мира. Призовой фонд $50,000 будет разделен между победителями в формате single elimination. Все матчи проходят в формате BO3, финал - BO5.',
  format: 'Single Elimination',
  platform: 'PC',
  region: 'Европа',
  organizer: 'CyberTournaments'
})

// Set page title
useHead({
  title: `${tournament.value.title} - Турнир | CyberTournaments`
})
</script>
