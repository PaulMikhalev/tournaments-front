<template>
  <div class="min-h-screen bg-[#101828]">
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
                    :src="user.avatar || 'https://api.dicebear.com/7.x/shapes/svg?seed=' + encodeURIComponent(user.username || 'user')" 
                    :alt="user.username || 'user'"
                    class="w-full h-full object-cover"
                  />
                </div>
                <UButton class="absolute bottom-0 right-0 size-8 bg-[#00ffe0] rounded-full hover:bg-[#00e6cc]" icon="i-heroicons-pencil-solid">
                  
                </UButton>
              </div>

              <!-- User Info -->
              <div class="text-center">
                <h1 class="text-[32px] leading-[32px] font-bold text-white mb-2">
                  {{ user.username || 'Профиль' }}
                </h1>
                <p class="text-[24px] leading-[24px] text-[#d1d5dc] mb-4" v-if="displayName">
                  {{ displayName }}
                </p>
                <div class="flex items-center justify-center gap-2 mb-4" v-if="country">
                  <span class="text-[20px] leading-[20px] text-[#d1d5dc]">{{ country }}</span>
                </div>
                <div class="inline-block bg-[#374151] rounded px-3 py-1">
                  <span class="text-[16px] leading-[16px] text-[#d1d5dc]">
                    Рейтинг: {{ (user.stats?.tournaments ?? 0).toLocaleString() }}
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
                    {{ user.stats?.tournaments ?? 0 }}
                  </div>
                  <div class="text-[20px] leading-[20px] text-[#99a1af]">
                    Турниров
                  </div>
                </div>
                <div class="text-center">
                  <div class="text-[32px] leading-[32px] font-bold text-white mb-1">
                    {{ user.stats?.wins ?? 0 }}
                  </div>
                  <div class="text-[20px] leading-[20px] text-[#99a1af]">
                    Побед
                  </div>
                </div>
                <div class="text-center">
                  <div class="text-[32px] leading-[32px] font-bold text-white mb-1">
                    {{ topThree }}
                  </div>
                  <div class="text-[20px] leading-[20px] text-[#99a1af]">
                    Топ 3
                  </div>
                </div>
                <div class="text-center">
                  <div class="text-[32px] leading-[32px] font-bold text-white mb-1">
                    ${{ (user.stats?.earnings ?? 0).toLocaleString() }}
                  </div>
                  <div class="text-[20px] leading-[20px] text-[#99a1af]">
                    Выиграно
                  </div>
                </div>
              </div>

              <!-- Additional Info -->
              <div class="space-y-4 mb-8">
                <div class="flex items-center gap-2" v-if="user.team">
                  <UIcon name="i-heroicons-user-group-20-solid"/>
                  <span class="text-[20px] leading-[20px] text-[#d1d5dc]">
                    Команда: {{ user.team }}
                  </span>
                </div>
                <div class="flex items-center gap-2" v-if="memberSince">
                  <UIcon name="i-heroicons-calendar-20-solid"/>
                  <span class="text-[20px] leading-[20px] text-[#d1d5dc]">
                    На платформе с {{ memberSince }}
                  </span>
                </div>
                <div class="flex items-center gap-2" v-if="lastActivity">
                  <UIcon name="i-heroicons-clock-20-solid"/>
                  <span class="text-[20px] leading-[20px] text-[#d1d5dc]">
                    Последняя активность: {{ lastActivity }}
                  </span>
                </div>
              </div>

              <!-- Edit Profile Button -->
              <UButton 
                color="primary"
                variant="solid"
                size="lg"
                icon="i-heroicons-pencil-solid"
                class="bg-[#00ffe0] hover:bg-[#00e6cc] text-[#101828] font-medium"
              >
                Редактировать профиль
              </UButton>
            </div>
          </div>
        </div>

        <!-- Profile Description -->
        <div class="border-t border-[#374151] px-8 py-6" v-if="false">
          <p class="text-[26px] leading-[26px] text-[#d1d5dc]">
            
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
            :color="activeTab === tab.id ? 'primary' : 'neutral'"
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
                <UIcon name="i-heroicons-trophy"/>
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
  title: 'Профиль',
  middleware: ['auth']
})

const { api } = useApi()

// Tab management
const activeTab = ref('tournaments')

const tabs = [
  { id: 'tournaments', label: 'История турниров' },
  { id: 'characters', label: 'Персонажи' },
  { id: 'achievements', label: 'Достижения' },
  { id: 'settings', label: 'Настройки' }
]

// User state
interface UserStats {
  tournaments: number
  wins: number
  top3: number
  earnings: number
}

interface UserUI {
  id?: string
  username?: string
  email?: string
  avatar?: string
  team?: string
  createdAt?: string
  stats?: UserStats
}

const user = ref<UserUI>({ stats: { tournaments: 0, wins: 0, top3: 0, earnings: 0 } })

// История турниров
const tournamentHistory = ref<any[]>([])

const displayName = computed(() => user.value.username || '')
const topThree = computed(() => user.value.stats?.top3 ?? 0)
const country = '' // placeholder for future geo data
const memberSince = computed(() => {
  if (!user.value.createdAt) return ''
  try {
    const date = new Date(user.value.createdAt)
    return date.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long' })
  } catch (_) {
    return ''
  }
})
const lastActivity = '' // backend пока не предоставляет
const description = '' // убрано из шаблона

// Загрузка данных пользователя с useAsyncData
const { data: userData, error: userError, pending: userPending } = await useAsyncData('user-profile', async () => {
  const me = await api('/auth/me') as any
  return me?.data?.user
})

// Загрузка истории турниров с useAsyncData
const { data: tournamentsData, error: tournamentsError, pending: tournamentsPending } = await useAsyncData('user-tournaments', async () => {
  if (!userData.value?.id) return []
  
  try {
    const response = await api(`/users/${userData.value.id}/tournaments`) as any
    const items = response?.data?.items || []
    return items.map((entry: any, idx: number) => {
      const t = entry.tournament
      return {
        id: t.id || idx,
        name: t.title,
        game: t.game,
        status: (t.status || '').toLowerCase() === 'live' ? 'live' : (t.status || 'completed').toLowerCase(),
        place: entry.participation?.finalPosition ? `#${entry.participation.finalPosition}` : '-',
        date: new Date(t.startDate).toLocaleDateString('ru-RU'),
        participants: `${t.currentParticipants ?? 0}/${t.maxParticipants ?? 0}`,
        prize: t.prizePool ?? 0
      }
    })
  } catch (error) {
    return []
  }
}, {
  watch: [userData]
})

// Обновляем реактивные данные
watch(userData, (newUser) => {
  if (newUser) {
    user.value = newUser
  }
}, { immediate: true })

watch(tournamentsData, (newTournaments) => {
  tournamentHistory.value = newTournaments || []
}, { immediate: true })

// Обработка ошибок
watch(userError, (error) => {
  if (error && 'status' in error && error.status === 401) {
    navigateTo(`/login?redirect=${encodeURIComponent('/profile')}`)
  }
})
</script>