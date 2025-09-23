<template>
    <div 
      class="relative size-28 text-black flex items-center justify-center text-center p-2 cursor-pointer"
      :class="character ? 'character-avatar' : 'char-null'"
      :title="character ? getCharacterName(character) : 'Random'"
      :style="character ? { backgroundImage: `url('/sc6/chars/${character.toLowerCase()}.png')` } : {}"
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

<style scoped>
.character-avatar {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.character-avatar:hover {
  transform: scale(1.05);
}

.char-null {
  background: #ef4444;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
}
</style>