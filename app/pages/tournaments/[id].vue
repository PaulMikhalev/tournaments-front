<template>
  <div class="min-h-screen bg-home-gradient">
    <!-- Tournament Header -->
    <TournamentHeader :tournament="tournament" />
    
    <!-- Tournament Tabs with Content -->
    <TournamentTabs>
      <!-- Main Content -->
      <template #default="{ activeTab }">
        <TournamentOverview :tournament="tournament" :activeTab="activeTab" />
      </template>
      
      <!-- Sidebar -->
      <template #sidebar>
        <TournamentSidebar :tournament="tournament" />
      </template>
    </TournamentTabs>
  </div>
</template>

<script setup>
import TournamentHeader from '~/components/tournaments/TournamentHeader.vue'
import TournamentTabs from '~/components/tournaments/TournamentTabs.vue'
import TournamentOverview from '~/components/tournaments/TournamentOverview.vue'
import TournamentSidebar from '~/components/tournaments/TournamentSidebar.vue'

// Get tournament ID from route
const route = useRoute()
const tournamentId = route.params.id

// Mock tournament data - в реальном проекте будет загружаться с API
const tournament = ref({
  id: tournamentId,
  title: 'Soulcalibur VI Championship',
  game: 'Soulcalibur VI',
  date: '15 января, 19:00',
  prize: '$30,000',
  participants: 12,
  maxParticipants: 16,
  status: 'registration',
  progress: 75,
  image: '/game-soulcalibur.png',
  description: 'Присоединяйтесь к захватывающему турниру Soulcalibur VI и сразитесь с лучшими игроками за призовой фонд $30,000. Турнир проводится в формате одиночной элиминации, где каждая игра может стать решающей.',
  format: 'Одиночная элиминация',
  platform: 'PC',
  region: 'Европа',
  organizer: 'CyberTournaments'
})

// Set page title
useHead({
  title: `${tournament.value.title} - Турнир | CyberTournaments`
})
</script>
