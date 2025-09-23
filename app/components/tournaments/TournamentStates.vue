<template>
  <!-- Loading State -->
  <div v-if="isLoading" class="flex justify-center items-center py-12">
    <div class="text-[#99a1af] text-[14px]">Загрузка турниров...</div>
  </div>

  <!-- Error State -->
  <div v-else-if="error" class="flex flex-col items-center py-12">
    <div class="text-red-400 text-[14px] mb-4">{{ error }}</div>
    <button 
      @click="$emit('retry')"
      class="bg-[#1e2939] border border-[#364153] rounded-[10px] px-6 py-2 text-[14px] text-white hover:bg-[#2a3441] transition-colors"
    >
      Попробовать снова
    </button>
  </div>

  <!-- Empty State -->
  <div v-else-if="!isLoading && !error && tournaments.length === 0" class="flex flex-col items-center py-12">
    <div class="text-[#99a1af] text-[14px] mb-4">Турниры не найдены</div>
    <button 
      @click="$emit('retry')"
      class="bg-[#1e2939] border border-[#364153] rounded-[10px] px-6 py-2 text-[14px] text-white hover:bg-[#2a3441] transition-colors"
    >
      Обновить
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isLoading: boolean
  error: string | null
  tournaments: any[]
}

interface Emits {
  (e: 'retry'): void
}

defineProps<Props>()
defineEmits<Emits>()
</script>
