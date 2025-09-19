<template>
  <div v-if="activeTab === 'overview'" class="space-y-6">
    <!-- Tournament Description -->
    <div class="bg-mirage rounded-[14px] p-6">
      <h2 class="text-[18.75px] leading-[1.493] font-bold text-white mb-4">
        Описание турнира
      </h2>
      <div class="prose prose-invert max-w-none">
        <p class="text-[14.75px] leading-[1.627] text-gray-chateau mb-4">
          {{ tournament.description || 'Присоединяйтесь к захватывающему турниру и сразитесь с лучшими игроками за призовой фонд. Турнир проводится в формате одиночной элиминации, где каждая игра может стать решающей.' }}
        </p>
        <p class="text-[14.75px] leading-[1.627] text-gray-chateau">
          Регистрация открыта до начала турнира. Все участники должны соответствовать требованиям и правилам турнира.
        </p>
      </div>
    </div>

    <!-- Tournament Format -->
    <div class="bg-mirage rounded-[14px] p-6">
      <h3 class="text-[15.125px] leading-[1.587] font-semibold text-white mb-4">
        Формат турнира
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex justify-between py-2 border-b border-oxford">
          <span class="text-[13.02px] leading-[1.537] text-gray-chateau">Тип турнира:</span>
          <span class="text-[13.02px] leading-[1.537] text-white">{{ tournament.format || 'Одиночная элиминация' }}</span>
        </div>
        <div class="flex justify-between py-2 border-b border-oxford">
          <span class="text-[13.02px] leading-[1.537] text-gray-chateau">Максимум участников:</span>
          <span class="text-[13.02px] leading-[1.537] text-white">{{ tournament.maxParticipants }}</span>
        </div>
        <div class="flex justify-between py-2 border-b border-oxford">
          <span class="text-[13.02px] leading-[1.537] text-gray-chateau">Платформа:</span>
          <span class="text-[13.02px] leading-[1.537] text-white">{{ tournament.platform || 'PC' }}</span>
        </div>
        <div class="flex justify-between py-2 border-b border-oxford">
          <span class="text-[13.02px] leading-[1.537] text-gray-chateau">Регион:</span>
          <span class="text-[13.02px] leading-[1.537] text-white">{{ tournament.region || 'Европа' }}</span>
        </div>
      </div>
    </div>

    <!-- Prize Distribution -->
    <div class="bg-mirage rounded-[14px] p-6">
      <h3 class="text-[15.125px] leading-[1.587] font-semibold text-white mb-4">
        Распределение призов
      </h3>
      <div class="space-y-3">
        <div class="flex items-center justify-between p-3 bg-oxford rounded-lg">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-selective-yellow rounded-full flex items-center justify-center">
              <span class="text-[12.14px] leading-[1.647] font-bold text-black">1</span>
            </div>
            <span class="text-[14.75px] leading-[1.627] text-white">1-е место</span>
          </div>
          <span class="text-[15.125px] leading-[1.587] font-semibold text-cyan-400">
            {{ getPrizeForPlace(1) }}
          </span>
        </div>
        
        <div class="flex items-center justify-between p-3 bg-oxford rounded-lg">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-gray-chateau rounded-full flex items-center justify-center">
              <span class="text-[12.14px] leading-[1.647] font-bold text-black">2</span>
            </div>
            <span class="text-[14.75px] leading-[1.627] text-white">2-е место</span>
          </div>
          <span class="text-[15.125px] leading-[1.587] font-semibold text-cyan-400">
            {{ getPrizeForPlace(2) }}
          </span>
        </div>
        
        <div class="flex items-center justify-between p-3 bg-oxford rounded-lg">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-red-orange rounded-full flex items-center justify-center">
              <span class="text-[12.14px] leading-[1.647] font-bold text-white">3</span>
            </div>
            <span class="text-[14.75px] leading-[1.627] text-white">3-е место</span>
          </div>
          <span class="text-[15.125px] leading-[1.587] font-semibold text-cyan-400">
            {{ getPrizeForPlace(3) }}
          </span>
        </div>
      </div>
    </div>
  </div>

  <!-- Participants Tab Content -->
  <div v-else-if="activeTab === 'participants'" class="space-y-6">
    <div class="bg-mirage rounded-[14px] p-6">
      <h2 class="text-[18.75px] leading-[1.493] font-bold text-white mb-4">
        Участники турнира
      </h2>
      <div class="text-center py-8">
        <p class="text-[14.75px] leading-[1.627] text-gray-chateau">
          Список участников будет доступен после начала турнира
        </p>
      </div>
    </div>
  </div>

  <!-- Results Tab Content -->
  <div v-else-if="activeTab === 'results'" class="space-y-6">
    <div class="bg-mirage rounded-[14px] p-6">
      <h2 class="text-[18.75px] leading-[1.493] font-bold text-white mb-4">
        Результаты турнира
      </h2>
      <div class="text-center py-8">
        <p class="text-[14.75px] leading-[1.627] text-gray-chateau">
          Результаты появятся после завершения турнира
        </p>
      </div>
    </div>
  </div>

  <!-- Rules Tab Content -->
  <div v-else-if="activeTab === 'rules'" class="space-y-6">
    <div class="bg-mirage rounded-[14px] p-6">
      <h2 class="text-[18.75px] leading-[1.493] font-bold text-white mb-4">
        Правила турнира
      </h2>
      <div class="prose prose-invert max-w-none">
        <ul class="space-y-2 text-[14.75px] leading-[1.627] text-gray-chateau">
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

<script setup>
const props = defineProps({
  tournament: {
    type: Object,
    required: true
  },
  activeTab: {
    type: String,
    default: 'overview'
  }
})

const getPrizeForPlace = (place) => {
  const totalPrize = parseInt(props.tournament.prize.replace(/[$,]/g, ''))
  switch (place) {
    case 1:
      return `$${Math.floor(totalPrize * 0.5).toLocaleString()}`
    case 2:
      return `$${Math.floor(totalPrize * 0.3).toLocaleString()}`
    case 3:
      return `$${Math.floor(totalPrize * 0.2).toLocaleString()}`
    default:
      return '$0'
  }
}
</script>
