<template>
  <div class="min-h-screen bg-[#101828]">
    <!-- Back Navigation -->
    <div class="site-container py-8">
      <NuxtLink 
        to="/"
        class="inline-flex items-center gap-2 text-[14px] leading-[20px] text-[#99a1af] hover:text-white transition-colors duration-200"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Назад к турнирам
      </NuxtLink>
    </div>

    <!-- Main Content -->
    <div class="site-container pb-[92px]">
      <!-- Header -->
      <div class="mb-[100px]">
        <h1 class="text-[36px] leading-[36px] font-bold text-white mb-[12px]">
          Создать турнир
        </h1>
        <p class="text-[16px] leading-[24px] text-[#99a1af]">
          Настройте свой турнир и пригласите участников
        </p>
      </div>

      <div class="flex gap-8">
        <!-- Left Column - Main Form -->
        <FormsTournamentCreateForm class="flex-1" :schema="tournamentCreateSchema" :state="form" :game-options="gameOptions" @submit="onSubmit" />
        
        <!-- Right Column - Sidebar -->
        <div class="w-80 space-y-6">
          <!-- Tournament Image -->
          <div class="bg-[#1e2939] border border-[#374151] rounded-lg">
            <div class="px-6 py-6 border-b border-[#374151]">
              <h3 class="text-[16px] leading-[16px] font-semibold text-white">
                Изображение турнира
              </h3>
            </div>
            <div class="p-6">
              <div class="border-2 border-dashed border-[#374151] rounded-lg h-[128px] flex flex-col items-center justify-center mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-2">
                  <path d="M16 10.667V21.333M10.667 16H21.333M28 16C28 22.627 22.627 28 16 28C9.373 28 4 22.627 4 16C4 9.373 9.373 4 16 4C22.627 4 28 9.373 28 16Z" stroke="#99a1af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="text-[20px] leading-[20px] text-[#99a1af] text-center">
                  Загрузите изображение
                </p>
              </div>
              <button class="w-full h-[36px] bg-[#374151] hover:bg-[#4b5563] text-white rounded flex items-center justify-center gap-2 transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 10V12.667C14 13.403 13.403 14 12.667 14H3.333C2.597 14 2 13.403 2 12.667V10M11.333 6.667L8 3.333M8 3.333L4.667 6.667M8 3.333V10" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Выбрать изображение
              </button>
            </div>
          </div>

          <!-- Preview -->
          <div class="bg-[#1e2939] border border-[#374151] rounded-lg">
            <div class="px-6 py-6 border-b border-[#374151]">
              <h3 class="text-[16px] leading-[16px] font-semibold text-white">
                Предварительный просмотр
              </h3>
            </div>
            <div class="p-6 space-y-4">
              <div class="text-[20px] leading-[20px] text-[#99a1af]">
                Название: {{ form.name || 'Не указано' }}
              </div>
              <div class="text-[20px] leading-[20px] text-[#99a1af]">
                Игра: {{ form.game || 'Не выбрана' }}
              </div>
              <div class="text-[20px] leading-[20px] text-[#99a1af]">
                Участников: 0/{{ form.maxParticipants || 16 }}
              </div>
              <div class="text-[20px] leading-[20px] text-[#99a1af]">
                Призовой фонд: {{ form.prize || '$0' }}
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="space-y-3">
            <UButton 
              type="submit"
              form="tournament-form"
              color="primary"
              variant="solid"
              size="lg"
              block
              class="bg-[#00ffe0] hover:bg-[#00e6cc] text-[#101828] font-medium"
            >
              Создать турнир
            </UButton>
            <UButton 
              @click="cancel"
              color="neutral"
              variant="solid"
              size="lg"
              block
              class="bg-[#374151] hover:bg-[#4b5563] text-white"
            >
              Отменить
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { tournamentCreateSchema } from '@/schema/tournament'
import type { TournamentCreateValues } from '@/types/tournament'

// Game options for select
const gameOptions = [
  { label: 'Counter-Strike 2', value: 'Counter-Strike 2' },
  { label: 'Dota 2', value: 'Dota 2' },
  { label: 'Valorant', value: 'Valorant' },
  { label: 'League of Legends', value: 'League of Legends' },
  { label: 'Soulcalibur VI', value: 'Soulcalibur VI' }
]

// Form data
const form = ref<TournamentCreateValues>({
  name: '',
  description: '',
  game: '',
  prize: '',
  startDate: '',
  startTime: '',
  maxParticipants: '16',
  format: 'single-elimination',
  isPublic: true,
  registrationOpen: true,
  rules: ''
})

// Actions
const { api } = useApi()

const onSubmit = async () => {
  const parsed = tournamentCreateSchema.safeParse(form.value)
  if (!parsed.success) {
    const toast = useToast()
    toast.add({
      title: 'Ошибка валидации',
      description: parsed.error.issues[0]?.message || 'Пожалуйста, заполните все обязательные поля',
      color: 'error'
    })
    return
  }

  try {
    const startDateISO = new Date(`${form.value.startDate}T${form.value.startTime}:00`).toISOString()
    const payload = {
      title: parsed.data.name,
      description: parsed.data.description,
      game: parsed.data.game,
      prizePool: parsed.data.prize,
      startDate: startDateISO,
      maxParticipants: parsed.data.maxParticipants,
      format: parsed.data.format.toUpperCase().replace('-', '_'),
      isPublic: parsed.data.isPublic,
      registrationOpen: parsed.data.registrationOpen,
      rules: parsed.data.rules
    }
    const created: any = await api('/tournaments', {
      method: 'POST',
      body: payload
    })

    const toast = useToast()
    toast.add({
      title: 'Турнир создан!',
      description: `Турнир "${created.title || form.value.name}" успешно создан`,
      color: 'success'
    })

    navigateTo(`/tournaments/${created.id}`)
  } catch (e: any) {
    const toast = useToast()
    toast.add({
      title: 'Ошибка создания',
      description: e?.message || 'Не удалось создать турнир',
      color: 'error'
    })
  }
}

const submitForm = () => onSubmit()

const cancel = () => {
  navigateTo('/')
}

// Page meta
definePageMeta({
  title: 'Создать турнир'
})
</script>
