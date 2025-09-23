<template>
    <div 
      class="size-28 bg-gray-200 text-black flex items-center justify-center text-center p-2 cursor-pointer hover:bg-gray-300 character-sprite"
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

<style scoped lang="scss">
.character-sprite {
  background-image: url('/sc6/chars.png');
  background-size: 1085px 775px; // 7 * 155px, 5 * 155px
  background-repeat: no-repeat;
  background-position: 0 0;
}

// 1 строка (0-4 позиции)
.char-cassandra { background-position: 0px 0px; }
.char-siegfried { background-position: -155px 0px; }
.char-zasalamel { background-position: -310px 0px; }
.char-nightmare { background-position: -465px 0px; }
.char-amy { background-position: -620px 0px; }

// 2 строка (5-11 позиции)
.char-2b { background-position: 0px -155px; }
.char-xianghua { background-position: -155px -155px; }
.char-maxi { background-position: -310px -155px; }
.char-sophitia { background-position: -465px -155px; }
.char-astaroth { background-position: -620px -155px; }
.char-ivy { background-position: -775px -155px; }
.char-tira { background-position: -930px -155px; }

// 3 строка (12-18 позиции)
.char-hilde { background-position: 0px -310px; }
.char-yoshimitsu { background-position: -155px -310px; }
.char-kilik { background-position: -310px -310px; }
.char-groh { background-position: -620px -310px; }
.char-cervantes { background-position: -775px -310px; }
.char-setsuka { background-position: -930px -310px; }

// 4 строка (19-25 позиции)
.char-haohmaru { background-position: 0px -465px; }
.char-talim { background-position: -155px -465px; }
.char-mitsurugi { background-position: -310px -465px; }
.char-geralt { background-position: -465px -465px; }
.char-taki { background-position: -620px -465px; }
.char-azwel { background-position: -775px -465px; }
.char-hwang { background-position: -930px -465px; }

// 5 строка (26-28 позиции)
.char-seong_min_na { background-position: 0px -620px; }
.char-raphael { background-position: -155px -620px; }
.char-voldo { background-position: -310px -620px; }

// Специальные случаи для null (Random)
.char-null {
  background: #ef4444;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
</style>