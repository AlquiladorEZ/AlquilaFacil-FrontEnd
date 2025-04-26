<script setup>
import { watch, ref } from 'vue';
import { ProfileResponse } from '../model/profile.response';
import EditableProfileField from './EditableProfileField.component.vue';

const props = defineProps({
  profile: Object,
});

const profileResponse = ref(null);

watch(
  () => props.profile,
  (newVal) => {
    if (newVal && Object.keys(newVal).length) {
      profileResponse.value = new ProfileResponse(newVal);
    }
  },
  { immediate: true }
);


</script>

<template>
  <div v-if="profileResponse" class="w-full p-4 flex flex-col gap-10">
    <h2 class="text-xl md:text-4xl font-bold text-center mb-6">
      Bienvenido, {{ profileResponse.fullName }}
    </h2>

    <form class="w-full grid grid-cols-1 md:grid-cols-2 gap-18 justify-center items-center">
      <EditableProfileField
        v-model="profileResponse.name"
        label="Nombre"
      />
      <EditableProfileField
        v-model="profileResponse.fatherName"
        label="Apellido paterno"
      />
      <EditableProfileField
        v-model="profileResponse.motherName"
        label="Apellido materno"
      />
      <EditableProfileField
        v-model="profileResponse.phone"
        label="Teléfono"
      />
      <EditableProfileField
        v-model="profileResponse.documentNumber"
        label="Número de documento"
      />
      <EditableProfileField
        v-model="profileResponse.dateOfBirth"
        label="Fecha de nacimiento"
      />
    </form>
  </div>
</template>