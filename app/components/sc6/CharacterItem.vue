<template>
    <div 
      class="relative size-28 text-black flex items-center justify-center text-center p-2 cursor-pointer character-sprite"
      :class="character ? `char-${character.toLowerCase()}` : 'char-null'"
      :title="character ? getCharacterName(character) : 'Random'"
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
.character-sprite {
  background-image: url('/sc6/chars.png');
  background-size: 784px 560px; /* 1085 * (112/155) = 784px, 775 * (112/155) = 560px */
  background-repeat: no-repeat;
  background-position: 0 0;
}

/* // 1 строка (0-4 позиции) */
.char-cassandra { background-position: 0px 0px; }
.char-siegfried { background-position: -112px 0px; }
.char-zasalamel { background-position: -224px 0px; }
.char-nightmare { background-position: -336px 0px; }
.char-amy { background-position: -448px 0px; }

/* // 2 строка (5-11 позиции) */
.char-2b { background-position: 0px -112px; }
.char-xianghua { background-position: -112px -112px; }
.char-maxi { background-position: -224px -112px; }
.char-sophitia { background-position: -336px -112px; }
.char-astaroth { background-position: -448px -112px; }
.char-ivy { background-position: -560px -112px; }
.char-tira { background-position: -672px -112px; }

/* // 3 строка (12-18 позиции) */
.char-hilde { background-position: 0px -224px; }
.char-yoshimitsu { background-position: -112px -224px; }
.char-kilik { background-position: -224px -224px; }
.char-groh { background-position: -448px -224px; }
.char-cervantes { background-position: -560px -224px; }
.char-setsuka { background-position: -672px -224px; }

/* // 4 строка (19-25 позиции) */
.char-haohmaru { background-position: 0px -336px; }
.char-talim { background-position: -112px -336px; }
.char-mitsurugi { background-position: -224px -336px; }
.char-geralt { background-position: -336px -336px; }
.char-taki { background-position: -448px -336px; }
.char-azwel { background-position: -560px -336px; }
.char-hwang { background-position: -672px -336px; }

/* // 5 строка (26-28 позиции) */
.char-seong_min_na { background-position: 0px -448px; }
.char-raphael { background-position: -112px -448px; }
.char-voldo { background-position: -224px -448px; }

/* // Специальные случаи для null (Random) */
.char-null {
  background: #ef4444;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
</style>