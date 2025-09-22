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
        Назад к турнирам
      </NuxtLink>
    </div>

    <!-- Main Content -->
    <div class="px-[320px] pb-[92px]">
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
        <div class="flex-1 max-w-[586px] space-y-6">
          <!-- Basic Information -->
          <div class="bg-[#1e2939] border border-[#374151] rounded-lg">
            <div class="px-6 py-6 border-b border-[#374151]">
              <div class="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 9V13M10 17C13.866 17 17 13.866 17 10S13.866 3 10 3 3 6.134 3 10s3.134 7 7 7zM10 7h.01" stroke="#00ffe0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h3 class="text-[16px] leading-[16px] font-semibold text-white">
                  Основная информация
                </h3>
              </div>
            </div>
            <div class="p-6 space-y-6">
              <!-- Tournament Name -->
              <div>
                <label class="block text-[14px] leading-[14px] text-[#d1d5dc] mb-[14px]">
                  Название турнира *
                </label>
                <UInput
                  v-model="form.name"
                  placeholder="Введите название турнира"
                  size="lg"
                  class="bg-[#101828] border-[#374151] h-[36px]"
                />
              </div>

              <!-- Description -->
              <div>
                <label class="block text-[14px] leading-[14px] text-[#d1d5dc] mb-[14px]">
                  Описание
                </label>
                <UTextarea 
                  v-model="form.description"
                  placeholder="Опишите ваш турнир..."
                  :rows="4"
                  class="bg-[#101828] border-[#374151]"
                  resize="none"
                />
              </div>

              <!-- Game and Prize -->
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-[14px] leading-[14px] text-[#d1d5dc] mb-[14px]">
                    Игра *
                  </label>
                  <USelect 
                    v-model="form.game"
                    :options="gameOptions"
                    placeholder="Выберите игру"
                    size="lg"
                    class="bg-[#101828] border-[#374151] h-[36px]"
                  />
                </div>
                <div>
                  <label class="block text-[14px] leading-[14px] text-[#d1d5dc] mb-[14px]">
                    Призовой фонд
                  </label>
                  <UInput 
                    v-model="form.prize"
                    placeholder="$0"
                    size="lg"
                    class="bg-[#101828] border-[#374151] h-[36px]"
                  />
                </div>
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
                <h3 class="text-[16px] leading-[16px] font-semibold text-white">
                  Расписание
                </h3>
              </div>
            </div>
            <div class="p-6">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-[14px] leading-[14px] text-[#d1d5dc] mb-[14px]">
                    Дата начала *
                  </label>
                  <input 
                    v-model="form.startDate"
                    type="date"
                    class="w-full h-[36px] px-[13px] bg-[#101828] border border-[#374151] rounded text-[20px] leading-[20px] text-white focus:border-[#00ffe0] focus:outline-none"
                  />
                </div>
                <div>
                  <label class="block text-[14px] leading-[14px] text-[#d1d5dc] mb-[14px]">
                    Время начала *
                  </label>
                  <input 
                    v-model="form.startTime"
                    type="time"
                    class="w-full h-[36px] px-[13px] bg-[#101828] border border-[#374151] rounded text-[20px] leading-[20px] text-white focus:border-[#00ffe0] focus:outline-none"
                  />
                </div>
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
                <h3 class="text-[16px] leading-[16px] font-semibold text-white">
                  Настройки турнира
                </h3>
              </div>
            </div>
            <div class="p-6 space-y-6">
              <!-- Max Participants and Format -->
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-[14px] leading-[14px] text-[#d1d5dc] mb-[14px]">
                    Максимум участников
                  </label>
                  <select 
                    v-model="form.maxParticipants"
                    class="w-full h-[36px] px-[13px] bg-[#101828] border border-[#374151] rounded text-[20px] leading-[20px] text-white focus:border-[#00ffe0] focus:outline-none appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill%3D%22%2399a1af%22%20d%3D%22M4.427%206.573L8%2010.146l3.573-3.573a.5.5%200%20011.414.707L8.707%2011.56a.5.5%200%2001-.707%200L3.72%207.28a.5.5%200%2001.707-.707z%22/%3E%3C/svg%3E')] bg-no-repeat bg-[length:16px] bg-[right_13px_center]"
                  >
                    <option value="16">16 участников</option>
                    <option value="32">32 участника</option>
                    <option value="64">64 участника</option>
                    <option value="128">128 участников</option>
                  </select>
                </div>
                <div>
                  <label class="block text-[14px] leading-[14px] text-[#d1d5dc] mb-[14px]">
                    Формат турнира
                  </label>
                  <select 
                    v-model="form.format"
                    class="w-full h-[36px] px-[13px] bg-[#101828] border border-[#374151] rounded text-[20px] leading-[20px] text-white focus:border-[#00ffe0] focus:outline-none appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill%3D%22%2399a1af%22%20d%3D%22M4.427%206.573L8%2010.146l3.573-3.573a.5.5%200%20011.414.707L8.707%2011.56a.5.5%200%2001-.707%200L3.72%207.28a.5.5%200%2001.707-.707z%22/%3E%3C/svg%3E')] bg-no-repeat bg-[length:16px] bg-[right_13px_center]"
                  >
                    <option value="single-elimination">Single Elimination</option>
                    <option value="double-elimination">Double Elimination</option>
                    <option value="round-robin">Round Robin</option>
                  </select>
                </div>
              </div>

              <!-- Switches -->
              <div class="space-y-6">
                <div class="flex items-center justify-between">
                  <div>
                    <h4 class="text-[14px] leading-[14px] text-[#d1d5dc] mb-1">
                      Публичный турнир
                    </h4>
                    <p class="text-[20px] leading-[20px] text-[#99a1af]">
                      Турнир будет виден всем пользователям
                    </p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input 
                      v-model="form.isPublic" 
                      type="checkbox" 
                      class="sr-only peer"
                    >
                    <div class="w-8 h-[18px] bg-[#374151] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00ffe0]"></div>
                  </label>
                </div>

                <div class="flex items-center justify-between">
                  <div>
                    <h4 class="text-[14px] leading-[14px] text-[#d1d5dc] mb-1">
                      Открыта регистрация
                    </h4>
                    <p class="text-[20px] leading-[20px] text-[#99a1af]">
                      Участники могут регистрироваться сразу
                    </p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input 
                      v-model="form.registrationOpen" 
                      type="checkbox" 
                      class="sr-only peer"
                    >
                    <div class="w-8 h-[18px] bg-[#374151] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00ffe0]"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- Tournament Rules -->
          <div class="bg-[#1e2939] border border-[#374151] rounded-lg">
            <div class="px-6 py-6 border-b border-[#374151]">
              <h3 class="text-[16px] leading-[16px] font-semibold text-white">
                Правила турнира
              </h3>
            </div>
            <div class="p-6">
              <textarea 
                v-model="form.rules"
                rows="6"
                placeholder="Опишите правила турнира..."
                class="w-full px-[13px] py-[9px] bg-[#101828] border border-[#374151] rounded text-[20px] leading-[20px] text-white placeholder:text-[#99a1af] focus:border-[#00ffe0] focus:outline-none resize-none"
              ></textarea>
            </div>
          </div>
        </div>

        <!-- Right Column - Sidebar -->
        <div class="w-[277px] space-y-6">
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
              @click="createTournament"
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
// Game options for select
const gameOptions = [
  { label: 'Counter-Strike 2', value: 'Counter-Strike 2' },
  { label: 'Dota 2', value: 'Dota 2' },
  { label: 'Valorant', value: 'Valorant' },
  { label: 'League of Legends', value: 'League of Legends' },
  { label: 'Soulcalibur VI', value: 'Soulcalibur VI' }
]

// Form data
const form = ref({
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
const createTournament = async () => {
  // Validate form
  if (!form.value.name || !form.value.game || !form.value.startDate || !form.value.startTime) {
    const toast = useToast()
    toast.add({
      title: 'Ошибка валидации',
      description: 'Пожалуйста, заполните все обязательные поля',
      color: 'error'
    })
    return
  }

  try {
    const { $api } = useNuxtApp()
    const startDateISO = new Date(`${form.value.startDate}T${form.value.startTime}:00`).toISOString()
    const payload = {
      title: form.value.name,
      description: form.value.description,
      game: form.value.game,
      prizePool: form.value.prize ? Number(String(form.value.prize).replace(/[^0-9.]/g, '')) : 0,
      startDate: startDateISO,
      maxParticipants: Number(form.value.maxParticipants),
      format: form.value.format.toUpperCase().replace('-', '_'),
      isPublic: form.value.isPublic,
      registrationOpen: form.value.registrationOpen,
      rules: form.value.rules
    }
    const created: any = await $api('/tournaments', {
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

const cancel = () => {
  navigateTo('/')
}

// Page meta
definePageMeta({
  title: 'Создать турнир'
})
</script>
