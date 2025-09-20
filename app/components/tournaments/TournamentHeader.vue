<template>
  <section class="bg-[#101828] border-b border-[#1e2939]">
    <div class="px-4 lg:px-[208.5px] py-4">
      <!-- Back Navigation -->
      <div class="mb-4">
        <NuxtLink 
          to="/tournaments"
          class="inline-flex items-center gap-3 px-3 py-2 text-[16px] leading-[20px] text-[#d1d5dc] hover:text-white transition-colors duration-200 bg-[#1e2939] rounded-lg"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Назад к турнирам
        </NuxtLink>
      </div>

      <!-- Tournament Banner -->
      <div class="flex flex-col lg:flex-row gap-6">
        <!-- Tournament Image -->
        <div class="w-full lg:w-[256px] h-[192px] bg-[#1e2939] rounded-lg overflow-hidden flex-shrink-0">
          <img 
            :src="tournament.image" 
            :alt="tournament.game"
            class="w-full h-full object-cover"
          />
        </div>
        
        <!-- Tournament Info -->
        <div class="flex-1">
          <!-- Header with Status and Actions -->
          <div class="flex items-start justify-between mb-6">
            <div class="flex-1">
              <!-- Status Badge -->
              <div class="mb-2">
                <span 
                  :class="statusBadgeClass"
                  class="inline-block px-2 py-1 text-[12px] font-medium rounded"
                >
                  {{ statusText }}
                </span>
              </div>
              
              <!-- Tournament Title -->
              <h1 class="text-[32px] leading-[36px] font-bold text-white mb-2">
                {{ tournament.title }}
              </h1>
              
              <!-- Game Name -->
              <div class="text-[20px] leading-[28px] text-[#d1d5dc]">
                {{ tournament.game }}
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex items-center gap-2 ml-4">
              <button class="w-8 h-8 flex items-center justify-center bg-[#1e2939] hover:bg-[#374151] rounded transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 1.5L10 5L13.5 5.5L10.75 8.25L11.5 12L8.5 10L5.5 12L6.25 8.25L3.5 5.5L7 5L8.5 1.5Z" stroke="#d1d5dc" stroke-width="1" fill="none"/>
                </svg>
              </button>
              <button class="w-8 h-8 flex items-center justify-center bg-[#1e2939] hover:bg-[#374151] rounded transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12L6 8L10 4" stroke="#d1d5dc" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Tournament Details Grid -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <!-- Date -->
            <div class="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.33 1.33V4" stroke="#99A1AF" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.67 1.33V4" stroke="#99A1AF" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 6.67H14" stroke="#99A1AF" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 14.67V4C2 3.6 2.4 3.33 2.67 3.33H13.33C13.6 3.33 14 3.6 14 4V14.67H2Z" stroke="#99A1AF" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-[16px] leading-[20px] text-[#99a1af]">{{ tournament.date }}</span>
            </div>
            
            <!-- Time -->
            <div class="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="6" stroke="#99A1AF" stroke-width="1.33"/>
                <path d="M8 4V8L10.5 10.5" stroke="#99A1AF" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-[16px] leading-[20px] text-[#99a1af]">{{ tournament.time || '19:00 MSK' }}</span>
            </div>
            
            <!-- Prize -->
            <div class="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.67 9.77H6.67V14.65H4.67V9.77Z" stroke="#F0B100" stroke-width="1.33"/>
                <path d="M9.33 9.77H11.33V14.65H9.33V9.77Z" stroke="#F0B100" stroke-width="1.33"/>
                <path d="M12 2.67H14.67V6H12V2.67Z" stroke="#F0B100" stroke-width="1.33"/>
                <path d="M2.67 14.67H13.33" stroke="#F0B100" stroke-width="1.33"/>
                <path d="M4 1.33H12V10H4V1.33Z" stroke="#F0B100" stroke-width="1.33"/>
                <path d="M1.33 2.67H4V6H1.33V2.67Z" stroke="#F0B100" stroke-width="1.33"/>
              </svg>
              <span class="text-[16px] leading-[20px] text-[#99a1af]">{{ tournament.prize }}</span>
            </div>
            
            <!-- Participants -->
            <div class="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 7C12.1046 7 13 6.10457 13 5C13 3.89543 12.1046 3 11 3C9.89543 3 9 3.89543 9 5C9 6.10457 9.89543 7 11 7Z" stroke="#99A1AF" stroke-width="1.33"/>
                <path d="M5 7C6.10457 7 7 6.10457 7 5C7 3.89543 6.10457 3 5 3C3.89543 3 3 3.89543 3 5C3 6.10457 3.89543 7 5 7Z" stroke="#99A1AF" stroke-width="1.33"/>
                <path d="M11 9H15V13H11" stroke="#99A1AF" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 9H5V13H1" stroke="#99A1AF" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-[16px] leading-[20px] text-[#99a1af]">{{ tournament.participants }}/{{ tournament.maxParticipants }} команд</span>
            </div>
          </div>
          
          <!-- Description -->
          <div class="text-[16px] leading-[24px] text-[#99a1af] max-w-4xl">
            {{ tournament.description }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Tournament {
  id: number
  title: string
  game: string
  date: string
  time?: string
  prize: string
  participants: number
  maxParticipants: number
  status: 'live' | 'registration' | 'upcoming' | 'completed'
  progress: number
  image: string
  description: string
}

const props = defineProps<{
  tournament: Tournament
}>()

const statusBadgeClass = computed(() => {
  switch (props.tournament.status) {
    case 'live':
      return 'bg-[#dc2626] text-white'
    case 'registration':
      return 'bg-[#00ffe0] text-[#101828]'
    case 'upcoming':
      return 'bg-[#f59e0b] text-white'
    default:
      return 'bg-[#6b7280] text-white'
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
