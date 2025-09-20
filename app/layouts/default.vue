<template>
  <div class="min-h-screen bg-home-gradient text-white">
    <Header />
    <NuxtPage class="mt-[69px]" />
    <Footer />
    
  </div>
</template>

<script setup>
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'
</script>
