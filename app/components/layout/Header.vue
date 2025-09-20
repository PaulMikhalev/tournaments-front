<template>
  <header class="fixed top-0 left-0 right-0 z-50 pointer-events-none">
    <div class="backdrop-blur-sm bg-[rgba(16,24,40,0.95)] border-b border-[#1e2939] px-[208.5px] py-4 pointer-events-auto">
      <div class="flex items-center justify-between gap-[188.3px]">
        <!-- Logo -->
        <div class="flex items-center">
          <svg class="w-8 h-8 mr-2" viewBox="0 0 32 32" fill="none">
            <path d="M16 4L20 12L28 16L20 20L16 28L12 20L4 16L12 12L16 4Z" fill="#00ffe0"/>
          </svg>
          <NuxtLink to="/" class="select-none">
            <span class="text-[18.75px] font-bold text-white leading-[28px]">CyberTournaments</span>
          </NuxtLink>
        </div>
        
        <!-- Navigation -->
        <nav class="flex items-center space-x-8">
          <NuxtLink to="/" class="text-[14.5px] text-white leading-[24px] hover:text-[#00ffe0] transition-colors duration-200">
            Главная
          </NuxtLink>
          <NuxtLink to="/tournaments" class="text-[15.125px] text-[#d1d5dc] leading-[24px] hover:text-white transition-colors duration-200">
            Турниры
          </NuxtLink>
          <NuxtLink to="/results" class="text-[14.5px] text-[#d1d5dc] leading-[24px] hover:text-white transition-colors duration-200">
            Результаты
          </NuxtLink>
        </nav>
        
        <!-- User Actions -->
        <div class="flex items-center space-x-4">
          <NuxtLink 
            to="/create-tournament"
            class="flex items-center gap-2 px-3 py-2 text-[12.688px] font-medium text-[#d1d5dc] leading-[20px] hover:text-white transition-colors duration-200"
          >
            <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M8 0.5v7h7" stroke="currentColor" stroke-width="1" fill="none"/>
              <path d="M8 7.5h-7v7" stroke="currentColor" stroke-width="1" fill="none"/>
            </svg>
            Создать
          </NuxtLink>
          <button class="flex items-center gap-2 px-3 py-2 text-[13.344px] font-medium text-[#d1d5dc] leading-[20px] hover:text-white transition-colors duration-200">
            <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="3" stroke="currentColor" stroke-width="1"/>
              <path d="M8 3v2M8 11v2M3 8h2M11 8h2" stroke="currentColor" stroke-width="1"/>
            </svg>
            Управление
          </button>
          <button class="px-4 py-2 text-[13.453px] font-medium text-[#d1d5dc] leading-[20px] hover:text-white transition-colors duration-200">
            Войти
          </button>
          <button class="px-4 py-2 text-[12.797px] font-medium text-[#d1d5dc] leading-[20px] hover:text-white transition-colors duration-200">
            Регистрация
          </button>
          <NuxtLink 
            to="/profile"
            class="bg-[#00ffe0] text-black px-3 py-2 rounded-[8px] flex items-center gap-2 text-[13.781px] font-medium leading-[20px] hover:bg-[#00d4c4] transition-colors duration-200"
          >
            <svg class="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 2a3 3 0 100 6 3 3 0 000-6zM4 12a4 4 0 118 0v2H4v-2z"/>
            </svg>
            Профиль
          </NuxtLink>
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
      </div>
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
            <NuxtLink 
              to="/create-tournament"
              class="flex items-center justify-center gap-2 px-3 py-2 rounded-lg hover:bg-mirage/50 transition-colors duration-200"
              @click="closeMobileMenu"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33 8H12.67" stroke="#D1D5DC" stroke-width="1.33"/>
                <path d="M8 3.33V12.67" stroke="#D1D5DC" stroke-width="1.33"/>
              </svg>
              <span class="text-mischka font-medium text-sm">Создать</span>
            </NuxtLink>
            
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
            <NuxtLink 
              to="/profile"
              class="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-cyan-400 rounded-lg hover:bg-cyan-500 transition-colors duration-200 font-medium text-black"
              @click="closeMobileMenu"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33 10H12.67V14H3.33V10Z" stroke="#000000" stroke-width="1.33"/>
                <path d="M5.33 2H10.67V7.33H5.33V2Z" stroke="#000000" stroke-width="1.33"/>
              </svg>
              Профиль
            </NuxtLink>
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
