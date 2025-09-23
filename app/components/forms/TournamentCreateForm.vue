<template>
  <UForm id="tournament-form" :schema="schema" :state="state" @submit="$emit('submit')" class="grid grid-cols-2 gap-6">
    <!-- Basic Information -->
    <div class="bg-[#1e2939] border border-[#374151] rounded-lg col-span-2">
      <div class="px-6 py-6 border-b border-[#374151]">
        <div class="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 9V13M10 17C13.866 17 17 13.866 17 10S13.866 3 10 3 3 6.134 3 10s3.134 7 7 7zM10 7h.01" stroke="#00ffe0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
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
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 2V6M13.5 2V6M3 10H17M5 4H15C16.105 4 17 4.895 17 6V16C17 17.105 16.105 18 15 18H5C3.895 18 3 17.105 3 16V6C3 4.895 3.895 4 5 4Z" stroke="#00ffe0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h3 class="text-[16px] leading-[16px] font-semibold text-white">Расписание</h3>
        </div>
      </div>
      <div class="p-6">
        <div class="grid grid-cols-2 gap-4">
          <UPopover>
            <UButton color="neutral" variant="subtle" icon="i-lucide-calendar">
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
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z" stroke="#00ffe0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.5 10C12.5 11.381 11.381 12.5 10 12.5C8.619 12.5 7.5 11.381 7.5 10C7.5 8.619 8.619 7.5 10 7.5C11.381 7.5 12.5 8.619 12.5 10Z" stroke="#00ffe0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
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


