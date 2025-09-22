<template>
  <div class="min-h-screen bg-[#101828]">
    <!-- Back Navigation -->
    <div class="px-[208.5px] py-8">
      <NuxtLink 
        to="/"
        class="inline-flex items-center gap-2 text-[14px] leading-[20px] text-[#99a1af] hover:text-white transition-colors duration-200"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Назад
      </NuxtLink>
    </div>

    <!-- Main Content -->
    <div class="px-[376px] pb-[92px]">
      <!-- Profile Header -->
      <div class="bg-[#1e2939] border border-[#374151] rounded-lg mb-8">
        <div class="p-8">
          <div class="flex gap-8">
            <!-- Left Side - Avatar and Basic Info -->
            <div class="flex-shrink-0">
              <!-- Avatar -->
              <div class="relative mb-4">
                <div class="w-32 h-32 rounded-full border-4 border-[#374151] overflow-hidden">
                  <img 
                    :src="user.avatar" 
                    :alt="user.username"
                    class="w-full h-full object-cover"
                  />
                </div>
                <button class="absolute bottom-0 right-0 w-8 h-8 bg-[#00ffe0] rounded-full flex items-center justify-center hover:bg-[#00e6cc] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.333 2A1.333 1.333 0 0 0 9.726 2.391L2.667 9.45v2.883h2.883l7.059-7.059a1.333 1.333 0 0 0 0-1.885l-1.276-1.276Z" fill="#101828"/>
                  </svg>
                </button>
              </div>

              <!-- User Info -->
              <div class="text-center">
                <h1 class="text-[32px] leading-[32px] font-bold text-white mb-2">
                  {{ user.username }}
                </h1>
                <p class="text-[24px] leading-[24px] text-[#d1d5dc] mb-4">
                  {{ user.fullName }}
                </p>
                <div class="flex items-center justify-center gap-2 mb-4">
                  <span class="text-[20px] leading-[20px] text-[#d1d5dc]">🇷🇺 Россия</span>
                </div>
                <div class="inline-block bg-[#374151] rounded px-3 py-1">
                  <span class="text-[16px] leading-[16px] text-[#d1d5dc]">
                    Рейтинг: {{ user.rating.toLocaleString() }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Right Side - Stats and Info -->
            <div class="flex-1">
              <!-- Statistics -->
              <div class="grid grid-cols-4 gap-8 mb-8">
                <div class="text-center">
                  <div class="text-[32px] leading-[32px] font-bold text-white mb-1">
                    {{ user.stats.tournaments }}
                  </div>
                  <div class="text-[20px] leading-[20px] text-[#99a1af]">
                    Турниров
                  </div>
                </div>
                <div class="text-center">
                  <div class="text-[32px] leading-[32px] font-bold text-white mb-1">
                    {{ user.stats.wins }}
                  </div>
                  <div class="text-[20px] leading-[20px] text-[#99a1af]">
                    Побед
                  </div>
                </div>
                <div class="text-center">
                  <div class="text-[32px] leading-[32px] font-bold text-white mb-1">
                    {{ user.stats.topThree }}
                  </div>
                  <div class="text-[20px] leading-[20px] text-[#99a1af]">
                    Топ 3
                  </div>
                </div>
                <div class="text-center">
                  <div class="text-[32px] leading-[32px] font-bold text-white mb-1">
                    ${{ user.stats.earnings.toLocaleString() }}
                  </div>
                  <div class="text-[20px] leading-[20px] text-[#99a1af]">
                    Выиграно
                  </div>
                </div>
              </div>

              <!-- Additional Info -->
              <div class="space-y-4 mb-8">
                <div class="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.667 14V12.667C10.667 11.95 10.382 11.263 9.882 10.763C9.382 10.263 8.694 9.978 7.978 9.978H3.311C2.595 9.978 1.908 10.263 1.408 10.763C0.908 11.263 0.622 11.95 0.622 12.667V14M13.333 5.333V9.333M15.333 7.333H11.333M8.311 4.667C8.311 6.135 7.135 7.311 5.667 7.311C4.198 7.311 3.022 6.135 3.022 4.667C3.022 3.198 4.198 2.022 5.667 2.022C7.135 2.022 8.311 3.198 8.311 4.667Z" stroke="#99a1af" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span class="text-[20px] leading-[20px] text-[#d1d5dc]">
                    Команда: {{ user.team }}
                  </span>
                </div>
                <div class="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334ZM8 4.667V8l2.667 2.667" stroke="#99a1af" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span class="text-[20px] leading-[20px] text-[#d1d5dc]">
                    На платформе с {{ user.memberSince }}
                  </span>
                </div>
                <div class="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334Z" stroke="#99a1af" stroke-width="1.33"/>
                    <path d="M8 8A2.667 2.667 0 1 0 8 2.667 2.667 2.667 0 0 0 8 8Z" fill="#00ffe0"/>
                  </svg>
                  <span class="text-[20px] leading-[20px] text-[#d1d5dc]">
                    Последняя активность: {{ user.lastActivity }}
                  </span>
                </div>
              </div>

              <!-- Edit Profile Button -->
              <UButton 
                color="primary"
                variant="solid"
                size="lg"
                class="bg-[#00ffe0] hover:bg-[#00e6cc] text-[#101828] font-medium"
              >
                <template #leading>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.333 2A1.333 1.333 0 0 0 9.726 2.391L2.667 9.45v2.883h2.883l7.059-7.059a1.333 1.333 0 0 0 0-1.885l-1.276-1.276Z" fill="currentColor"/>
                  </svg>
                </template>
                Редактировать профиль
              </UButton>
            </div>
          </div>
        </div>

        <!-- Profile Description -->
        <div class="border-t border-[#374151] px-8 py-6">
          <p class="text-[26px] leading-[26px] text-[#d1d5dc]">
            {{ user.description }}
          </p>
        </div>
      </div>

      <!-- Tabs Section -->
      <div class="space-y-8">
        <!-- Tab Navigation -->
        <div class="flex gap-2">
          <UButton
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :variant="activeTab === tab.id ? 'solid' : 'ghost'"
            :color="activeTab === tab.id ? 'primary' : 'gray'"
            size="lg"
            :class="[
              activeTab === tab.id
                ? 'bg-[#00ffe0] text-[#101828]'
                : 'text-[#99a1af] hover:text-white hover:bg-[#374151]'
            ]"
          >
            {{ tab.label }}
          </UButton>
        </div>

        <!-- Tab Content -->
        <div v-if="activeTab === 'tournaments'">
          <!-- Tournament History Section -->
          <div class="bg-[#1e2939] border border-[#374151] rounded-lg">
            <div class="px-6 py-6 border-b border-[#374151]">
              <div class="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 18C14.418 18 18 14.418 18 10S14.418 2 10 2 2 5.582 2 10s3.582 8 8 8ZM10 6V10l4 4" stroke="#00ffe0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h3 class="text-[16px] leading-[16px] font-semibold text-white">
                  История участия в турнирах
                </h3>
              </div>
            </div>
            <div class="p-6">
              <div class="space-y-4">
                <!-- Tournament History Items -->
                <div 
                  v-for="tournament in tournamentHistory" 
                  :key="tournament.id"
                  class="border border-[#374151] rounded-lg p-4"
                >
                  <div class="flex justify-between items-start mb-4">
                    <div>
                      <h4 class="text-[24px] leading-[24px] font-semibold text-white mb-1">
                        {{ tournament.name }}
                      </h4>
                      <p class="text-[20px] leading-[20px] text-[#99a1af]">
                        {{ tournament.game }}
                      </p>
                    </div>
                    <span 
                      class="px-3 py-1 rounded text-[16px] leading-[16px] font-medium"
                      :class="tournament.status === 'live' 
                        ? 'bg-[#ef4444] text-white' 
                        : 'bg-[#374151] text-[#d1d5dc]'"
                    >
                      {{ tournament.status === 'live' ? 'Идет' : 'Завершен' }}
                    </span>
                  </div>
                  <div class="grid grid-cols-4 gap-4">
                    <div>
                      <span class="text-[20px] leading-[20px] text-[#99a1af]">Место: </span>
                      <span class="text-[20px] leading-[20px] text-white">{{ tournament.place }}</span>
                    </div>
                    <div>
                      <span class="text-[20px] leading-[20px] text-[#99a1af]">Дата: </span>
                      <span class="text-[20px] leading-[20px] text-white">{{ tournament.date }}</span>
                    </div>
                    <div>
                      <span class="text-[20px] leading-[20px] text-[#99a1af]">Участников: </span>
                      <span class="text-[20px] leading-[20px] text-white">{{ tournament.participants }}</span>
                    </div>
                    <div>
                      <span class="text-[20px] leading-[20px] text-[#99a1af]">Приз: </span>
                      <span class="text-[20px] leading-[20px] text-white">${{ tournament.prize.toLocaleString() }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Other Tab Contents -->
        <div v-else-if="activeTab === 'characters'" class="bg-[#1e2939] border border-[#374151] rounded-lg p-6">
          <div class="text-center py-8">
            <p class="text-[20px] leading-[20px] text-[#99a1af]">
              Информация о персонажах будет доступна позже
            </p>
          </div>
        </div>

        <div v-else-if="activeTab === 'achievements'" class="bg-[#1e2939] border border-[#374151] rounded-lg p-6">
          <div class="text-center py-8">
            <p class="text-[20px] leading-[20px] text-[#99a1af]">
              Достижения будут доступны позже
            </p>
          </div>
        </div>

        <div v-else-if="activeTab === 'settings'" class="bg-[#1e2939] border border-[#374151] rounded-lg p-6">
          <div class="text-center py-8">
            <p class="text-[20px] leading-[20px] text-[#99a1af]">
              Настройки профиля будут доступны позже
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Page meta
definePageMeta({
  title: 'Профиль'
})

// Tab management
const activeTab = ref('tournaments')

const tabs = [
  { id: 'tournaments', label: 'История турниров' },
  { id: 'characters', label: 'Персонажи' },
  { id: 'achievements', label: 'Достижения' },
  { id: 'settings', label: 'Настройки' }
]

// Mock user data
const user = ref({
  username: 'ProGamer2025',
  fullName: 'Александр Петров',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&crop=face',
  rating: 1847,
  team: 'Team Alpha',
  memberSince: 'января 2022',
  lastActivity: 'сегодня',
  description: 'Профессиональный игрок в Counter-Strike 2 и Valorant. Участвую в турнирах уже 3 года.',
  stats: {
    tournaments: 5,
    wins: 2,
    topThree: 4,
    earnings: 15500
  }
})

// Mock tournament history
const tournamentHistory = ref([
  {
    id: 1,
    name: 'Winter Championship 2025',
    game: 'Soulcalibur VI',
    status: 'live',
    place: '#1 из 16',
    date: '15.01.2025',
    participants: 16,
    prize: 5000
  },
  {
    id: 2,
    name: 'New Year Clash 2025',
    game: 'Counter-Strike 2',
    status: 'completed',
    place: '#3 из 32',
    date: '01.01.2025',
    participants: 32,
    prize: 2500
  },
  {
    id: 3,
    name: 'Autumn Clash 2024',
    game: 'Valorant',
    status: 'completed',
    place: '#1 из 32',
    date: '20.11.2024',
    participants: 32,
    prize: 5000
  },
  {
    id: 4,
    name: 'Summer Showdown 2024',
    game: 'Counter-Strike 2',
    status: 'completed',
    place: '#2 из 24',
    date: '15.08.2024',
    participants: 24,
    prize: 3000
  },
  {
    id: 5,
    name: 'Spring Open 2024',
    game: 'Dota 2',
    status: 'completed',
    place: '#8 из 16',
    date: '10.04.2024',
    participants: 16,
    prize: 0
  }
])
</script>