<template>
  <header class="sticky top-0 z-50 bg-[rgba(16,24,40,0.95)] backdrop-blur-md border-b border-[rgba(30,41,57,1)]">
    <nav class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <NuxtLink to="/" class="flex items-center gap-2 select-none">
          <span class="inline-block w-2.5 h-2.5 rounded-full bg-blue-500"></span>
          <span class="text-white font-semibold text-lg">Tournaments</span>
        </NuxtLink>
        <ul class="hidden md:flex items-center gap-6 ml-6 text-sm text-gray-300">
          <li><NuxtLink to="/" class="hover:text-white transition">Главная</NuxtLink></li>
          <li><NuxtLink to="/" class="hover:text-white transition">Турниры</NuxtLink></li>
          <li><NuxtLink to="/create" class="hover:text-white transition">Создать турнир</NuxtLink></li>
        </ul>
      </div>

      <div class="flex items-center gap-3">
        <NuxtLink to="/profile" class="hidden md:inline-block text-sm text-gray-300 hover:text-white transition">Профиль</NuxtLink>
        <button class="text-sm px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">Войти</button>
      </div>
    </nav>
  </header>
</template>
