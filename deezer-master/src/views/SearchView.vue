<script setup>
import { ref, watchEffect, nextTick } from "vue";
import { useRoute } from "vue-router";
import SearchResults from "@/components/SearchResults.vue";

const ruta = useRoute();
const consulta = ref(""); 
const canciones = ref([]);
const albumes = ref([]);
const artistas = ref([]);
const cargando = ref(false);
const error = ref("");

const PROXY_URL = "http://localhost:8080/";

const buscar = async (query) => {
  if (!query.trim()) {
    error.value = "Por favor ingresa un término de búsqueda.";
    return;
  }
  consulta.value = query; 
  cargando.value = true;
  error.value = "";

  try {
    console.log(`Buscando en Deezer con: "${query}"`);

    await nextTick();

    const [resCanciones, resAlbumes, resArtistas] = await Promise.all([
      fetch(`${PROXY_URL}https://api.deezer.com/search/track?q=${query}`).then((res) => res.json()),
      fetch(`${PROXY_URL}https://api.deezer.com/search/album?q=${query}`).then((res) => res.json()),
      fetch(`${PROXY_URL}https://api.deezer.com/search/artist?q=${query}`).then((res) => res.json()),
    ]);

    canciones.value = resCanciones?.data?.length ? resCanciones.data : [];
    albumes.value = resAlbumes?.data?.length ? resAlbumes.data : [];
    artistas.value = resArtistas?.data?.length ? resArtistas.data : [];

    console.log("Resultados obtenidos:", {
      canciones: canciones.value.length,
      albumes: albumes.value.length,
      artistas: artistas.value.length,
    });

    if (!resArtistas?.data?.length) {
      console.warn("No se encontraron artistas para esta búsqueda.");
    }
  } catch (err) {
    error.value = "Error al obtener los datos de Deezer.";
    console.error("Error en la búsqueda:", err);
  } finally {
    cargando.value = false;
  }
};

watchEffect(() => {
  consulta.value = ruta.query.q || "";
  if (consulta.value) buscar(consulta.value);
});
</script>

<template>
  <div class="search-container">

    <div v-if="cargando" class="loading-spinner text-center">
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>

    <p v-if="error" class="error-message text-danger text-center">{{ error }}</p>

    <SearchResults v-if="!cargando" :canciones="canciones" :albumes="albumes" :artistas="artistas" />

  </div>
</template>

<style scoped>
.search-container {
  max-width: 1000px;
  margin: 0 auto;
  background-color: #333;
  color: white;
  padding: 20px;
  border-radius: 8px;
}

.loading-spinner {
  margin-top: 20px;
}

.error-message {
  font-size: 1.2rem;
  margin-top: 20px;
  font-weight: bold;
}

.search-results {
  margin-top: 30px;
}

/* Alineación del spinner */
.spinner-border {
  margin-top: 10px;
}

/* Estilo para los resultados */
.search-results {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}
</style>
