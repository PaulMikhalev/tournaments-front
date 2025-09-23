<template>
  <UForm id="tournament-form" :schema="schema" :state="state" @submit="$emit('submit')" class="grid grid-cols-2 gap-6">
    <!-- Basic Information -->
    <div class="bg-[#1e2939] border border-[#374151] rounded-lg col-span-2">
      <div class="px-6 py-6 border-b border-[#374151]">
        <div class="flex items-center gap-2">
          <UIcon class="size-6 text-[#00ffe0]" name="i-heroicons-information-circle" mode="css" />
          <h3 class="text-[16px] leading-[16px] font-semibold text-white">Основная информация</h3>
        </div>
      </div>
      <div class="p-6 grid grid-cols-2 gap-4">
        <!-- Tournament Name -->
        <UFormField name="name" label="Название турнира *" class="col-span-2">
          <UInput name="name" v-model="state.name" placeholder="Введите название турнира" size="lg" block class="bg-[#101828] border-[#374151] w-full" />
        </UFormField>

        <!-- Description -->
        <UFormField name="description" label="Описание" class="col-span-2">
          <UTextarea name="description" v-model="state.description" placeholder="Опишите ваш турнир..." block :rows="4" class="bg-[#101828] border-[#374151] w-full" resize="none" />
        </UFormField>

        <!-- Game and Prize -->
        <div class="grid grid-cols-2 gap-4 col-span-2">
          <UFormField class="w-full" name="game" label="Игра *">
            <USelect name="game" v-model="state.game" :items="gameOptions" placeholder="Выберите игру" size="lg" class="bg-[#101828] border-[#374151] w-full" />
          </UFormField>
          <UFormField name="prize" label="Призовой фонд">
            <UInput name="prize" v-model="state.prize" placeholder="$0" size="lg" class="bg-[#101828] border-[#374151] w-full" />
          </UFormField>
        </div>
      </div>
    </div>

    <!-- Schedule -->
    <div class="bg-[#1e2939] border border-[#374151] rounded-lg">
      <div class="px-6 py-6 border-b border-[#374151]">
        <div class="flex items-center gap-2">
          <UIcon class="size-6 text-[#00ffe0]" name="i-heroicons-calendar-20-solid" />
          <h3 class="text-[16px] leading-[16px] font-semibold text-white">Расписание</h3>
        </div>
      </div>
      <div class="p-6">
        <div class="grid grid-cols-2 gap-4">
          <UPopover>
            <UButton color="neutral" variant="subtle" icon="i-heroicons-calendar-20-solid">
              {{ startDateModel ? df.format(startDateModel.toDate(getLocalTimeZone())) : 'Дата начала *' }}
            </UButton>

            <template #content>
              <UCalendar v-model="startDateModel" class="p-2" />
            </template>
          </UPopover>
          <UFormField name="startTime" label="Время начала *">
            <UInput name="startTime" v-model="state.startTime" type="time" class="bg-[#101828] border-[#374151]" />
          </UFormField>
        </div>
      </div>
    </div>

    <!-- Tournament Settings -->
    <div class="bg-[#1e2939] border border-[#374151] rounded-lg">
      <div class="px-6 py-6 border-b border-[#374151]">
        <div class="flex items-center gap-2">
          <UIcon class="size-6 text-[#00ffe0]" name="i-heroicons-cog-8-tooth" />
          <h3 class="text-[16px] leading-[16px] font-semibold text-white">Настройки турнира</h3>
        </div>
      </div>
      <div class="p-6 space-y-6">
        <!-- Max Participants and Format -->
        <div class="grid grid-cols-2 gap-4">
          <UFormField name="maxParticipants" label="Максимум участников">
            <USelect name="maxParticipants" v-model="maxParticipantsModel" :items="participantOptions" placeholder="Выберите количество" size="lg" class="bg-[#101828] border-[#374151] h-[36px]" />
          </UFormField>
          <UFormField name="format" label="Формат турнира">
            <USelect name="format" v-model="state.format" :items="formatOptions" placeholder="Выберите формат" size="lg" class="bg-[#101828] border-[#374151] h-[36px]" />
          </UFormField>
        </div>

        <!-- Switches -->
        <div class="space-y-6">
          <div class="flex items-center justify-between">
            <div>
              <h4 class="text-[14px] leading-[14px] text-[#d1d5dc] mb-1">Публичный турнир</h4>
              <p class="text-[20px] leading-[20px] text-[#99a1af]">Турнир будет виден всем пользователям</p>
            </div>
            <UCheckbox name="isPublic" v-model="state.isPublic" />
          </div>

          <div class="flex items-center justify-between">
            <div>
              <h4 class="text-[14px] leading-[14px] text-[#d1d5dc] mb-1">Открыта регистрация</h4>
              <p class="text-[20px] leading-[20px] text-[#99a1af]">Участники могут регистрироваться сразу</p>
            </div>
            <UCheckbox name="registrationOpen" v-model="state.registrationOpen" />
          </div>
        </div>
      </div>
    </div>

    <!-- Tournament Rules -->
    <div class="bg-[#1e2939] border border-[#374151] rounded-lg col-span-2">
      <div class="px-6 py-6 border-b border-[#374151]">
        <h3 class="text-[16px] leading-[16px] font-semibold text-white">Правила турнира</h3>
      </div>
      <div class="p-6">
        <UFormField name="rules" label="Правила турнира">
          <UTextarea name="rules" v-model="state.rules" :rows="6" placeholder="Опишите правила турнира..." class="w-full bg-[#101828] border-[#374151]" resize="none" />
        </UFormField>
      </div>
    </div>
  </UForm>
