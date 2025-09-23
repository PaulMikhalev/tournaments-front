<template>
  <section class="bg-[rgba(30,41,57,0.5)] border-b border-[#364153] px-[208.5px] py-6">
    <div class="flex items-center gap-4">
      <!-- Left Side - Game Filter and Search -->
      <div class="flex items-center gap-4 flex-1">
        <!-- Game Filter Dropdown -->
        <div class="w-64">
          <div class="bg-[rgba(38,38,38,0.3)] border border-[#4a5565] rounded-[8px] h-[36px] px-[13px] py-[9px] flex items-center justify-between">
            <span class="text-[12.797px] text-[#a1a1a1] leading-[20px]">Все игры</span>
            <svg class="w-4 h-4 opacity-50" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="#a1a1a1" stroke-width="1.33"/>
            </svg>
          </div>
        </div>
        
        <!-- Search Input -->
        <div class="flex-1 max-w-[448px] relative">
          <div class="bg-[rgba(38,38,38,0.3)] border border-[#4a5565] rounded-[8px] h-[36px] flex items-center">
            <svg class="w-4 h-4 ml-3 text-[#99a1af]" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="3" stroke="currentColor" stroke-width="1"/>
              <path d="m12 12-3-3" stroke="currentColor" stroke-width="1"/>
            </svg>
            <input 
              v-model="searchQuery"
              placeholder="Поиск турниров..."
              class="bg-transparent text-[12.906px] text-[#99a1af] placeholder-[#99a1af] ml-2 flex-1 outline-none"
            />
          </div>
        </div>
      </div>
      
      <!-- Right Side - Filters Button -->
      <button class="bg-[rgba(38,38,38,0.3)] border border-neutral-800 rounded-[8px] h-[36px] px-[13px] flex items-center gap-2 text-[13.234px] font-medium text-[#d1d5dc] leading-[20px]">
        <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
          <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" stroke-width="1.33"/>
        </svg>
        Фильтры
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  searchQuery: string
}

interface Emits {
  (e: 'update:searchQuery', value: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const searchQuery = computed({
  get: () => props.searchQuery,
  set: (value: string) => emit('update:searchQuery', value)
})
</script>
