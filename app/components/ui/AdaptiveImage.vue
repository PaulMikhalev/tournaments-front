<template>
  <img :src="src" :alt="alt" />
</template>

<script setup>
defineProps({
  src: String,
  alt: String
})
</script>
