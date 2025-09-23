<template>
    <div 
      class="relative size-28 text-black flex items-center justify-center text-center p-2 cursor-pointer transition-transform duration-200 hover:scale-105"
      :class="character ? 'bg-cover bg-center bg-no-repeat' : 'bg-red-500 text-white font-bold rounded-lg'"
      :title="character ? getCharacterName(character) : 'Random'"
      :style="character ? { backgroundImage: `url('/sc6/chars/char_${character.toLowerCase()}.png')` } : {}"
    >
      <span v-if="!character" class="text-white font-bold">Random</span>
    </div>
</template>

<script setup lang="ts">
import { getCharacterName, type SoulcaliburCharacter } from '~/types/soulcalibur';

const props = defineProps<{
  character: (SoulcaliburCharacter | null)
}>()

</script>