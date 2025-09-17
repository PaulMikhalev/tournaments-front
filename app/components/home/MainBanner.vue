<template>
  <section class="bg-[rgba(30,41,57,0.5)] border border-[rgba(54,65,83,1)] rounded-2xl shadow-lg">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
      <div class="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
        <h1 class="text-4xl lg:text-6xl font-bold leading-tight text-white">Онлайн турниры для всех</h1>
        <p class="text-base lg:text-lg text-gray-300 max-w-xl">Участвуй, побеждай и получай призы! Присоединяйся к сообществу игроков прямо сейчас.</p>
        <div class="flex items-center gap-4">
          <button class="bg-blue-600 text-white font-medium px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">Принять участие</button>
          <NuxtLink to="/" class="text-white/80 hover:text-white transition">Подробнее</NuxtLink>
        </div>
      </div>
      <div class="flex-1 flex justify-center lg:justify-end">
        <img src="/banner-placeholder.png" alt="Турнирный баннер" class="w-60 lg:w-[26rem] h-auto rounded-xl shadow-lg object-cover" />
      </div>
    </div>
  </section>
</template>
