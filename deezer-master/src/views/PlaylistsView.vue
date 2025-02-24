<template>
  <section class="playlist-container">
    <header class="playlist-header text-center">
      <h1>Gestión de Playlist</h1>
      <p class="description">TU LISTA DE CANCIONES</p>
    </header>

    <div class="playlist-manager-container">
      <PlaylistManager />
    </div>
  </section>
</template>

<script setup>
import PlaylistManager from '@/components/PlaylistManager.vue';
</script>

<style scoped>
.playlist-container {
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
  background-color: #333;
  color: #fff;
  border-radius: 8px;
}

.playlist-header h1 {
  font-size: 2rem;
  font-weight: bold;
  color: #28a745; /* Verde */
}

.playlist-header .description {
  font-size: 1.1rem;
  color: #bbb;
  margin-top: 8px;
}

.playlist-manager-container {
  margin-top: 20px;
  background-color: #444;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
</style>
