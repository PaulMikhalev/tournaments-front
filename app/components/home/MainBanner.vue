<template>
  <section class="relative bg-home-gradient">
    <!-- Background Container with Image and Overlay -->
    <div class="absolute inset-0 opacity-20">
      <!-- Background Image -->
      <img 
        src="/banner-background.png" 
        alt="Esports Tournament Background"
        class="w-full h-full object-cover"
      />
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-ebony/80 to-ebony/60"></div>
    </div>
    
    <!-- Content Container -->
    <div class="relative px-4 lg:px-[208.5px] py-20">
      <div class="max-w-[896px] mx-auto text-center">
        <!-- Main Heading -->
        <div class="mb-6">
          <h1 class="text-[58.59px] font-bold leading-[1.024] text-white mb-0">
            Киберспортивные
          </h1>
          <h1 class="text-[58.59px] font-bold leading-[1.024] text-cyan-400">
            Турниры
          </h1>
        </div>
        
        <!-- Description -->
        <div class="mb-[17px] max-w-[672px] mx-auto">
          <p class="text-[11.06px] leading-[1.446] text-mischka">
            Участвуйте в турнирах по популярным играм, соревнуйтесь с лучшими<br>
            игроками и выигрывайте призы
          </p>
        </div>
        
        <!-- Action Buttons -->
        <div class="flex justify-center gap-4 mb-[41px]">
          <!-- Создать турнир Button (Primary) -->
          <button class="flex items-center justify-center gap-2 px-4 py-4 h-10 bg-cyan-400 rounded-lg hover:bg-cyan-500 transition-colors duration-200">
            <!-- Plus Icon -->
            <div class="w-4 h-4">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33 8H12.67" stroke="#000000" stroke-width="1.33"/>
                <path d="M8 3.33V12.67" stroke="#000000" stroke-width="1.33"/>
              </svg>
            </div>
            <span class="text-[13.78px] leading-[1.45] font-medium text-black">Создать турнир</span>
          </button>
          
          <!-- Искать турниры Button (Secondary) -->
          <button class="flex items-center justify-center gap-2 px-[17px] py-4 h-10 bg-mine-shaft-30 border border-mine-shaft rounded-lg hover:bg-mine-shaft/50 transition-colors duration-200">
            <!-- Search Icon -->
            <div class="w-4 h-4">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.11 11.11L13.33 13.33" stroke="#00FFE0" stroke-width="1.33"/>
                <path d="M2 7.33C2 10.28 4.38 12.67 7.33 12.67C10.28 12.67 12.67 10.28 12.67 7.33C12.67 4.38 10.28 2 7.33 2C4.38 2 2 4.38 2 7.33Z" stroke="#00FFE0" stroke-width="1.33"/>
              </svg>
            </div>
            <span class="text-[13.78px] leading-[1.45] font-medium text-cyan-400">Искать турниры</span>
          </button>
        </div>
        
        <!-- Statistics -->
        <div class="flex justify-center gap-8">
          <!-- 250+ Активных турниров -->
          <div class="text-center">
            <div class="text-[18.75px] leading-[1.493] font-bold text-white mb-0">
              250+
            </div>
            <div class="text-[11.06px] leading-[1.446] text-gray-chateau">
              Активных турниров
            </div>
          </div>
          
          <!-- 15K+ Участников -->
          <div class="text-center">
            <div class="text-[18.75px] leading-[1.493] font-bold text-white mb-0">
              15K+
            </div>
            <div class="text-[11.06px] leading-[1.446] text-gray-chateau">
              Участников
            </div>
          </div>
          
          <!-- $2M+ Призовых -->
          <div class="text-center">
            <div class="text-[18.75px] leading-[1.493] font-bold text-white mb-0">
              $2M+
            </div>
            <div class="text-[11.06px] leading-[1.446] text-gray-chateau">
              Призовых
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// MainBanner component - no additional logic needed for now
</script>
