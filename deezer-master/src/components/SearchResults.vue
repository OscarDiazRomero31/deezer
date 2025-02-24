<script setup>
import { ref, computed, defineProps, defineEmits } from "vue";
import SongCard from "@/components/SongCard.vue";
import AlbumCard from "@/components/AlbumCard.vue";
import ArtistCard from "@/components/ArtistCard.vue";

const props = defineProps({
  canciones: {
    type: Array,
    default: () => [],
  },
  albumes: {
    type: Array,
    default: () => [],
  },
  artistas: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["reproducir"]);

function emitirCancion(cancion) {
  emit('reproducir', cancion);
}

const filtro = ref("todos"); 

const resultadosFiltrados = computed(() => {
  return {
    canciones: filtro.value === "canciones" || filtro.value === "todos" ? props.canciones : [],
    albumes: filtro.value === "albumes" || filtro.value === "todos" ? props.albumes : [],
    artistas: filtro.value === "artistas" || filtro.value === "todos" ? props.artistas : [],
  };
});
</script>

<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Busqueda</h1>

    <div class="mb-4 text-center">
      <button class="btn btn-green me-2" @click="filtro = 'todos'">Todos</button>
      <button class="btn btn-green me-2" @click="filtro = 'canciones'">Canciones</button>
      <button class="btn btn-green me-2" @click="filtro = 'albumes'">Álbumes</button>
      <button class="btn btn-green" @click="filtro = 'artistas'">Artistas</button>
    </div>

    <div v-if="resultadosFiltrados.canciones.length">
      <h2 class="text-success">Canciones</h2>
      <div class="row">
        <div v-for="cancion in resultadosFiltrados.canciones" :key="cancion.id" class="col-md-4 col-lg-3 mb-4">
          <div @click="emitirCancion(cancion)">
            <SongCard :cancion="cancion" />
          </div>
        </div>
      </div>
    </div>

    <div v-if="resultadosFiltrados.albumes.length">
      <h2 class="text-danger mt-4">Álbumes</h2>
      <div class="row">
        <div v-for="album in resultadosFiltrados.albumes" :key="album.id" class="col-md-4 col-lg-3 mb-4">
          <AlbumCard :album="album" />
        </div>
      </div>
    </div>

    <div v-if="resultadosFiltrados.artistas.length">
      <h2 class="text-warning mt-4">Artistas</h2>
      <div class="row">
        <div v-for="artista in resultadosFiltrados.artistas" :key="artista.id" class="col-md-4 col-lg-3 mb-4">
          <ArtistCard :artista="artista" />
        </div>
      </div>
    </div>

    <p v-if="!resultadosFiltrados.canciones.length && !resultadosFiltrados.albumes.length && !resultadosFiltrados.artistas.length" class="text-center text-danger fs-4">
      Resultado no disponible.
    </p>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  background-color: #222;
  color: white;
  padding: 20px;
  border-radius: 10px;
}

button {
  font-size: 1rem;
  border-radius: 8px;
  padding: 10px 20px;
  border: 2px solid #28a745; /* Verde */
  background-color: #28a745; /* Fondo verde */
  color: white;
}

button:hover {
  background-color: #218838; /* Fondo verde más oscuro */
  border-color: #218838; /* Borde verde más oscuro */
}

h1 {
  color: #28a745; /* Verde */
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
}

.text-success {
  color: #28a745; /* Verde */
}

.text-danger {
  color: #e74c3c; /* Rojo */
}

.text-warning {
  color: #f39c12; /* Amarillo */
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.col-md-4,
.col-lg-3 {
  display: flex;
  justify-content: center;
}

.mb-4 {
  margin-bottom: 20px;
}

.btn-green {
  background-color: #28a745; /* Verde */
  border-color: #28a745; /* Borde verde */
}

.btn-green:hover {
  background-color: #218838; /* Verde más oscuro */
  border-color: #218838; /* Borde verde más oscuro */
}
</style>
