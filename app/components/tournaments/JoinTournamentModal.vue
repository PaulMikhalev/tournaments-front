<template>
  <UModal v-model:open="internalOpen" title="Выбор персонажа" class="max-w-[1400px]">
    <template #body>
      <div class="space-y-3">
        <label class="block text-sm text-[#99a1af]">Персонаж</label>
        <UInput v-model="character" placeholder="Введите имя персонажа" :disabled="loading" />
      </div>
      
      <div class="flex flex-col gap-2 items-center justify-center">
        <!-- 1 строка - 5 персонажей -->
        <div class="grid grid-cols-5 gap-2">
          <CharItem v-for="(char, id) in characterList.slice(0, 5)" :key="id" :character="char" @click="selectCharacter(char)" />
        </div>
        
        <!-- 2 строка - 7 персонажей -->
        <div class="grid grid-cols-7 gap-2">
            <CharItem v-for="(char, id) in characterList.slice(5, 12)" :key="id" :character="char" @click="selectCharacter(char)" />
        </div>
        
        <!-- 3 строка - 7 персонажей -->
        <div class="grid grid-cols-7 gap-2">
          <CharItem v-for="(char, id) in characterList.slice(12, 19)" :key="id" :character="char" @click="selectCharacter(char)" />
        </div>
        
        <!-- 4 строка - 7 персонажей -->
        <div class="grid grid-cols-7 gap-2">
          <CharItem v-for="(char, id) in characterList.slice(19, 26)" :key="id" :character="char" @click="selectCharacter(char)" />
        </div>
        
        <!-- 5 строка - 3 персонажа -->
        <div class="grid grid-cols-3 gap-2">
          <CharItem v-for="(char, id) in characterList.slice(26, 29)" :key="id" :character="char" @click="selectCharacter(char)" />
        </div>
      </div>
    </template>

    <template #footer>
      <div class="flex justify-end gap-2">
        <UButton color="neutral" variant="soft" @click="onCancel">Отмена</UButton>
        <UButton color="primary" :loading="loading" :disabled="!character" @click="onConfirm">Подтвердить</UButton>
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import CharItem from '~/components/sc6/CharacterItem.vue';
import { characterListInGameOrder, getCharacterName } from '~/types/soulcalibur';

const props = defineProps<{ open: boolean; loading?: boolean }>()
const emit = defineEmits<{ (e: 'update:open', value: boolean): void; (e: 'confirm', character: string): void; (e: 'cancel'): void }>()

const internalOpen = computed({
  get: () => props.open,
  set: (v: boolean) => emit('update:open', v)
})

const loading = computed(() => !!props.loading)
const character = ref('')

watch(() => props.open, (val) => { if (!val) character.value = '' })

const onCancel = () => {
  emit('cancel')
  internalOpen.value = false
}

const onConfirm = () => {
  if (!character.value) return
  emit('confirm', character.value)
}

const selectCharacter = (char: string | null) => {
  if (char === null) {
    character.value = 'Random'
  } else {
    character.value = getCharacterName(char as any)
  }
}

const characterList = computed(() => {
  return characterListInGameOrder
})
</script>


