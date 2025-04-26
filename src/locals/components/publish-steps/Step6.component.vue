<script setup>

const props = defineProps({
  photoUrl: String,
});

const emit = defineEmits([
  'update:photoUrl',
]);

const cloudName = "ducsr2p2w"; 
const uploadPreset = "ml_default";

const widget = window.cloudinary.createUploadWidget(
  { cloud_name: cloudName, upload_preset: uploadPreset },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info);
      emit('update:photoUrl', result.info.secure_url);
    }
  }
)

const openUploadWidget = () => {
  emit('update:photoUrl', 'https://res.cloudinary.com/ducsr2p2w/image/upload/v1745502933/casa-de-playa_cwyb1z.jpg');
  //widget.open();
}

</script>

<template>
  <h1 class="text-3xl text-center font-semibold">Agrega una foto de tu espacios</h1>
  <p class="text-lg text-center">Selecciona una imagen de tu galería para que represente.</p>
  <button @click="openUploadWidget" class="flex flex-col p-10 shadow-2xl hover:cursor-pointer">
    <img src="/svgs/camera.svg" alt="camera" class="w-1/2 max-w-110 mx-auto mt-4" />
    <span class="text-center text-gray-700 text-2xl">Añadir una imagen</span>
  </button>
</template>