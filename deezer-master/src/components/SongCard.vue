<template>
  <div class="card h-100 shadow" v-if="cancion && cancion.album">
    <img
      :src="cancion.album?.cover_big || 'https://via.placeholder.com/150'"
      class="card-img-top"
      :alt="cancion.title"
      @click.stop="verDetalles"
    />

    <div class="card-body d-flex flex-column">
      <h5 class="card-title mb-2 text-truncate text-center">
        {{ cancion.title }}
      </h5>

      <p class="card-text text-muted mb-3 text-center">
        {{ cancion.artist.name }}
      </p>

      <audio
        v-if="cancion.preview"
        controls
        class="w-100 mb-3 align-self-center"
      >
        <source :src="cancion.preview" type="audio/mpeg" />
        Tu navegador no soporta audio.
      </audio>

      <button
        class="btn btn-outline-success mt-auto align-self-center"
        @click="añadircancion"
      >
        <i
          :class="esta ? 'bi bi-heart-fill text-success' : 'bi bi-heart'"
          class="me-2"
        ></i>
        <span v-if="esta">Quitar de Favoritos</span>
        <span v-else>Añadir a Favoritos</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useFavoritesStore } from "@/stores/favorites";
import { useInfoStore } from "@/stores/infoStore";

const infoStore = useInfoStore();
const props = defineProps({
  cancion: Object,
});

const cancionValida = computed(() => props.cancion && props.cancion.album);

function verDetalles() {
  if (!cancionValida.value) {
    console.error("❌ Error: La canción no está correctamente definida:", props.cancion);
    return;
  }
  console.log("🖱️ Click en la imagen. Canción enviada a setInfo():", props.cancion);
  infoStore.setInfo("song", props.cancion);
}

const favoritesStore = useFavoritesStore();

const esta = computed(() => favoritesStore.isFavorite(props.cancion.id));

function añadircancion(){
  if (esta.value) {
    favoritesStore.Eliminarcancion(props.cancion.id);
  } else {
    favoritesStore.Agregarcancion(props.cancion);
  }
};
</script>

<style scoped>
/* Estilo de la tarjeta */
.card {
  background-color: #333;
  color: #fff;
  border-radius: 10px;
}

.card-img-top {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #28a745; /* Verde */
}

.card-text {
  font-size: 1rem;
  color: #ccc; /* Gris claro */
}

button {
  background-color: transparent;
  border: 1px solid #28a745; /* Verde */
  color: #28a745; /* Verde */
  font-size: 1rem;
  border-radius: 8px;
  padding: 8px 15px;
}

button:hover {
  background-color: #28a745;
  color: white;
}

.btn-outline-success {
  width: 100%;
  font-size: 1rem;
}

audio {
  width: 100%;
}
</style>
