<script setup>
import { useInfoStore } from "@/stores/infoStore";

const infoStore = useInfoStore();

const props = defineProps({
  album: Object, 
});

function verDetalles() {
  if (!props.album) {
    console.error("❌ Error: El álbum no está definido.");
    return;
  }
  console.log("🖱️ Click en álbum. Enviando a setInfo():", props.album);
  infoStore.setInfo("album", props.album); // Enviamos la información al store
}
</script>

<template>
  <div class="card h-100 shadow-lg" @click="verDetalles">
    <img :src="props.album.cover_big" class="card-img-top" :alt="props.album.title" />
    <div class="card-body text-center">
      <h5 class="card-title text-truncate">{{ props.album.title }}</h5>
      <p class="card-text text-muted">{{ props.album.artist.name }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #333; /* Fondo oscuro */
  color: white;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05); /* Aumenta ligeramente el tamaño al pasar el cursor */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.card-body {
  padding: 15px;
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #28a745; /* Verde */
}

.card-text {
  color: #ccc; /* Gris claro */
}
</style>
