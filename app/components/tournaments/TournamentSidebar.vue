<template>
  <div class="space-y-6">
    <!-- Join Tournament Card -->
    <div class="bg-mirage rounded-[14px] p-6">
      <!-- Progress Section -->
      <div class="mb-6">
        <div class="flex justify-between items-center mb-2">
          <span class="text-[13.02px] leading-[1.537] text-gray-chateau">Участников</span>
          <span class="text-[13.02px] leading-[1.537] text-white">
            {{ tournament.participants }}/{{ tournament.maxParticipants }}
          </span>
        </div>
        <UProgress
          :value="progressPercentage"
          :max="100"
          color="cyan"
          :ui="{
            base: 'w-full h-2 mb-1',
            track: 'bg-oxford rounded-full',
            progress: 'bg-cyan-400 rounded-full transition-all duration-300'
          }"
        />
        <div class="text-right">
          <span class="text-[11.06px] leading-[1.446] text-gray-chateau">{{ progressPercentage }}% заполнено</span>
        </div>
      </div>

      <!-- Join Button -->
      <UButton
        v-if="tournament.status === 'registration'"
        color="cyan"
        variant="solid"
        size="lg"
        class="w-full mb-4"
        :ui="{
          base: 'h-12 text-[14.5px] leading-[1.66] font-medium',
          padding: 'px-6 py-3',
          color: {
            cyan: {
              solid: 'shadow-sm text-black bg-cyan-400 hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400'
            }
          }
        }"
      >
        Принять участие
      </UButton>

      <!-- Tournament Status Info -->
      <div v-else-if="tournament.status === 'live'" class="mb-4">
        <UBadge
          label="Турнир идет"
          color="red"
          variant="solid"
          size="md"
          class="w-full justify-center"
          :ui="{
            base: 'text-[14.5px] leading-[1.66] font-medium',
            rounded: 'rounded-lg',
            size: {
              md: 'px-4 py-3'
            }
          }"
        />
      </div>

      <div v-else-if="tournament.status === 'upcoming'" class="mb-4">
        <UBadge
          label="Скоро начнется"
          color="yellow"
          variant="solid"
          size="md"
          class="w-full justify-center"
          :ui="{
            base: 'text-[14.5px] leading-[1.66] font-medium',
            rounded: 'rounded-lg',
            size: {
              md: 'px-4 py-3'
            }
          }"
        />
      </div>

      <!-- Entry Fee Info -->
      <div class="text-center">
        <p class="text-[11.06px] leading-[1.446] text-gray-chateau">
          Вступительный взнос: <span class="text-white font-medium">Бесплатно</span>
        </p>
      </div>
    </div>

    <!-- Tournament Info Card -->
    <div class="bg-mirage rounded-[14px] p-6">
      <h3 class="text-[15.125px] leading-[1.587] font-semibold text-white mb-4">
        Информация о турнире
      </h3>
      
      <div class="space-y-3">
        <!-- Start Date -->
        <div class="flex justify-between items-center py-2 border-b border-oxford">
          <span class="text-[13.02px] leading-[1.537] text-gray-chateau">Начало:</span>
          <span class="text-[13.02px] leading-[1.537] text-white">{{ tournament.date }}</span>
        </div>
        
        <!-- Prize Pool -->
        <div class="flex justify-between items-center py-2 border-b border-oxford">
          <span class="text-[13.02px] leading-[1.537] text-gray-chateau">Призовой фонд:</span>
          <span class="text-[13.02px] leading-[1.537] font-semibold text-cyan-400">{{ tournament.prize }}</span>
        </div>
        
        <!-- Format -->
        <div class="flex justify-between items-center py-2 border-b border-oxford">
          <span class="text-[13.02px] leading-[1.537] text-gray-chateau">Формат:</span>
          <span class="text-[13.02px] leading-[1.537] text-white">{{ tournament.format || 'Одиночная элиминация' }}</span>
        </div>
        
        <!-- Platform -->
        <div class="flex justify-between items-center py-2 border-b border-oxford">
          <span class="text-[13.02px] leading-[1.537] text-gray-chateau">Платформа:</span>
          <span class="text-[13.02px] leading-[1.537] text-white">{{ tournament.platform || 'PC' }}</span>
        </div>
        
        <!-- Region -->
        <div class="flex justify-between items-center py-2">
          <span class="text-[13.02px] leading-[1.537] text-gray-chateau">Регион:</span>
          <span class="text-[13.02px] leading-[1.537] text-white">{{ tournament.region || 'Европа' }}</span>
        </div>
      </div>
    </div>

    <!-- Organizer Card -->
    <div class="bg-mirage rounded-[14px] p-6">
      <h3 class="text-[15.125px] leading-[1.587] font-semibold text-white mb-4">
        Организатор
      </h3>
      
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-oxford rounded-full flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.17 12.5H15.83V17.5H4.17V12.5Z" stroke="#00FFE0" stroke-width="1.67"/>
            <path d="M6.67 2.5H13.33V9.17H6.67V2.5Z" stroke="#00FFE0" stroke-width="1.67"/>
          </svg>
        </div>
        <div>
          <p class="text-[14.75px] leading-[1.627] font-medium text-white">
            {{ tournament.organizer || 'CyberTournaments' }}
          </p>
          <p class="text-[11.06px] leading-[1.446] text-gray-chateau">
            Организатор турнира
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Tournament {
  id: number
  title: string
  game: string
  date: string
  prize: string
  participants: number
  maxParticipants: number
  status: 'live' | 'registration' | 'upcoming' | 'completed'
  progress: number
  image: string
  format?: string
  platform?: string
  region?: string
  organizer?: string
}

const props = defineProps<{
  tournament: Tournament
}>()

const progressPercentage = computed(() => {
  return Math.round((props.tournament.participants / props.tournament.maxParticipants) * 100)
})
</script>
