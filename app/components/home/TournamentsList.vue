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
            Найдено: {{ filteredTournaments.length }} турниров
          </span>
        </div>
      </div>

      <!-- Filters and Search Bar -->
      <div class="bg-mirage-50 border-b border-oxford py-6 px-[208.5px] mb-8">
        <div class="flex items-center gap-4">
          <!-- Left Side - Game Filter and Search -->
          <div class="flex items-center gap-4 flex-1">
            <!-- Game Filter Dropdown -->
            <div class="w-64">
              <div class="relative">
                <select 
                  v-model="selectedGame"
                  class="w-full h-9 px-3 pr-8 bg-mine-shaft-30 border border-river-bed rounded-lg text-[12.8px] leading-[1.563] text-silver-chalice appearance-none focus:outline-none focus:border-gray-chateau"
                >
                  <option value="">Все игры</option>
                  <option value="Soulcalibur VI">Soulcalibur VI</option>
                  <option value="Counter-Strike 2">Counter-Strike 2</option>
                  <option value="Dota 2">Dota 2</option>
                  <option value="Valorant">Valorant</option>
                  <option value="League of Legends">League of Legends</option>
                </select>
                <!-- Dropdown Arrow -->
                <div class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none opacity-50">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="#A1A1A1" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <!-- Search Input -->
            <div class="flex-1 max-w-md">
              <div class="relative">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Поиск турниров..."
                  class="w-full h-9 pl-10 pr-4 bg-mine-shaft-30 border border-river-bed rounded-lg text-[12.9px] leading-[1.21] text-gray-chateau placeholder-gray-chateau focus:outline-none focus:border-gray-chateau"
                />
                <!-- Search Icon -->
                <div class="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.11 11.11L13.33 13.33" stroke="#99A1AF" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 7.33C2 10.28 4.38 12.67 7.33 12.67C10.28 12.67 12.67 10.28 12.67 7.33C12.67 4.38 10.28 2 7.33 2C4.38 2 2 4.38 2 7.33Z" stroke="#99A1AF" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Right Side - Filters Button -->
          <button class="flex items-center gap-2 h-9 px-3 bg-mine-shaft-30 border border-mine-shaft rounded-lg text-[13.23px] leading-[1.511] font-medium text-mischka hover:bg-mine-shaft/50 transition-colors duration-200">
            <!-- Filter Icon -->
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.33 2H14.67V4.67H1.33V2Z" stroke="#D1D5DC" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Фильтры
          </button>
        </div>
      </div>

      <!-- Tournaments Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mb-4">
        <TournamentCard 
          v-for="(tournament, index) in filteredTournaments" 
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

// Reactive variables for filtering and search
const selectedGame = ref('')
const searchQuery = ref('')

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

// Computed property for filtered tournaments
const filteredTournaments = computed(() => {
  let filtered = tournaments.value

  // Filter by game
  if (selectedGame.value) {
    filtered = filtered.filter(tournament => tournament.game === selectedGame.value)
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(tournament => 
      tournament.title.toLowerCase().includes(query) ||
      tournament.game.toLowerCase().includes(query)
    )
  }

  return filtered
})
</script>
