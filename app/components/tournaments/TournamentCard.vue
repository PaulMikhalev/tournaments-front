<template>
  <div class="tournament-card bg-white rounded-xl shadow p-6 flex flex-col gap-4 items-start hover:shadow-lg transition">
    <h3 class="text-xl font-semibold text-blue-700">{{ title }}</h3>
    <p class="text-gray-500">Дата: <span class="font-medium text-gray-800">{{ date }}</span></p>
    <p class="text-gray-500">Призовой фонд: <span class="font-medium text-green-600">{{ prize }}</span></p>
    <button class="mt-auto bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition">Подробнее</button>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  date: String,
  prize: String
})
</script>
