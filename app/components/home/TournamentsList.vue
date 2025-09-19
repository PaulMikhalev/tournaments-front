<template>
  <!-- Filters and Search Bar -->
  <section class="bg-mirage-50 border-b border-oxford py-6 px-[208.5px] mb-8">
    <div class="max-w-[1536px] mx-auto px-6">
       <div class="flex items-center gap-4">
         <!-- Left Side - Game Filter and Search -->
         <div class="flex items-center gap-4 flex-1">
           <!-- Game Filter Dropdown -->
           <div class="w-64">
             <USelect
               v-model="selectedGame"
               :options="gameOptions"
               placeholder="Все игры"
               size="sm"
               color="white"
               variant="outline"
               :ui="{
                 base: 'h-9 text-[12.8px] leading-[1.563]',
                 background: 'bg-mine-shaft-30',
                 color: {
                   white: {
                     outline: 'shadow-sm bg-mine-shaft-30 text-silver-chalice ring-1 ring-inset ring-river-bed focus:ring-2 focus:ring-gray-chateau'
                   }
                 },
                 placeholder: 'text-silver-chalice'
               }"
             />
           </div>
           
           <!-- Search Input -->
           <div class="flex-1 max-w-md">
             <UInput
               v-model="searchQuery"
               placeholder="Поиск турниров..."
               icon="i-heroicons-magnifying-glass"
               size="sm"
               color="white"
               variant="outline"
               :ui="{
                 base: 'h-9 text-[12.9px] leading-[1.21]',
                 background: 'bg-mine-shaft-30',
                 color: {
                   white: {
                     outline: 'shadow-sm bg-mine-shaft-30 text-gray-chateau ring-1 ring-inset ring-river-bed focus:ring-2 focus:ring-gray-chateau placeholder-gray-chateau'
                   }
                 },
                 icon: {
                   leading: {
                     wrapper: 'absolute inset-y-0 start-0 flex items-center',
                     pointer: 'pointer-events-none',
                     padding: 'ps-3'
                   }
                 }
               }"
             />
           </div>
         </div>
         
         <!-- Right Side - Filters Button -->
         <UButton
           color="white"
           variant="outline"
           size="sm"
           icon="i-heroicons-adjustments-horizontal"
           :ui="{
             base: 'h-9 text-[13.23px] leading-[1.511] font-medium',
             background: 'bg-mine-shaft-30',
             color: {
               white: {
                 outline: 'shadow-sm bg-mine-shaft-30 text-mischka ring-1 ring-inset ring-mine-shaft hover:bg-mine-shaft/50'
               }
             }
           }"
         >
           Фильтры
         </UButton>
       </div>
    </div>
  </section>

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

      

      <!-- Tournaments Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <TournamentCard 
          v-for="(tournament, index) in filteredTournaments" 
          :key="tournament.id"
          :tournament="tournament"
          :is-featured="index === 2"
        />
      </div>

      <!-- Load More Button -->
      <div class="flex justify-center pt-4">
        <UButton
          color="white"
          variant="outline"
          size="md"
          :ui="{
            base: 'text-[14.5px] leading-[1.655]',
            padding: 'px-8 py-3',
            rounded: 'rounded-[10px]',
            color: {
              white: {
                outline: 'shadow-sm bg-mirage text-white ring-1 ring-inset ring-oxford hover:bg-oxford'
              }
            }
          }"
        >
          Загрузить еще
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import TournamentCard from '~/components/tournaments/TournamentCard.vue'

// Reactive variables for filtering and search
const selectedGame = ref('')
const searchQuery = ref('')

// Game options for USelect
const gameOptions = [
  { label: 'Все игры', value: '' },
  { label: 'Soulcalibur VI', value: 'Soulcalibur VI' },
  { label: 'Counter-Strike 2', value: 'Counter-Strike 2' },
  { label: 'Dota 2', value: 'Dota 2' },
  { label: 'Valorant', value: 'Valorant' },
  { label: 'League of Legends', value: 'League of Legends' }
]

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
