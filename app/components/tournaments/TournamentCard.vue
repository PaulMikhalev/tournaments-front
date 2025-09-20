<template>
  <NuxtLink :to="`/tournaments/${tournament.id}`" class="block">
    <UCard 
      class="bg-[#1e2939] border-[#364153] hover:border-[rgba(46,221,199,0.55)] hover:shadow-[0px_9.086px_13.629px_-2.726px_rgba(0,255,224,0.09),0px_3.634px_5.452px_-3.634px_rgba(0,255,224,0.09)] transition-all duration-300 group cursor-pointer"
      :ui="{
        root: 'rounded-[14px]',
        body: 'p-6'
      }"
    >
      <!-- Header with Game Image and Info -->
      <div class="flex justify-between items-start mb-4">
        <div class="flex items-center">
          <!-- Game Image -->
          <div class="w-12 h-12 bg-[#364153] rounded-[10px] overflow-hidden mr-3">
            <img 
              :src="tournament.image" 
              :alt="tournament.game"
              class="w-full h-full object-cover"
            />
          </div>
          
          <!-- Tournament Info -->
          <div>
            <h3 class="text-[15px] leading-[24px] font-semibold transition-colors duration-300 text-white group-hover:text-[#00ffe0]">
              {{ tournament.title }}
            </h3>
            <p class="text-[13.125px] leading-[20px] text-[#99a1af]">
              {{ tournament.game }}
            </p>
          </div>
        </div>
        
        <!-- Status Badge -->
        <div 
          class="px-2 py-1 rounded-[8px] text-[11.063px] leading-[16px] font-medium"
          :class="statusBadgeClass"
        >
          {{ statusText }}
        </div>
      </div>
      
      <!-- Tournament Details -->
      <div class="flex flex-col gap-3 mb-4">
        <!-- Date -->
        <div class="flex items-center">
          <svg class="w-4 h-4 mr-2" viewBox="0 0 16 16" fill="none">
            <path d="M5.33 1.33V4" stroke="#99A1AF" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.67 1.33V4" stroke="#99A1AF" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 6.67H14" stroke="#99A1AF" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 14.67V4C2 3.6 2.4 3.33 2.67 3.33H13.33C13.6 3.33 14 3.6 14 4V14.67H2Z" stroke="#99A1AF" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-[13.016px] leading-[20px] text-[#d1d5dc]">{{ tournament.date }}</span>
        </div>
        
        <!-- Prize -->
        <div class="flex items-center">
          <svg class="w-4 h-4 mr-2" viewBox="0 0 16 16" fill="none">
            <path d="M4.67 9.77H6.67V14.65H4.67V9.77Z" stroke="#F0B100" stroke-width="1.33"/>
            <path d="M9.33 9.77H11.33V14.65H9.33V9.77Z" stroke="#F0B100" stroke-width="1.33"/>
            <path d="M12 2.67H14.67V6H12V2.67Z" stroke="#F0B100" stroke-width="1.33"/>
            <path d="M2.67 14.67H13.33" stroke="#F0B100" stroke-width="1.33"/>
            <path d="M4 1.33H12V10H4V1.33Z" stroke="#F0B100" stroke-width="1.33"/>
            <path d="M1.33 2.67H4V6H1.33V2.67Z" stroke="#F0B100" stroke-width="1.33"/>
          </svg>
          <span class="text-[12.141px] leading-[20px] font-medium text-[#00ffe0]">{{ tournament.prize }}</span>
        </div>
        
        <!-- Participants -->
        <div class="flex items-center">
          <svg class="w-4 h-4 mr-2" viewBox="0 0 16 16" fill="none">
            <path d="M1.33 10H10.67V14H1.33V10Z" stroke="#99A1AF" stroke-width="1.33"/>
            <path d="M10.67 2.09V7.25" stroke="#99A1AF" stroke-width="1.33"/>
            <path d="M12.67 10.09V13.91" stroke="#99A1AF" stroke-width="1.33"/>
            <path d="M3.33 2H8.67V7.33H3.33V2Z" stroke="#99A1AF" stroke-width="1.33"/>
          </svg>
          <span class="text-[13.344px] leading-[20px] text-[#d1d5dc]">{{ tournament.participants }}/{{ tournament.maxParticipants }} участников</span>
        </div>
      </div>
      
      <!-- Progress Section -->
      <div class="flex flex-col gap-1">
        <div class="flex justify-between">
          <span class="text-[11.25px] leading-[16px] text-[#99a1af]">Заполнено</span>
          <span class="text-[11.438px] leading-[16px] text-[#99a1af]">{{ tournament.progress }}%</span>
        </div>
        <div class="bg-[#364153] h-2 rounded-full">
          <div 
            class="bg-[#00ffe0] h-2 rounded-full transition-all duration-300"
            :style="{ width: `${tournament.progress}%` }"
          />
        </div>
      </div>
    </UCard>
  </NuxtLink>
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
  featured?: boolean
}

const props = defineProps<{
  tournament: Tournament
}>()

const statusBadgeClass = computed(() => {
  switch (props.tournament.status) {
    case 'live':
      return 'bg-[#fb2c36] text-white'
    case 'registration':
      return 'bg-[#00ffe0] text-black'
    case 'upcoming':
      return 'bg-[#f0b100] text-black'
    default:
      return 'bg-[#364153] text-[#99a1af]'
  }
})

const statusText = computed(() => {
  switch (props.tournament.status) {
    case 'live':
      return 'Live'
    case 'registration':
      return 'Идет регистрация'
    case 'upcoming':
      return 'Скоро'
    default:
      return 'Неизвестно'
  }
})
</script>