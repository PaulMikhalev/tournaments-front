<template>
  <div class="flex justify-between items-center mb-8">
    <div class="flex flex-col gap-2">
      <h2 class="text-[29.063px] font-bold text-white leading-[36px]">
        {{ title }}
      </h2>
      <p class="text-[14.75px] text-[#99a1af] leading-[24px]">
        {{ description }}
      </p>
    </div>
    <div v-if="showCount">
      <span class="text-[13.016px] text-[#99a1af] leading-[20px]">
        Найдено: <span class="text-[#00ffe0] font-medium">{{ count }}</span> турниров
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  count?: number
  showCount?: boolean
}

withDefaults(defineProps<Props>(), {
  showCount: true
})
</script>
