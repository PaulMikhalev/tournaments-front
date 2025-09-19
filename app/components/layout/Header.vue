<template>
  <header class="sticky top-0 z-50 bg-ebony/95 backdrop-blur-md border-b border-mirage">
    <div class="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-52">
      <nav class="h-16 lg:h-[65px] flex items-center justify-between gap-4 lg:gap-48">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 flex items-center justify-center">
            <!-- Custom Tournament Icon -->
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.33 19.55H13.33V29.31H9.33V19.55Z" stroke="#00FFE0" stroke-width="2.67"/>
              <path d="M18.67 19.55H22.67V29.31H18.67V19.55Z" stroke="#00FFE0" stroke-width="2.67"/>
              <path d="M24 5.33H29.33V12H24V5.33Z" stroke="#00FFE0" stroke-width="2.67"/>
              <path d="M5.33 29.33H26.67" stroke="#00FFE0" stroke-width="2.67"/>
              <path d="M8 2.67H24V20H8V2.67Z" stroke="#00FFE0" stroke-width="2.67"/>
              <path d="M2.67 5.33H8V12H2.67V5.33Z" stroke="#00FFE0" stroke-width="2.67"/>
            </svg>
          </div>
          <NuxtLink to="/" class="select-none">
            <span class="text-white font-bold text-[18.75px] leading-[1.49]">CyberTournaments</span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center">
          <div class="w-[90px] h-6">
            <NuxtLink to="/" class="text-white font-normal text-[14.5px] leading-[1.66] hover:text-cyan-400 transition-colors duration-200">
              Главная
            </NuxtLink>
          </div>
          <div class="w-[97px] h-6">
            <NuxtLink to="/tournaments" class="text-mischka font-normal text-[14.5px] leading-[1.66] hover:text-white transition-colors duration-200">
              Турниры
            </NuxtLink>
          </div>
          <div class="h-6">
            <NuxtLink to="/results" class="text-mischka font-normal text-[14.5px] leading-[1.66] hover:text-white transition-colors duration-200">
              Результаты
            </NuxtLink>
          </div>
        </nav>

        <!-- Desktop Buttons -->
        <div class="hidden lg:flex items-center">
          <!-- Создать Button -->
          <div class="pr-4 h-9">
            <UButton
              color="white"
              variant="ghost"
              size="sm"
              icon="i-heroicons-plus"
              :ui="{
                base: 'h-9 text-[13.78px] leading-[1.45] font-medium',
                padding: 'px-3 py-2',
                gap: 'gap-2',
                color: {
                  white: {
                    ghost: 'text-mischka hover:bg-mirage/50'
                  }
                }
              }"
            >
              Создать
            </UButton>
          </div>
          
          <!-- Управление Button -->
          <div class="pr-4 h-9">
            <UButton
              color="white"
              variant="ghost"
              size="sm"
              icon="i-heroicons-squares-2x2"
              :ui="{
                base: 'h-9 text-[13.78px] leading-[1.45] font-medium',
                padding: 'px-3 py-2',
                gap: 'gap-2',
                color: {
                  white: {
                    ghost: 'text-mischka hover:bg-mirage/50'
                  }
                }
              }"
            >
              Управление
            </UButton>
          </div>
          
          <!-- Войти Button -->
          <div class="pr-4 h-9">
            <UButton
              color="white"
              variant="ghost"
              size="sm"
              :ui="{
                base: 'h-9 text-[13.78px] leading-[1.45] font-medium',
                padding: 'px-4 py-2',
                color: {
                  white: {
                    ghost: 'text-mischka hover:bg-mirage/50'
                  }
                }
              }"
            >
              Войти
            </UButton>
          </div>
          
          <!-- Регистрация Button -->
          <div class="pr-4 h-9">
            <UButton
              color="white"
              variant="ghost"
              size="sm"
              :ui="{
                base: 'h-9 text-[13.78px] leading-[1.45] font-medium',
                padding: 'px-4 py-2',
                color: {
                  white: {
                    ghost: 'text-mischka hover:bg-mirage/50'
                  }
                }
              }"
            >
              Регистрация
            </UButton>
          </div>
          
          <!-- Профиль Button (Active) -->
          <div class="h-9">
            <UButton
              color="cyan"
              variant="solid"
              size="sm"
              icon="i-heroicons-user"
              :ui="{
                base: 'h-9 text-[13.78px] leading-[1.45] font-medium',
                padding: 'px-3 py-2',
                gap: 'gap-2',
                color: {
                  cyan: {
                    solid: 'text-black bg-cyan-400 hover:bg-cyan-500'
                  }
                }
              }"
            >
              Профиль
            </UButton>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="lg:hidden flex flex-col gap-1 p-2"
          :class="{ 'gap-0': isMobileMenuOpen }"
        >
          <span 
            class="w-6 h-0.5 bg-white transition-all duration-300"
            :class="{ 'rotate-45 translate-y-1.5': isMobileMenuOpen }"
          ></span>
          <span 
            class="w-6 h-0.5 bg-white transition-all duration-300"
            :class="{ 'opacity-0': isMobileMenuOpen }"
          ></span>
          <span 
            class="w-6 h-0.5 bg-white transition-all duration-300"
            :class="{ '-rotate-45 -translate-y-1.5': isMobileMenuOpen }"
          ></span>
        </button>
      </nav>
    </div>

    <!-- Mobile Menu -->
    <div 
      class="lg:hidden overflow-hidden transition-all duration-300 bg-ebony border-t border-mirage"
      :class="{ 'max-h-96': isMobileMenuOpen, 'max-h-0': !isMobileMenuOpen }"
    >
      <nav class="px-4 sm:px-6 py-4 space-y-4">
        <NuxtLink 
          to="/" 
          class="block text-white hover:text-cyan-400 transition-colors duration-200 font-normal py-2"
          @click="closeMobileMenu"
        >
          Главная
        </NuxtLink>
        <NuxtLink 
          to="/tournaments" 
          class="block text-mischka hover:text-white transition-colors duration-200 font-normal py-2"
          @click="closeMobileMenu"
        >
          Турниры
        </NuxtLink>
        <NuxtLink 
          to="/results" 
          class="block text-mischka hover:text-white transition-colors duration-200 font-normal py-2"
          @click="closeMobileMenu"
        >
          Результаты
        </NuxtLink>
        
        <div class="pt-4 border-t border-mirage space-y-3">
          <div class="grid grid-cols-2 gap-2">
            <button 
              class="flex items-center justify-center gap-2 px-3 py-2 rounded-lg hover:bg-mirage/50 transition-colors duration-200"
              @click="closeMobileMenu"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33 8H12.67" stroke="#D1D5DC" stroke-width="1.33"/>
                <path d="M8 3.33V12.67" stroke="#D1D5DC" stroke-width="1.33"/>
              </svg>
              <span class="text-mischka font-medium text-sm">Создать</span>
            </button>
            
            <button 
              class="flex items-center justify-center gap-2 px-3 py-2 rounded-lg hover:bg-mirage/50 transition-colors duration-200"
              @click="closeMobileMenu"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.03 1.34H13.97V14.65H2.03V1.34Z" stroke="#D1D5DC" stroke-width="1.33"/>
                <path d="M6 6H10V10H6V6Z" stroke="#D1D5DC" stroke-width="1.33"/>
              </svg>
              <span class="text-mischka font-medium text-sm">Управление</span>
            </button>
          </div>
          
          <div class="space-y-2">
            <button 
              class="w-full text-sm px-4 py-2.5 rounded-lg hover:bg-mirage/50 transition-colors duration-200 font-medium text-mischka"
              @click="closeMobileMenu"
            >
              Войти
            </button>
            <button 
              class="w-full text-sm px-4 py-2.5 rounded-lg hover:bg-mirage/50 transition-colors duration-200 font-medium text-mischka"
              @click="closeMobileMenu"
            >
              Регистрация
            </button>
            <button 
              class="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-cyan-400 rounded-lg hover:bg-cyan-500 transition-colors duration-200 font-medium text-black"
              @click="closeMobileMenu"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33 10H12.67V14H3.33V10Z" stroke="#000000" stroke-width="1.33"/>
                <path d="M5.33 2H10.67V7.33H5.33V2Z" stroke="#000000" stroke-width="1.33"/>
              </svg>
              Профиль
            </button>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Close mobile menu on route change
const router = useRouter()
router.afterEach(() => {
  closeMobileMenu()
})
</script>
