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
          <UButton
            color="cyan"
            variant="solid"
            size="md"
            icon="i-heroicons-plus"
            :ui="{
              base: 'h-10 text-[13.78px] leading-[1.45] font-medium',
              padding: 'px-4 py-4',
              gap: 'gap-2',
              color: {
                cyan: {
                  solid: 'shadow-sm text-black bg-cyan-400 hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400'
                }
              }
            }"
          >
            Создать турнир
          </UButton>
          
          <!-- Искать турниры Button (Secondary) -->
          <UButton
            color="white"
            variant="outline"
            size="md"
            icon="i-heroicons-magnifying-glass"
            :ui="{
              base: 'h-10 text-[13.78px] leading-[1.45] font-medium',
              padding: 'px-[17px] py-4',
              gap: 'gap-2',
              color: {
                white: {
                  outline: 'shadow-sm bg-mine-shaft-30 text-cyan-400 ring-1 ring-inset ring-mine-shaft hover:bg-mine-shaft/50'
                }
              },
              icon: {
                leading: {
                  wrapper: 'flex items-center',
                  pointer: 'pointer-events-none',
                  padding: ''
                }
              }
            }"
          >
            Искать турниры
          </UButton>
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
