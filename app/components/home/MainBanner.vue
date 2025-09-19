<template>
  <section class="relative overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-banner-gradient"></div>
    
    <!-- Content -->
    <div class="relative max-w-[1920px] mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div class="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Main heading -->
          <h1 class="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 xs:mb-8 sm:mb-10 md:mb-12 leading-tight">
            Создавайте и участвуйте в
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">
              турнирах
            </span>
          </h1>
          
          <!-- Subtitle -->
          <p class="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/80 mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20 max-w-3xl mx-auto leading-relaxed">
            Платформа для организации и проведения киберспортивных соревнований
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col xs:flex-row gap-4 xs:gap-6 sm:gap-8 justify-center items-center">
            <NuxtLink
              to="/tournaments"
              class="w-full xs:w-auto inline-flex items-center justify-center px-6 xs:px-8 sm:px-10 md:px-12 py-3 xs:py-4 sm:py-5 md:py-6 text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg xs:rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Найти турнир
            </NuxtLink>
            <NuxtLink
              to="/create"
              class="w-full xs:w-auto inline-flex items-center justify-center px-6 xs:px-8 sm:px-10 md:px-12 py-3 xs:py-4 sm:py-5 md:py-6 text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-primary-400 bg-transparent border-2 border-primary-400 hover:bg-primary-400 hover:text-white rounded-lg xs:rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105"
            >
              Создать турнир
            </NuxtLink>
          </div>
          
          <!-- Stats -->
          <div class="mt-16 xs:mt-20 sm:mt-24 md:mt-28 lg:mt-32 grid grid-cols-2 md:grid-cols-4 gap-6 xs:gap-8 sm:gap-12">
            <div class="text-center">
              <div class="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 xs:mb-3 sm:mb-4">
                500+
              </div>
              <div class="text-sm xs:text-base sm:text-lg md:text-xl text-white/60">
                Турниров
              </div>
            </div>
            <div class="text-center">
              <div class="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 xs:mb-3 sm:mb-4">
                10K+
              </div>
              <div class="text-sm xs:text-base sm:text-lg md:text-xl text-white/60">
                Игроков
              </div>
            </div>
            <div class="text-center">
              <div class="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 xs:mb-3 sm:mb-4">
                $50K+
              </div>
              <div class="text-sm xs:text-base sm:text-lg md:text-xl text-white/60">
                Призовых
              </div>
            </div>
            <div class="text-center">
              <div class="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 xs:mb-3 sm:mb-4">
                24/7
              </div>
              <div class="text-sm xs:text-base sm:text-lg md:text-xl text-white/60">
                Поддержка
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Decorative elements -->
    <div class="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-xl"></div>
    <div class="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
    <div class="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-400/5 rounded-full blur-lg"></div>
  </section>
</template>

<script setup>
// MainBanner component - no additional logic needed for now
</script>
