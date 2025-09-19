<template>
  <section class="relative py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 xl:py-40">
    <div class="max-w-[1920px] mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <!-- Section Header -->
      <div class="text-center mb-12 xs:mb-16 sm:mb-20 md:mb-24">
        <h2 class="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 xs:mb-6 sm:mb-8">
          Популярные
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">
            турниры
          </span>
        </h2>
        <p class="text-lg xs:text-xl sm:text-2xl md:text-3xl text-white/60 max-w-3xl mx-auto">
          Присоединяйтесь к лучшим турнирам и соревнуйтесь с игроками со всего мира
        </p>
      </div>

      <!-- Tournaments Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 sm:gap-10 md:gap-12 mb-12 xs:mb-16 sm:mb-20">
        <TournamentCard 
          v-for="tournament in tournaments" 
          :key="tournament.id"
          :tournament="tournament"
        />
      </div>

      <!-- View All Button -->
      <div class="text-center">
        <NuxtLink
          to="/tournaments"
          class="inline-flex items-center justify-center px-8 xs:px-10 sm:px-12 md:px-16 py-4 xs:py-5 sm:py-6 text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold text-white bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 rounded-xl xs:rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Смотреть все турниры
          <svg class="ml-3 xs:ml-4 w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </NuxtLink>
      </div>
    </div>

    <!-- Background decorative elements -->
    <div class="absolute top-0 left-0 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
  </section>
</template>

<script setup>
import TournamentCard from '~/components/tournaments/TournamentCard.vue'

// Mock tournament data - в реальном проекте будет загружаться с API
const tournaments = ref([
  {
    id: 1,
    title: 'CS:GO Championship',
    game: 'CS:GO',
    date: '2024-01-15',
    time: '18:00',
    prize: '50,000 ₽',
    participants: 64,
    maxParticipants: 64,
    status: 'open',
    image: '/tournament-cs.jpg'
  },
  {
    id: 2,
    title: 'Dota 2 Pro League',
    game: 'Dota 2',
    date: '2024-01-20',
    time: '20:00',
    prize: '100,000 ₽',
    participants: 45,
    maxParticipants: 128,
    status: 'open',
    image: '/tournament-dota.jpg'
  },
  {
    id: 3,
    title: 'Valorant Masters',
    game: 'Valorant',
    date: '2024-01-25',
    time: '19:00',
    prize: '75,000 ₽',
    participants: 32,
    maxParticipants: 32,
    status: 'full',
    image: '/tournament-valorant.jpg'
  }
])
</script>
