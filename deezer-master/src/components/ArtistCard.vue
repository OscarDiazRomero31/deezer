<script setup>
import { useInfoStore } from "@/stores/infoStore";

const infoStore = useInfoStore();

const props = defineProps({
  artista: Object, 
});

function verDetalles() {
  if (!props.artista) {
    console.error("Error: El artista no está definido.");
    return;
  }
  console.log("🖱️ Click en artista. Enviando a setInfo():", props.artista);
  infoStore.setInfo("artist", props.artista);
}
</script>

<template>
  <div class="card" @click="verDetalles">
    <img :src="props.artista.picture_medium" class="card-img-top" alt="Imagen del artista" />
    <div class="card-body">
      <h5 class="card-title">{{ props.artista.name }}</h5>
      <p class="card-text">Seguidores: {{ props.artista.nb_fan }}</p>
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
  transform: scale(1.05);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
}

.card-img-top {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
  max-height: 200px; /* Limitar el tamaño de la imagen */
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
  color: #ccc;
}

.card-text .followers {
  color: #bbb;
}
</style>
