<template>
  <!-- Hero Section -->
  <section class="relative px-[504.5px] py-[80px] overflow-hidden">
    <!-- Background with Gradient -->
    <div class="absolute inset-0 opacity-20">
      <img 
        :src="heroBackgroundImage" 
        alt="Esports Tournament"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-[rgba(16,24,40,0.8)] to-[rgba(16,24,40,0.6)]" />
    </div>
    
    <!-- Hero Content -->
    <div class="relative max-w-[896px] mx-auto text-center">
      <div class="mb-[23.3px]">
        <h1 class="text-[57.773px] font-bold text-white leading-[60px] mb-0">
          Киберспортивные
        </h1>
        <h1 class="text-[58.594px] font-bold text-[#00ffe0] leading-[60px]">
          Турниры
        </h1>
      </div>
      
      <div class="max-w-[672px] mx-auto mb-[16.7px]">
        <p class="text-[18.594px] text-[#d1d5dc] leading-[32.5px]">
          Участвуйте в турнирах по популярным играм, соревнуйтесь с лучшими<br>
          игроками и выигрывайте призы
        </p>
      </div>
      
      <!-- Action Buttons -->
      <div class="flex gap-4 justify-center mb-[40.7px]">
        <NuxtLink 
          to="/create-tournament"
          class="bg-[#00ffe0] text-black px-4 py-2 rounded-[8px] flex items-center gap-2 font-semibold text-[16.453px] leading-[28px] hover:bg-[#00d4c4] transition-colors duration-200"
        >
          <svg class="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0.5v7h7" stroke="currentColor" stroke-width="1.33" fill="none"/>
            <path d="M8 7.5h-7v7" stroke="currentColor" stroke-width="1.33" fill="none"/>
          </svg>
          Создать турнир
        </NuxtLink>
        <button class="bg-[rgba(38,38,38,0.3)] text-[#00ffe0] px-4 py-2 rounded-[8px] border border-neutral-800 flex items-center gap-2 font-semibold text-[16.734px] leading-[28px] hover:bg-[rgba(38,38,38,0.5)] transition-colors duration-200">
          <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.33"/>
            <path d="m14 14-6-6" stroke="currentColor" stroke-width="1.33"/>
          </svg>
          Искать турниры
        </button>
      </div>
      
      <!-- Statistics -->
      <div class="flex gap-8 justify-center">
        <div class="text-center">
          <div class="text-[27.656px] font-bold text-white leading-[36px]">250+</div>
          <div class="text-[13.016px] text-[#99a1af] leading-[20px]">Активных турниров</div>
        </div>
        <div class="text-center">
          <div class="text-[30px] font-bold text-white leading-[36px]">15K+</div>
          <div class="text-[13.125px] text-[#99a1af] leading-[20px]">Участников</div>
        </div>
        <div class="text-center">
          <div class="text-[29.297px] font-bold text-white leading-[36px]">$2M+</div>
          <div class="text-[13.234px] text-[#99a1af] leading-[20px]">Призовых</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Hero background image from Figma
const heroBackgroundImage = 'http://localhost:3845/assets/323eff30c7b7b5a5ba695b49b4372777ab3cc5bf.png'
</script>