</template>

<script setup lang="ts">
import type { TournamentCreateValues } from '@/types/tournament'
import type { DateValue } from '@internationalized/date'
import { parseDate, getLocalTimeZone } from '@internationalized/date'

const props = defineProps<{ 
  state: TournamentCreateValues,
  schema: any,
}>()

defineEmits<{ (e: 'submit'): void }>()

const state = toRef(props, 'state')
const schema = toRef(props, 'schema')

// Game options for select
const gameOptions = ref([
  // { label: 'Counter-Strike 2', value: 'Counter-Strike 2' },
  // { label: 'Dota 2', value: 'Dota 2' },
  // { label: 'Valorant', value: 'Valorant' },
  // { label: 'League of Legends', value: 'League of Legends' },
  { label: 'Soulcalibur VI', value: 'Soulcalibur VI' }
])

const df = new Intl.DateTimeFormat('ru-RU', { dateStyle: 'medium' })

const participantOptions = ref([
  { label: '8 участников', value: 8 },
  // { label: '16 участников', value: 16 },
  // { label: '32 участника', value: 32 },
  // { label: '64 участника', value: 64 },
  // { label: '128 участников', value: 128 }
])

const formatOptions = ref([
  // { label: 'Single Elimination', value: 'single-elimination' },
  // { label: 'Double Elimination', value: 'double-elimination' },
  // { label: 'Round Robin', value: 'round-robin' }
  { label: 'На вылет', value: 'elimination' },
])

const startDateModel = computed<DateValue | null>({
  get: () => {
    if (!state.value.startDate) return null
    return parseDate(state.value.startDate)
  },
  set: (val) => {
    state.value.startDate = val ? val.toString() : ''
  }
})

const maxParticipantsModel = computed<number | null>({
  get: () => {
    const v = state.value.maxParticipants as unknown
    const n = typeof v === 'number' ? v : Number(v)
    return Number.isFinite(n) ? n : null
  },
  set: (val) => {
    if (val == null) {
      state.value.maxParticipants = '' as unknown as number
      return
    }
    state.value.maxParticipants = val as unknown as number
  }
})
</script>


