<template>
  <header class="sticky top-0 z-50 bg-ebony/95 backdrop-blur-md border-b border-mirage">
    <div class="max-w-[1920px] mx-auto">
      <nav class="px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 h-16 xs:h-18 sm:h-20 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center gap-2 select-none">
            <div class="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-lg bg-primary-600 flex items-center justify-center">
              <span class="text-white font-bold text-sm xs:text-base sm:text-lg">T</span>
            </div>
            <span class="text-white font-bold text-lg xs:text-xl sm:text-2xl">Tournaments</span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8 xl:gap-12">
          <NuxtLink to="/" class="text-white/80 hover:text-white transition-colors duration-200 text-sm xl:text-base font-medium">
            Главная
          </NuxtLink>
          <NuxtLink to="/tournaments" class="text-white/80 hover:text-white transition-colors duration-200 text-sm xl:text-base font-medium">
            Турниры
          </NuxtLink>
          <NuxtLink to="/create" class="text-white/80 hover:text-white transition-colors duration-200 text-sm xl:text-base font-medium">
            Создать турнир
          </NuxtLink>
          <NuxtLink to="/about" class="text-white/80 hover:text-white transition-colors duration-200 text-sm xl:text-base font-medium">
            О нас
          </NuxtLink>
          <NuxtLink to="/contacts" class="text-white/80 hover:text-white transition-colors duration-200 text-sm xl:text-base font-medium">
            Контакты
          </NuxtLink>
        </nav>

        <!-- Desktop Auth Buttons -->
        <div class="hidden sm:flex items-center gap-3 lg:gap-4">
          <NuxtLink to="/profile" class="hidden lg:inline-block text-white/80 hover:text-white transition-colors duration-200 text-sm xl:text-base font-medium">
            Профиль
          </NuxtLink>
          <button class="text-sm xl:text-base px-4 py-2 xl:px-6 xl:py-2.5 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200 font-medium">
            Войти
          </button>
          <button class="text-sm xl:text-base px-4 py-2 xl:px-6 xl:py-2.5 rounded-lg border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-colors duration-200 font-medium">
            Регистрация
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="sm:hidden flex flex-col gap-1 p-2"
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
      class="sm:hidden overflow-hidden transition-all duration-300 bg-ebony border-t border-mirage"
      :class="{ 'max-h-96': isMobileMenuOpen, 'max-h-0': !isMobileMenuOpen }"
    >
      <nav class="px-4 xs:px-6 py-4 space-y-4">
        <NuxtLink 
          to="/" 
          class="block text-white/80 hover:text-white transition-colors duration-200 font-medium py-2"
          @click="closeMobileMenu"
        >
          Главная
        </NuxtLink>
        <NuxtLink 
          to="/tournaments" 
          class="block text-white/80 hover:text-white transition-colors duration-200 font-medium py-2"
          @click="closeMobileMenu"
        >
          Турниры
        </NuxtLink>
        <NuxtLink 
          to="/create" 
          class="block text-white/80 hover:text-white transition-colors duration-200 font-medium py-2"
          @click="closeMobileMenu"
        >
          Создать турнир
        </NuxtLink>
        <NuxtLink 
          to="/about" 
          class="block text-white/80 hover:text-white transition-colors duration-200 font-medium py-2"
          @click="closeMobileMenu"
        >
          О нас
        </NuxtLink>
        <NuxtLink 
          to="/contacts" 
          class="block text-white/80 hover:text-white transition-colors duration-200 font-medium py-2"
          @click="closeMobileMenu"
        >
          Контакты
        </NuxtLink>
        <div class="pt-4 border-t border-mirage space-y-3">
          <NuxtLink 
            to="/profile" 
            class="block text-white/80 hover:text-white transition-colors duration-200 font-medium py-2"
            @click="closeMobileMenu"
          >
            Профиль
          </NuxtLink>
          <div class="space-y-2">
            <button 
              class="w-full text-sm px-4 py-2.5 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200 font-medium"
              @click="closeMobileMenu"
            >
              Войти
            </button>
            <button 
              class="w-full text-sm px-4 py-2.5 rounded-lg border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-colors duration-200 font-medium"
              @click="closeMobileMenu"
            >
              Регистрация
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
