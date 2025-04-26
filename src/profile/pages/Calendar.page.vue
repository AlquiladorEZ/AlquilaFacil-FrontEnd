<script setup>
import NavbarComponent from '../../public/components/Navbar.component.vue';
import CalendarComponent from '../components/Calendar.component.vue';
</script>

<template>
  <NavbarComponent />
  <main class="w-full min-h-[90dvh] px-4 sm:px-8 md:px-10 lg:px-16 py-4">
    <CalendarComponent />
  </main>
</template>
