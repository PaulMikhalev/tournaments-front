<template>
  <section class="bg-ebony border-b border-oxford">
    <div class="max-w-[1536px] mx-auto px-4 lg:px-[208.5px] py-8">
      <!-- Back Navigation -->
      <div class="mb-6">
        <NuxtLink 
          to="/"
          class="inline-flex items-center gap-2 text-[14.5px] leading-[1.66] text-mischka hover:text-white transition-colors duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Назад к турнирам
        </NuxtLink>
      </div>

      <!-- Tournament Header Info -->
      <div class="flex items-start justify-between">
        <!-- Left Side - Main Info -->
        <div class="flex items-start gap-6">
          <!-- Game Image -->
          <div class="w-20 h-20 bg-oxford rounded-[14px] overflow-hidden">
            <img 
              :src="tournament.image" 
              :alt="tournament.game"
              class="w-full h-full object-cover"
            />
          </div>
          
          <!-- Tournament Details -->
          <div class="flex flex-col gap-3">
            <!-- Tournament Title -->
            <h1 class="text-[29.06px] leading-[1.239] font-bold text-white">
              {{ tournament.title }}
            </h1>
            
            <!-- Game and Status -->
            <div class="flex items-center gap-4">
              <span class="text-[14.75px] leading-[1.627] text-gray-chateau">{{ tournament.game }}</span>
              <UBadge
                :label="statusText"
                :color="statusBadgeColor"
                :variant="statusBadgeVariant"
                size="sm"
                :ui="{
                  base: 'text-[12.14px] leading-[1.647] font-medium',
                  rounded: 'rounded-lg',
                  size: {
                    sm: 'px-3 py-1'
                  }
                }"
              />
            </div>
            
            <!-- Date and Prize -->
            <div class="flex items-center gap-6">
              <!-- Date -->
              <div class="flex items-center gap-2">
                <div class="w-4 h-4">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.33 1.33V4" stroke="#99A1AF" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.67 1.33V4" stroke="#99A1AF" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 6.67H14" stroke="#99A1AF" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 14.67V4C2 3.6 2.4 3.33 2.67 3.33H13.33C13.6 3.33 14 3.6 14 4V14.67H2Z" stroke="#99A1AF" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <span class="text-[14.75px] leading-[1.627] text-mischka">{{ tournament.date }}</span>
              </div>
              
              <!-- Prize -->
              <div class="flex items-center gap-2">
                <div class="w-4 h-4">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.67 9.77H6.67V14.65H4.67V9.77Z" stroke="#F0B100" stroke-width="1.33"/>
                    <path d="M9.33 9.77H11.33V14.65H9.33V9.77Z" stroke="#F0B100" stroke-width="1.33"/>
                    <path d="M12 2.67H14.67V6H12V2.67Z" stroke="#F0B100" stroke-width="1.33"/>
                    <path d="M2.67 14.67H13.33" stroke="#F0B100" stroke-width="1.33"/>
                    <path d="M4 1.33H12V10H4V1.33Z" stroke="#F0B100" stroke-width="1.33"/>
                    <path d="M1.33 2.67H4V6H1.33V2.67Z" stroke="#F0B100" stroke-width="1.33"/>
                  </svg>
                </div>
                <span class="text-[15.125px] leading-[1.587] font-semibold text-cyan-400">{{ tournament.prize }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Share Button -->
        <UButton
          color="white"
          variant="outline"
          size="sm"
          icon="i-heroicons-share"
          :ui="{
            base: 'h-9 text-[13.78px] leading-[1.45] font-medium',
            padding: 'px-3 py-2',
            gap: 'gap-2',
            color: {
              white: {
                outline: 'shadow-sm bg-mine-shaft-30 text-mischka ring-1 ring-inset ring-mine-shaft hover:bg-mine-shaft/50'
              }
            }
          }"
        >
          Поделиться
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  tournament: {
    type: Object,
    required: true
  }
})

const statusBadgeColor = computed(() => {
  switch (props.tournament.status) {
    case 'live':
      return 'red'
    case 'registration':
      return 'cyan'
    case 'upcoming':
      return 'yellow'
    default:
      return 'gray'
  }
})

const statusBadgeVariant = computed(() => {
  return 'solid'
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
