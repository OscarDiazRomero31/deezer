<template>
  <div class="container mt-4">
    <h2 class="text-success">Gestión de Favoritos</h2>

    <div class="list-group">
      <PlaylistItem
        v-for="cancion in playlist"
        :key="cancion.id"
        :cancion="cancion"
        @reproducir="Reproducircancion"
        @eliminar="Eliminarcancionlista"
      />
    </div>
  </div>
</template>

<script setup>
import { useFavoritesStore } from '@/stores/favorites';
import { computed } from 'vue';
import PlaylistItem from '@/components/PlaylistItem.vue';

const favoritesStore = useFavoritesStore();
const playlist = computed(() => favoritesStore.playlist);
console.log(playlist.value);

const Eliminarcancionlista = (cancion) => {
  favoritesStore.Eliminarcancion(cancion);
};

const Reproducircancion = (cancion) => {
  console.log("🔊 Intentando reproducir:", cancion);
  favoritesStore.reproducirCancionDesdeLista(cancion);
};
</script>

<style scoped>
.container {
  background-color: #222;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
}

h2 {
  color: #28a745; /* Verde */
  font-size: 2rem;
  margin-bottom: 20px;
}

.list-group {
  margin-top: 20px;
}

.list-group-item {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 10px;
}

.list-group-item:hover {
  background-color: #28a745; /* Verde */
}

button {
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
}

button:hover {
  color: #28a745; /* Verde */
}
</style>
