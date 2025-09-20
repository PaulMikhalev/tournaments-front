<template>
  <!-- Tab Content -->
  <div class="px-4 lg:px-[208.5px] py-8 bg-[#101828]">
    <!-- Tabs Navigation -->
    <div class="mb-8">
      <nav class="bg-[#1e2939] rounded-lg p-1 inline-flex">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="px-4 py-2 text-[16px] leading-[20px] font-medium transition-all duration-200 rounded-md"
          :class="[
            activeTab === tab.id
              ? 'bg-[#00ffe0] text-[#101828]'
              : 'text-[#99a1af] hover:text-white hover:bg-[#374151]'
          ]"
        >
          {{ tab.label }}
        </button>
      </nav>
    </div>
    
    <!-- Tab Panel -->
    <div class="space-y-8">
      <slot :activeTab="activeTab" />
    </div>
  </div>
</template>

<script setup>
const activeTab = ref('bracket')

const tabs = [
  { id: 'bracket', label: 'Турнирная сетка' },
  { id: 'stream', label: 'Трансляция' },
  { id: 'participants', label: 'Участники' },
  { id: 'rules', label: 'Правила' }
]
</script>
