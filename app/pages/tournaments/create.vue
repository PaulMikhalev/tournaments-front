<template>
  <div class="min-h-screen bg-[#101828]">
    <!-- Main Content -->
    <div class="site-container pt-8 pb-16">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-[36px] leading-[36px] font-bold text-white mb-[12px]">
          Создать турнир
        </h1>
        <p class="text-[16px] leading-[24px] text-[#99a1af]">
          Настройте свой турнир и пригласите участников
        </p>
      </div>

      <div class="flex gap-8">
        <!-- Left Column - Main Form -->
        <FormsTournamentCreateForm class="flex-1" :schema="tournamentCreateSchema" :state="form" @submit="onSubmit" />
        
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
              <UFileUpload class="w-full min-h-48" label="Загрузить изображение" />
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



// Form data
const form = ref<TournamentCreateValues>({
  name: '',
  description: '',
  game: '',
  prize: '',
  startDate: '',
  startTime: '',
  maxParticipants: 8,
  format: 'elimination',
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

    console.log('created', created)
    
    const toast = useToast()
    toast.add({
      title: 'Турнир создан!',
      description: `Турнир "${created.data.title || form.value.name}" успешно создан`,
      color: 'success'
    })

    navigateTo(`/tournaments/${created.data.id}`)
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
