<script setup>
import { RouterLink } from 'vue-router';
import DistrictSearchBarComponent from '@/locals/components/DistrictSearchBar.component.vue';
</script>

<template>
  <nav class="text-(--navbar-text-color) bg-(--primary-color) w-full h-[10dvh] sticky flex justify-between px-4 sm:px-8 md:px-10 lg:px-16 gap-6">
    <RouterLink to="/" class="flex items-center gap-2 transition font-semibold">
      <img src="/logo.png" alt="logo" class="min-w-14 h-14" />
      <p class="hidden sm:flex text-2xl">AlquilaFácil</p>
    </RouterLink>

    <DistrictSearchBarComponent />

    <div class="flex items-center justify-end">
      <ul class="flex gap-3 text-sm sm:text-base lg:text-xl items-center">
        <li class="transition px-3 hidden lg:block hover:text-(--navbar-text-color-hover)">
          <RouterLink to="/publish" class="cursor-pointer">Publicar</RouterLink>
        </li>
        <li class="transition px-3 hidden lg:block hover:text-(--navbar-text-color-hover)">
          <RouterLink to="/calendar" class="cursor-pointer">Calendario</RouterLink>
        </li>
        <li class="transition px-3 hidden lg:block hover:text-(--navbar-text-color-hover)">
          <RouterLink to="/notifications" class="cursor-pointer">Notificaciones</RouterLink>
        </li>
        <li class="transition px-3 hidden lg:block hover:text-(--navbar-text-color-hover)">
          <RouterLink to="/control-panel" class="cursor-pointer">Usuario</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

