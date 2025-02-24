<template>
  <div class="card mb-3 playlist-item">
    <div class="row g-0 align-items-center">
      <div class="col-md-4">
        <img 
          :src="cancion.album.cover" 
          class="img-fluid rounded-start"
          alt="Album cover"
          @click="$emit('reproducir', cancion)"
        />
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title">{{ cancion.title }}</h5>
          <p class="card-text">
            <small class="text-muted">{{ cancion.artist.name }}</small>
          </p>
        </div>
      </div>
      <div class="col-md-2">
        <button @click="$emit('eliminar', cancion.id)" class="btn btn-danger btn-sm">
          <i class="bi bi-trash"></i> Eliminar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    cancion: Object
});
</script>

<style scoped>
.playlist-item {
  background-color: #333; /* Dark background for the item */
  color: #fff; /* White text */
  border-radius: 10px;
}

.img-fluid {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.card-body {
  padding: 10px;
}

.card-title {
  font-size: 1.1rem;
  font-weight: bold;
  color: #28a745; /* Green color for the title */
}

.card-text {
  color: #ccc; /* Light grey color for the artist name */
}

.btn-danger {
  background-color: #e74c3c; /* Red background */
  border: none;
  color: white;
  border-radius: 5px;
}

.btn-danger:hover {
  background-color: #c0392b; /* Darker red on hover */
}

button i {
  margin-right: 5px;
}
</style>
