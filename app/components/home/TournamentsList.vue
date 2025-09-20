<template>
  <!-- Filters Section -->
  <section class="bg-[rgba(30,41,57,0.5)] border-b border-[#364153] px-[208.5px] py-6">
    <div class="flex items-center gap-4">
      <!-- Left Side - Game Filter and Search -->
      <div class="flex items-center gap-4 flex-1">
        <!-- Game Filter Dropdown -->
        <div class="w-64">
          <div class="bg-[rgba(38,38,38,0.3)] border border-[#4a5565] rounded-[8px] h-[36px] px-[13px] py-[9px] flex items-center justify-between">
            <span class="text-[12.797px] text-[#a1a1a1] leading-[20px]">Все игры</span>
            <svg class="w-4 h-4 opacity-50" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="#a1a1a1" stroke-width="1.33"/>
            </svg>
          </div>
        </div>
        
        <!-- Search Input -->
        <div class="flex-1 max-w-[448px] relative">
          <div class="bg-[rgba(38,38,38,0.3)] border border-[#4a5565] rounded-[8px] h-[36px] flex items-center">
            <svg class="w-4 h-4 ml-3 text-[#99a1af]" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="3" stroke="currentColor" stroke-width="1"/>
              <path d="m12 12-3-3" stroke="currentColor" stroke-width="1"/>
            </svg>
            <input 
              v-model="searchQuery"
              placeholder="Поиск турниров..."
              class="bg-transparent text-[12.906px] text-[#99a1af] placeholder-[#99a1af] ml-2 flex-1 outline-none"
            />
          </div>
        </div>
      </div>
      
      <!-- Right Side - Filters Button -->
      <button class="bg-[rgba(38,38,38,0.3)] border border-neutral-800 rounded-[8px] h-[36px] px-[13px] flex items-center gap-2 text-[13.234px] font-medium text-[#d1d5dc] leading-[20px]">
        <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
          <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" stroke-width="1.33"/>
        </svg>
        Фильтры
      </button>
    </div>
  </section>

  <!-- Tournaments Section -->
  <section class="bg-[#101828] px-[184.5px] py-[48px]">
    <div class="max-w-[1536px] mx-auto px-6">
      <!-- Section Header -->
      <div class="flex justify-between items-center mb-8">
        <div class="flex flex-col gap-2">
          <h2 class="text-[29.063px] font-bold text-white leading-[36px]">
            Активные турниры
          </h2>
          <p class="text-[14.75px] text-[#99a1af] leading-[24px]">
            Присоединяйтесь к турнирам и сражайтесь за призы
          </p>
        </div>
        <div>
          <span class="text-[13.016px] text-[#99a1af] leading-[20px]">
            Найдено: <span class="text-[#00ffe0] font-medium">{{ filteredTournaments.length }}</span> турниров
          </span>
        </div>
      </div>

      <!-- Tournaments Grid -->
      <div class="grid grid-cols-3 gap-4 mb-4">
        <TournamentCard 
          v-for="(tournament, index) in filteredTournaments" 
          :key="tournament.id"
          :tournament="tournament"
          :is-featured="index === 2"
        />
      </div>

      <!-- Load More Button -->
      <div class="flex justify-center pt-4">
        <button class="bg-[#1e2939] border border-[#364153] rounded-[10px] px-8 py-3 text-[14.5px] text-white leading-[24px]">
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

// Game options for dropdown
const gameOptions = [
  { label: 'Все игры', value: '' },
  { label: 'Soulcalibur VI', value: 'Soulcalibur VI' },
  { label: 'Counter-Strike 2', value: 'Counter-Strike 2' },
  { label: 'Dota 2', value: 'Dota 2' },
  { label: 'Valorant', value: 'Valorant' },
  { label: 'League of Legends', value: 'League of Legends' }
]

// Game images from Figma
const gameImages = {
  'Soulcalibur VI': 'http://localhost:3845/assets/04ae138ca535efac6364e2aef8861940905afd52.png',
  'Counter-Strike 2': 'http://localhost:3845/assets/b890c61489a080992ad7e99adabb1145e6d59606.png',
  'Dota 2': 'http://localhost:3845/assets/edb346e5c89bf40002647fa0950f13b3c315d1e7.png',
  'Valorant': 'http://localhost:3845/assets/44c786423fd72e67c98aa1a1f3764001cb6b98df.png',
  'League of Legends': 'http://localhost:3845/assets/860dc6bc2b9ea67637fbb0b3b403e100cabd221b.png'
}

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
    image: gameImages['Soulcalibur VI']
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
    image: gameImages['Counter-Strike 2']
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
    image: gameImages['Dota 2'],
    featured: true
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
    image: gameImages['Valorant']
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
    image: gameImages['League of Legends']
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
    image: gameImages['Counter-Strike 2']
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
    image: gameImages['Dota 2']
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
