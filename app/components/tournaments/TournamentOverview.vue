<template>
  <!-- Tournament Bracket Tab -->
  <TournamentBracket v-if="activeTab === 'bracket'" />
  
  <!-- Stream Tab Content -->
  <div v-else-if="activeTab === 'stream'" class="space-y-6">
    <div class="bg-[#1e2939] rounded-lg p-6">
      <h2 class="text-[20px] leading-[28px] font-bold text-white mb-4">
        Трансляция турнира
      </h2>
      <div class="text-center py-8">
        <p class="text-[16px] leading-[24px] text-[#99a1af]">
          Трансляция будет доступна во время проведения турнира
        </p>
      </div>
    </div>
  </div>

  <!-- Participants Tab Content -->
  <div v-else-if="activeTab === 'participants'" class="space-y-6">
    <div class="bg-[#1e2939] rounded-lg p-6">
      <h2 class="text-[20px] leading-[28px] font-bold text-white mb-4">
        Участники турнира
      </h2>
      <div class="text-center py-8">
        <p class="text-[16px] leading-[24px] text-[#99a1af]">
          Список участников будет доступен после начала турнира
        </p>
      </div>
    </div>
  </div>

  <!-- Rules Tab Content -->
  <div v-else-if="activeTab === 'rules'" class="space-y-6">
    <div class="bg-[#1e2939] rounded-lg p-6">
      <h2 class="text-[20px] leading-[28px] font-bold text-white mb-4">
        Правила турнира
      </h2>
      <div class="prose prose-invert max-w-none">
        <ul class="space-y-2 text-[16px] leading-[24px] text-[#99a1af]">
          <li>• Все участники должны быть зарегистрированы до начала турнира</li>
          <li>• Запрещено использование читов и сторонних программ</li>
          <li>• Участники должны быть готовы к игре за 15 минут до начала</li>
          <li>• В случае технических проблем игра может быть перенесена</li>
          <li>• Решения судей являются окончательными</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TournamentBracket from '~/components/tournaments/TournamentBracket.vue'

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
}

const props = defineProps<{
  tournament: Tournament
  activeTab?: string
}>()
</script>
