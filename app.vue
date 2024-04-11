<template>
  <div>
    <NavBar></NavBar>
    <NuxtPage />
  </div>
</template>
<script setup>
import NavBar from './components/NavBar.vue';
useHead({
  title: 'Control de Biblioteca'
  })
</script>