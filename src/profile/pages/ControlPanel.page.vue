<script setup>
import { useRouter } from 'vue-router';
import { useAuthenticationStore } from '../../auth/services/authentication.store.js';
import NavbarComponent from '@/public/components/Navbar.component.vue';

import { onMounted, ref } from 'vue';
import UpdateProfileComponent from '../components/UpdateProfile.component.vue';
import { ProfilesApiService } from '../services/profiles-api.service.js';
import { profilesFakeData } from '../../public/data/profiles.js';
import { ProfileResponse } from '../model/profile.response.js';
import ReportsMadeComponent from '../components/ReportsMade.component.vue';
import PublishedSpacesComponent from '../components/PublishedSpaces.component.vue';

const router = useRouter();
const authenticationStore = useAuthenticationStore();

const profile = ref({});
const profilesApiService = new ProfilesApiService();

const options = {
  modificarPerfil: 'Modificar perfil',
  miSuscripcion: 'Mi suscripción',
  espaciosPublicados: 'Espacios publicados',
  espaciosFavoritos: 'Espacios favoritos',
  soporte: 'Soporte',
  reportesRealizados: 'Reportes realizados',
};
const option = ref(options.modificarPerfil);

onMounted(async () => {
  const userId = authenticationStore.userId;
  profile.value = await profilesApiService.getByUserId(userId);
});

const handleOptionClick = (opt) => {
  option.value = opt;
  console.log(option.value);
}

const handleLogout = () => {
  console.log('🔐 Logout triggered');
  authenticationStore.signOut(router);
}

</script>

<template>
  <NavbarComponent />
  <main class="w-full min-h-[90dvh] px-4 sm:px-8 md:px-10 lg:px-16 py-10 gap-6 flex flex-col">
    <h1 class="text-2xl">Panel de control</h1>
    <div class="w-full flex gap-4">
      <div class="flex items-center shadow-lg rounded-lg px-1 md:px-4 py-4 gap-2 w-1/4 max-h-140">
        <ul class="flex flex-col w-full gap-4 text-xs sm:text-sm md:text-lg ">
          <li v-for="option in options" class="font-semibold flex p-2 w-full items-center justify-between hover:bg-(--button-color) hover:cursor-pointer rounded-lg transition" @click="handleOptionClick(option)">
            <span>{{ option }}</span>
            <svg class="hidden md:block w-5 h-5 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="forward">
              <g>
                <path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"></path>
              </g>
            </svg>
          </li>
          <li class="font-semibold flex p-2 w-full items-center justify-between hover:bg-(--button-color) hover:cursor-pointer rounded-lg transition" @click="handleLogout">
            <span>Cerrar sesión</span>
          </li>
        </ul>
      </div>

      <div class="flex flex-col w-full shadow-lg rounded-lg p-4 bg-white">
        <UpdateProfileComponent :profile="profile" v-if="option === options.modificarPerfil"  />
        <div v-else-if="option === options.miSuscripcion" class="flex flex-col gap-4">
          <h2 class="text-2xl font-semibold">Mi suscripción</h2>
          <p class="text-lg">Aquí puedes ver tu suscripción.</p>
        </div>
        <PublishedSpacesComponent v-else-if="option === options.espaciosPublicados" />
        <div v-else-if="option === options.espaciosFavoritos" class="flex flex-col gap-4">
          <h2 class="text-2xl font-semibold">Espacios favoritos</h2>
          <p class="text-lg">Aquí puedes ver tus espacios favoritos.</p>
        </div>
        <ReportsMadeComponent v-else-if="option === options.reportesRealizados" />
      </div>
    </div>
  </main>
</template>