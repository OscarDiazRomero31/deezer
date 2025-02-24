<template>
  <div id="carouselExampleIndicators" class="carousel slide mx-auto" data-bs-ride="carousel" data-bs-interval="5000">
    <div class="carousel-inner">
      <div v-for="(cancion, index) in canciones" :key="index" :class="['carousel-item', { active: index === 0 }]">
        <div class="carousel-caption d-none d-md-block">
          <h5>Canción: {{ cancion.title }}</h5>
          <p>Álbum: {{ cancion.album.title }}</p>
        </div>
        <img :src="cancion.album.cover_big" class="d-block w-100" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const canciones = ref([]);

const searchDeezer = async () => {
  const llamada = await fetch('http://localhost:8080/https://api.deezer.com/chart');
  const datos = await llamada.json();
  canciones.value = datos.tracks.data.slice(0, 15); 
};

onMounted(searchDeezer);
</script>

<style scoped>
.carousel {
  max-width: 90%; /* Aumentar el ancho para mostrar más contenido */
  margin: 0 auto;
}

.carousel-inner img {
  max-height: 500px; /* Aumentar la altura de las imágenes */
  object-fit: cover; /* Asegura que las imágenes no se deformen */
}

.carousel-caption {
  background: rgba(0, 0, 0, 0.7);
  padding: 15px;
  border-radius: 8px;
}

.carousel-caption h5, .carousel-caption p {
  font-size: 1.1rem; /* Hacer el texto más grande */
  color: #fff;
}
</style>
