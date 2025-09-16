<template>
  <section class="tournaments-list py-10 md:py-16 px-4 md:px-16">
    <h2 class="text-2xl md:text-4xl font-bold mb-8 text-center md:text-left">Ближайшие турниры</h2>
    <div class="tournaments-list__cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
      <TournamentCard v-for="n in 3" :key="n" :title="`Турнир #${n}`" :date="'01.10.2024'" :prize="'10 000 ₽'" />
    </div>
    <div class="flex justify-center">
      <button class="tournaments-list__all bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">Смотреть все турниры</button>
    </div>
  </section>
</template>

<script setup>
import TournamentCard from '~/components/tournaments/TournamentCard.vue'
</script>
