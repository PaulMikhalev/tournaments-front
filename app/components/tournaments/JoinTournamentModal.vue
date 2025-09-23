<template>
  <UModal v-model:open="internalOpen" title="Выбор персонажа">
    <template #body>
      <div class="space-y-3">
        <label class="block text-sm text-[#99a1af]">Персонаж</label>
        <UInput v-model="character" placeholder="Введите имя персонажа" :disabled="loading" />
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
</script>


