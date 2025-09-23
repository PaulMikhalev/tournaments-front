<template>
  <div>
    <!-- Filters Section -->
    <TournamentFilters 
      :search-query="searchQuery"
      @update:search-query="searchQuery = $event"
    />

    <!-- Tournaments Section -->
    <section class="bg-[#101828] px-[184.5px] py-[48px]">
      <div class="max-w-[1536px] mx-auto px-6">
        <!-- Section Header -->
        <TournamentSectionHeader
          title="Активные турниры"
          description="Присоединяйтесь к турнирам и сражайтесь за призы"
          :count="filteredTournaments.length"
        />

        <!-- States: Loading, Error, Empty -->
        <TournamentStates
          :is-loading="isLoading"
          :error="error"
          :tournaments="filteredTournaments"
          @retry="loadTournaments"
        />

        <!-- Tournaments Grid -->
        <div v-if="!isLoading && !error && filteredTournaments.length > 0" class="grid grid-cols-3 gap-4 mb-4">
          <TournamentCard 
            v-for="tournament in filteredTournaments" 
            :key="tournament.id"
            :tournament="tournament"
          />
        </div>

        <!-- Load More Button -->
        <div v-if="!isLoading && !error && filteredTournaments.length > 0" class="flex justify-center pt-4">
          <button 
            @click="loadTournaments"
            class="bg-[#1e2939] border border-[#364153] rounded-[10px] px-8 py-3 text-[14.5px] text-white leading-[24px] hover:bg-[#2a3441] transition-colors"
          >
            Обновить список
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import TournamentCard from '~/components/tournaments/TournamentCard.vue'
import TournamentFilters from '~/components/tournaments/TournamentFilters.vue'
import TournamentStates from '~/components/tournaments/TournamentStates.vue'
import TournamentSectionHeader from '~/components/tournaments/TournamentSectionHeader.vue'
import { useTournaments } from '~/composables/useTournaments'
import { useTournamentFilters } from '~/composables/useTournamentFilters'

// Используем composables для логики
const { tournaments, isLoading, error, loadTournaments } = useTournaments()
const { searchQuery, filterTournaments } = useTournamentFilters()

// Computed для отфильтрованных турниров
const filteredTournaments = computed(() => filterTournaments(tournaments.value))

// Загружаем турниры при монтировании
onMounted(async () => {
  await loadTournaments()
})
</script>
