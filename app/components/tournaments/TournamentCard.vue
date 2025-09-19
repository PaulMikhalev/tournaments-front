<template>
  <div 
    class="w-[480px] bg-mirage border border-oxford rounded-[14px] p-1"
    :class="{ 
      'border-turquoise-55 shadow-tournament': isFeatured,
      'border-oxford': !isFeatured 
    }"
  >
    <div class="p-6 flex flex-col gap-4">
      <!-- Header with Game Image and Info -->
      <div class="flex justify-between items-start">
        <div class="flex items-center gap-3">
          <!-- Game Image -->
          <div class="w-12 h-12 bg-oxford rounded-[10px] overflow-hidden">
            <img 
              :src="tournament.image" 
              :alt="tournament.game"
              class="w-full h-full object-cover"
            />
          </div>
          
          <!-- Tournament Info -->
          <div class="flex flex-col gap-1">
            <h3 class="text-[15.125px] leading-[1.587] font-semibold text-white" :class="{ 'text-cyan-400': isFeatured }">
              {{ tournament.title }}
            </h3>
            <p class="text-[11.06px] leading-[1.446] text-gray-chateau">
              {{ tournament.game }}
            </p>
          </div>
        </div>
        
        <!-- Status Badge -->
        <div 
          class="px-2 py-1 rounded-lg text-[12.14px] leading-[1.647] font-medium"
          :class="statusBadgeClasses"
        >
          {{ statusText }}
        </div>
      </div>
      
      <!-- Tournament Details -->
      <div class="flex flex-col gap-3">
        <!-- Date -->
        <div class="flex items-center gap-2">
          <div class="w-4 h-4">
            <!-- Calendar Icon -->
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.33 1.33V4" stroke="#99A1AF" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.67 1.33V4" stroke="#99A1AF" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 6.67H14" stroke="#99A1AF" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 14.67V4C2 3.6 2.4 3.33 2.67 3.33H13.33C13.6 3.33 14 3.6 14 4V14.67H2Z" stroke="#99A1AF" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <span class="text-[11.06px] leading-[1.446] text-mischka">{{ tournament.date }}</span>
        </div>
        
        <!-- Prize -->
        <div class="flex items-center gap-2">
          <div class="w-4 h-4">
            <!-- Trophy Icon -->
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.67 9.77H6.67V14.65H4.67V9.77Z" stroke="#F0B100" stroke-width="1.33"/>
              <path d="M9.33 9.77H11.33V14.65H9.33V9.77Z" stroke="#F0B100" stroke-width="1.33"/>
              <path d="M12 2.67H14.67V6H12V2.67Z" stroke="#F0B100" stroke-width="1.33"/>
              <path d="M2.67 14.67H13.33" stroke="#F0B100" stroke-width="1.33"/>
              <path d="M4 1.33H12V10H4V1.33Z" stroke="#F0B100" stroke-width="1.33"/>
              <path d="M1.33 2.67H4V6H1.33V2.67Z" stroke="#F0B100" stroke-width="1.33"/>
            </svg>
          </div>
          <span class="text-[12.14px] leading-[1.647] font-medium text-cyan-400">{{ tournament.prize }}</span>
        </div>
        
        <!-- Participants -->
        <div class="flex items-center gap-2">
          <div class="w-4 h-4">
            <!-- Users Icon -->
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.33 10H10.67V14H1.33V10Z" stroke="#99A1AF" stroke-width="1.33"/>
              <path d="M10.67 2.09V7.25" stroke="#99A1AF" stroke-width="1.33"/>
              <path d="M12.67 10.09V13.91" stroke="#99A1AF" stroke-width="1.33"/>
              <path d="M3.33 2H8.67V7.33H3.33V2Z" stroke="#99A1AF" stroke-width="1.33"/>
            </svg>
          </div>
          <span class="text-[11.06px] leading-[1.446] text-mischka">{{ tournament.participants }}/{{ tournament.maxParticipants }} участников</span>
        </div>
      </div>
      
      <!-- Progress Section -->
      <div class="flex flex-col gap-1">
        <div class="flex justify-between">
          <span class="text-[11.06px] leading-[1.446] text-gray-chateau">Заполнено</span>
          <span class="text-[11.06px] leading-[1.446] text-gray-chateau">{{ tournament.progress }}%</span>
        </div>
        <div class="w-full h-2 bg-oxford rounded-full overflow-hidden">
          <div 
            class="h-full bg-cyan-400 rounded-full transition-all duration-300"
            :style="{ width: `${tournament.progress}%` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tournament: {
    type: Object,
    required: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  }
})

const statusBadgeClasses = computed(() => {
  switch (props.tournament.status) {
    case 'live':
      return 'bg-red-orange text-white'
    case 'registration':
      return 'bg-cyan-400 text-black'
    case 'upcoming':
      return 'bg-selective-yellow text-black'
    default:
      return 'bg-oxford text-gray-chateau'
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