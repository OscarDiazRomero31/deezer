<template>
  <div>
    <h1>Búsqueda de canciones en Deezer</h1>
    <!-- Componente hijo -->
    <SearchBar @results="handleResults" />
    <hr />
    <div class="filters">
      <label>
        <input type="checkbox" v-model="sortAscending" aria-label="Ordenar ascendente" />
        Ordenar por nombre (ascendente)
      </label>
 
 
      <label>
        Duration mínimo:
        <input type="number" v-model="minDuration" placeholder="Ejemplo: 100" aria-label="Filtrar por BPM" />
      </label>
    </div>
    <!-- Lista de canciones -->
    <ul v-if="songs.length > 0">
      <li v-for="song in filteredAndSortedSongs" :key="song.id">
        <strong>{{ song.title }}</strong> - {{ song.artist.name }} - {{ song.album.title }} - {{ song.duration }}
      </li>
    </ul>
    <p v-else>No hay resultados para mostrar</p>
  </div>
 </template>
 
 
 <script setup>
 import { ref, computed } from "vue";
 import SearchBar from "../components/SearchBar.vue"; // Importa el componente hijo
 
 
 const songs = ref([]); // Estado para almacenar la lista de canciones
 
 
 const sortAscending = ref(false); // Controla el orden ascendente o descendente
 const minDuration = ref(0); // BPM mínimo para el filtro
 
 
 // Lista filtrada y ordenada
 const filteredAndSortedSongs = computed(() => {
  let result = [...songs.value];
 
 
  // Filtrar por BPM mínimo
  if (minDuration.value > 0) {
    result = result.filter(song => song.duration && song.duration >= minDuration.value);
  }
 
 
  // Ordenar por nombre
  if (sortAscending.value) {
    result.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    result.sort((a, b) => b.title.localeCompare(a.title));
  }
 
 
  return result;
 });
 
 
 // Maneja los resultados emitidos por el componente hijo
 const handleResults = (data) => {
  songs.value = data; // Actualiza la lista de canciones
 };
 </script>
 
  
  <style scoped>
  h1 {
    color: #dc3545;
  }
  .search-page {
  padding: 20px;
}

.album-info {
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 10px;
}

.album-info img {
  margin-top: 10px;
  width: 200px;
  border-radius: 10px;
}

.songs {
  margin-top: 20px;
}

.song-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.song-card {
  padding: 10px;
  border: 1px solid #007bff;
  border-radius: 10px;
  background-color: #e9ecef;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.song-card audio {
  margin-top: 10px;
  width: 100%;
}
  </style>
  