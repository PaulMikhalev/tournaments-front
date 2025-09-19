<template>
  <section class="bg-mirage-50 border-b border-oxford">
    <div class="max-w-[1536px] mx-auto px-4 lg:px-[208.5px]">
      <nav class="flex">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="px-6 py-4 text-[14.5px] leading-[1.66] font-medium transition-all duration-200 border-b-2"
          :class="[
            activeTab === tab.id
              ? 'text-cyan-400 border-cyan-400'
              : 'text-mischka border-transparent hover:text-white hover:border-oxford'
          ]"
        >
          {{ tab.label }}
        </button>
      </nav>
    </div>
  </section>
  
  <!-- Tab Content -->
  <div class="max-w-[1536px] mx-auto px-4 lg:px-[208.5px] py-8">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Main Content Area -->
      <div class="lg:col-span-2">
        <slot :activeTab="activeTab" />
      </div>
      
      <!-- Sidebar -->
      <div class="lg:col-span-1">
        <slot name="sidebar" />
      </div>
    </div>
  </div>
</template>

<script setup>
const activeTab = ref('overview')

const tabs = [
  { id: 'overview', label: 'Обзор' },
  { id: 'participants', label: 'Участники' },
  { id: 'results', label: 'Результаты' },
  { id: 'rules', label: 'Правила' }
]
</script>
