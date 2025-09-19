<template>
  <section class="bg-ebony py-12 lg:py-[48px] px-4 lg:px-[184.5px]">
    <div class="max-w-[1536px] mx-auto px-6">
      <!-- Section Header -->
      <div class="flex justify-between items-center mb-8">
        <div class="flex flex-col gap-2">
          <div class="flex flex-col">
            <h2 class="text-[29.06px] leading-[1.239] font-bold text-white">
              Активные турниры
            </h2>
          </div>
          <div class="flex flex-col">
            <p class="text-[14.75px] leading-[1.627] text-gray-chateau">
              Присоединяйтесь к турнирам и сражайтесь за призы
            </p>
          </div>
        </div>
        <div class="flex flex-col">
          <span class="text-[13.02px] leading-[1.537] text-gray-chateau">
            Найдено: {{ tournaments.length }} турниров
          </span>
        </div>
      </div>

      <!-- Tournaments Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mb-4">
        <TournamentCard 
          v-for="(tournament, index) in tournaments" 
          :key="tournament.id"
          :tournament="tournament"
          :is-featured="index === 2"
        />
      </div>

      <!-- Load More Button -->
      <div class="flex justify-center pt-4">
        <button class="px-8 py-3 bg-mirage border border-oxford rounded-[10px] text-white text-[14.5px] leading-[1.655] hover:bg-oxford transition-colors duration-200">
          Загрузить еще
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import TournamentCard from '~/components/tournaments/TournamentCard.vue'

// Mock tournament data - в реальном проекте будет загружаться с API
const tournaments = ref([
  {
    id: 1,
    title: 'Soulcalibur VI Championship',
    game: 'Soulcalibur VI',
    date: '15 января, 19:00',
    prize: '$30,000',
    participants: 12,
    maxParticipants: 16,
    status: 'live',
    progress: 75,
    image: '/game-soulcalibur.png'
  },
  {
    id: 2,
    title: 'Winter CS Championship',
    game: 'Counter-Strike 2',
    date: '20 января, 20:00',
    prize: '$50,000',
    participants: 8,
    maxParticipants: 16,
    status: 'registration',
    progress: 50,
    image: '/game-cs2.png'
  },
  {
    id: 3,
    title: 'Dota Masters League',
    game: 'Dota 2',
    date: '18 января, 18:00',
    prize: '$25,000',
    participants: 12,
    maxParticipants: 16,
    status: 'registration',
    progress: 75,
    image: '/game-dota2.png'
  },
  {
    id: 4,
    title: 'Valorant Pro Series',
    game: 'Valorant',
    date: '22 января, 20:00',
    prize: '$15,000',
    participants: 8,
    maxParticipants: 32,
    status: 'registration',
    progress: 25,
    image: '/game-valorant.png'
  },
  {
    id: 5,
    title: 'LoL European Cup',
    game: 'League of Legends',
    date: '25 января, 17:00',
    prize: '$30,000',
    participants: 5,
    maxParticipants: 8,
    status: 'upcoming',
    progress: 63,
    image: '/game-lol.png'
  },
  {
    id: 6,
    title: 'CS2 Weekly Tournament',
    game: 'Counter-Strike 2',
    date: '16 января, 21:00',
    prize: '$5,000',
    participants: 24,
    maxParticipants: 32,
    status: 'registration',
    progress: 75,
    image: '/game-cs2.png'
  },
  {
    id: 7,
    title: 'Dota 2 Battle Royale',
    game: 'Dota 2',
    date: '20 января, 19:30',
    prize: '$10,000',
    participants: 6,
    maxParticipants: 16,
    status: 'registration',
    progress: 38,
    image: '/game-dota2.png'
  }
])
</script>
