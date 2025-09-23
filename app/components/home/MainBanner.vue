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
        <UButton 
          to="/tournaments/create"
          color="primary"
          size="lg"
          icon="i-heroicons-plus"
          class="bg-[#00ffe0] hover:bg-[#00d4c4] text-black font-semibold"
        >
          Создать турнир
        </UButton>
        <UButton 
          to="/tournaments"
          variant="outline"
          size="lg"
          icon="i-heroicons-magnifying-glass-solid"
          class="bg-[rgba(38,38,38,0.3)] text-[#00ffe0] border-neutral-800 hover:bg-[rgba(38,38,38,0.5)] font-semibold"
        >
          Искать турниры
        </UButton>
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

<script setup lang="ts">
// Hero background image from Figma
const heroBackgroundImage = 'http://localhost:3845/assets/323eff30c7b7b5a5ba695b49b4372777ab3cc5bf.png'
</script>
