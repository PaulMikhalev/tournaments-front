<template>
  <div class="group relative bg-mirage/50 border border-oxford/50 rounded-2xl xs:rounded-3xl overflow-hidden hover:border-primary-500/50 transition-all duration-300 hover:scale-[1.02]">
    <!-- Tournament Image -->
    <div class="relative h-48 xs:h-52 sm:h-56 md:h-60 lg:h-64 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-t from-ebony/80 via-transparent to-transparent z-10"></div>
      <img 
        :src="tournament.image" 
        :alt="tournament.title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        @error="handleImageError"
      />
      
      <!-- Status Badge -->
      <div class="absolute top-4 right-4 z-20">
        <span 
          class="px-3 py-1 rounded-full text-sm font-medium"
          :class="statusClasses"
        >
          {{ statusText }}
        </span>
      </div>
      
      <!-- Game Badge -->
      <div class="absolute top-4 left-4 z-20">
        <span class="px-3 py-1 bg-primary-600/90 text-white rounded-full text-sm font-medium backdrop-blur-sm">
          {{ tournament.game }}
        </span>
      </div>
    </div>

    <!-- Card Content -->
    <div class="p-6 xs:p-7 sm:p-8">
      <!-- Tournament Title -->
      <h3 class="text-xl xs:text-2xl sm:text-3xl font-bold text-white mb-4 xs:mb-5 sm:mb-6 group-hover:text-primary-400 transition-colors duration-300">
        {{ tournament.title }}
      </h3>

      <!-- Tournament Info -->
      <div class="space-y-3 xs:space-y-4 mb-6 xs:mb-7 sm:mb-8">
        <!-- Date & Time -->
        <div class="flex items-center gap-3 text-white/70">
          <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <span class="text-sm xs:text-base">{{ formattedDate }} в {{ tournament.time }}</span>
        </div>

        <!-- Prize -->
        <div class="flex items-center gap-3 text-white/70">
          <svg class="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
          </svg>
          <span class="text-sm xs:text-base font-semibold text-yellow-400">{{ tournament.prize }}</span>
        </div>

        <!-- Participants -->
        <div class="flex items-center gap-3 text-white/70">
          <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <span class="text-sm xs:text-base">{{ tournament.participants }}/{{ tournament.maxParticipants }} участников</span>
        </div>
      </div>

      <!-- Action Button -->
      <NuxtLink
        :to="`/tournaments/${tournament.id}`"
        class="w-full inline-flex items-center justify-center px-6 py-3 xs:py-4 text-base xs:text-lg font-semibold rounded-xl transition-all duration-300"
        :class="buttonClasses"
      >
        {{ buttonText }}
        <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </NuxtLink>
    </div>

    <!-- Hover Glow Effect -->
    <div class="absolute inset-0 bg-gradient-to-r from-primary-600/0 via-primary-600/5 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  tournament: {
    type: Object,
    required: true
  }
})

// Format date
const formattedDate = computed(() => {
  const date = new Date(props.tournament.date)
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long'
  })
})

// Status classes and text
const statusClasses = computed(() => {
  switch (props.tournament.status) {
    case 'open':
      return 'bg-green-600/90 text-white backdrop-blur-sm'
    case 'full':
      return 'bg-red-600/90 text-white backdrop-blur-sm'
    case 'closed':
      return 'bg-gray-600/90 text-white backdrop-blur-sm'
    default:
      return 'bg-primary-600/90 text-white backdrop-blur-sm'
  }
})

const statusText = computed(() => {
  switch (props.tournament.status) {
    case 'open':
      return 'Открыт'
    case 'full':
      return 'Заполнен'
    case 'closed':
      return 'Закрыт'
    default:
      return 'Активен'
  }
})

// Button classes and text
const buttonClasses = computed(() => {
  switch (props.tournament.status) {
    case 'open':
      return 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl'
    case 'full':
      return 'bg-gray-600 text-white cursor-not-allowed'
    case 'closed':
      return 'bg-gray-600 text-white cursor-not-allowed'
    default:
      return 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl'
  }
})

const buttonText = computed(() => {
  switch (props.tournament.status) {
    case 'open':
      return 'Участвовать'
    case 'full':
      return 'Мест нет'
    case 'closed':
      return 'Закрыт'
    default:
      return 'Подробнее'
  }
})

// Handle image error
const handleImageError = (event) => {
  event.target.src = '/banner-placeholder.png'
}
</script>
