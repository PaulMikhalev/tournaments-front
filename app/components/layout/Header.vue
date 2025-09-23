<template>
  <header class="fixed top-0 left-0 right-0 z-50 pointer-events-none">
    <div class="backdrop-blur-sm bg-[rgba(16,24,40,0.95)] border-b border-[#1e2939] pointer-events-auto">
      <div class="container mx-auto max-w-[1236px] px-4 py-4 flex items-center justify-between gap-8">
        <!-- Logo -->
        <div class="flex items-center">
          <svg class="w-8 h-8 mr-2" viewBox="0 0 32 32" fill="none">
            <path d="M16 4L20 12L28 16L20 20L16 28L12 20L4 16L12 12L16 4Z" fill="#00ffe0"/>
          </svg>
          <NuxtLink to="/" class="select-none">
            <span class="text-[18.75px] font-bold text-white leading-[28px]">BlackholeTournaments</span>
          </NuxtLink>
        </div>

        <!-- User Actions -->
        <div class="lg:flex hidden items-center space-x-4">
          <UButton 
            to="/tournaments/create"
            variant="ghost" 
            size="sm"
            icon="i-heroicons-plus"
            class="text-[#d1d5dc] hover:text-white"
          >
            Создать
          </UButton>
          <UButton 
            variant="ghost" 
            size="sm"
            icon="i-heroicons-cog-6-tooth"
            class="text-[#d1d5dc] hover:text-white"
          >
            Управление
          </UButton>
          <UButton 
            v-if="!isAuthenticated"
            to="/login"
            variant="ghost" 
            size="sm"
            class="text-[#d1d5dc] hover:text-white"
          >
            Войти
          </UButton>
          <UButton 
            v-if="!isAuthenticated"
            to="/register"
            variant="ghost" 
            size="sm"
            class="text-[#d1d5dc] hover:text-white"
          >
            Регистрация
          </UButton>
          <UButton 
            to="/profile"
            color="primary"
            variant="solid"
            size="sm"
            icon="i-heroicons-user-solid"
            class="bg-[#00ffe0] hover:bg-[#00d4c4] text-black"
          >
            Профиль
          </UButton>
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
      class="lg:hidden overflow-hidden transition-all duration-300 bg-ebony "
      :class="{ 'max-h-96': isMobileMenuOpen, 'max-h-0': !isMobileMenuOpen }"
    >
      <nav class="container mx-auto max-w-[1236px] px-4 sm:px-6 py-4 space-y-4">
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
        
        <div class="pt-4 border-t border-mirage space-y-3">
          <div class="grid grid-cols-2 gap-2">
            <UButton 
              to="/tournaments/create"
              variant="ghost"
              size="sm"
              block
              icon="i-heroicons-plus"
              @click="closeMobileMenu"
            >
              Создать
            </UButton>
            
            <UButton 
              variant="ghost"
              size="sm"
              block
              icon="i-heroicons-cog-6-tooth"
              @click="closeMobileMenu"
            >
              Управление
            </UButton>
          </div>
          
          <div class="space-y-2">
            <UButton 
              v-if="!isAuthenticated"
              to="/login"
              variant="ghost"
              size="sm"
              block
              @click="closeMobileMenu"
            >
              Войти
            </UButton>
            <UButton 
              v-if="!isAuthenticated"
              to="/register"
              variant="ghost"
              size="sm"
              block
              @click="closeMobileMenu"
            >
              Регистрация
            </UButton>
            <UButton 
              to="/profile"
              color="primary"
              variant="solid"
              size="sm"
              block
              icon="i-heroicons-user-solid"
              class="bg-cyan-400 hover:bg-cyan-500 text-black"
              @click="closeMobileMenu"
            >
              Профиль
            </UButton>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMobileMenuOpen = ref(false)
const { accessToken } = useApi()
const isAuthenticated = computed(() => Boolean(accessToken.value))

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
