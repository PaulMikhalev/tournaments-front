<template>
  <div class="min-h-screen bg-home-gradient flex items-center justify-center px-4">
    <div class="w-full max-w-md">
      <!-- Логотип/заголовок -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-white mb-2">Присоединяйтесь!</h1>
        <p class="text-text-secondary">Создайте аккаунт для участия в турнирах</p>
      </div>

      <!-- Форма регистрации -->
      <div class="bg-surface rounded-2xl p-8 shadow-2xl">
        <RegisterForm @success="handleRegisterSuccess" @error="handleRegisterError" />
        
        <!-- Ссылка на логин -->
        <div class="mt-6 text-center">
          <p class="text-text-secondary">
            Уже есть аккаунт? 
            <NuxtLink to="/login" class="text-primary hover:text-primary/80 font-medium transition-colors">
              Войти
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Мета-данные страницы
useHead({
  title: 'Регистрация - Tournaments',
  meta: [
    { name: 'description', content: 'Создайте аккаунт для участия в киберспортивных турнирах' }
  ]
})

// Обработчики событий
const handleRegisterSuccess = (user: any) => {
  // Перенаправление после успешной регистрации
  navigateTo('/profile')
}

const handleRegisterError = (error: string) => {
  // Показ ошибки через уведомления
  const toast = useToast()
  toast.add({
    title: 'Ошибка регистрации',
    description: error,
    color: 'red'
  })
}
</script>
