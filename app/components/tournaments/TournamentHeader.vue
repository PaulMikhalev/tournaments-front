<template>
  <section class="bg-[#101828] border-b border-[#1e2939]">
    <div class="px-4 lg:px-[208.5px] py-4">
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
              <UButton class="size-8 bg-[#1e2939] hover:bg-[#374151] rounded text-[#99a1af]" icon="i-heroicons-share"/>
            </div>
          </div>
          
          <!-- Tournament Details Grid -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <!-- Date -->
            <div class="flex items-center gap-2">
              <UIcon class="size-6" name="i-heroicons-calendar-20-solid" />
              <span class="text-[16px] leading-[20px] text-[#99a1af]">{{ tournament.date }}</span>
            </div>
            
            <!-- Time -->
            <div class="flex items-center gap-2">
              <UIcon class="size-6" name="i-heroicons-clock" />
              <span class="text-[16px] leading-[20px] text-[#99a1af]">{{ tournament.time || '19:00 MSK' }}</span>
            </div>
            
            <!-- Prize -->
            <div class="flex items-center gap-2">
              <UIcon class="size-6" name="i-heroicons-trophy"/>
              <span class="text-[16px] leading-[20px] text-[#99a1af]">{{ tournament.prize || '0' }}</span>
            </div>
            
            <!-- Participants -->
            <div class="flex items-center gap-2">
              <UIcon class="size-6" name="i-heroicons-users-16-solid" />
              <span class="text-[16px] leading-[20px] text-[#99a1af]">{{ tournament.participants }}/{{ tournament.maxParticipants }} участников</span>
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
import type { TournamentView, TournamentStatus } from '~/types/tournament'

const props = defineProps<{
  tournament: TournamentView
}>()

const statusBadgeClass = computed(() => {
  switch (props.tournament.status?.toLowerCase() as TournamentStatus) {
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
  switch (props.tournament.status?.toLowerCase() as TournamentStatus) {
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
