<script setup>
import { ref, defineEmits } from "vue";
import { useRouter, useRoute } from "vue-router";

const enrutador = useRouter();
const rutaActual = useRoute();

const consultaBusqueda = ref("");

const emitir = defineEmits(["search"]);

const realizarBusqueda = () => {
  if (!consultaBusqueda.value.trim()) {
    console.log("⚠️ No se ingresó ninguna búsqueda.");
    return;
  }

  console.log(`🔍 Buscando: "${consultaBusqueda.value}"`);

  enrutador.push({ name: "SearchView", query: { q: consultaBusqueda.value } });
};
</script>

<template>
  <div class="search-container">
    <form @submit.prevent="realizarBusqueda" class="search-form">
      <input
        type="text"
        class="search-input"
        v-model="consultaBusqueda"
        placeholder="Buscar"
        aria-label="Buscar"
      />
      <button class="search-button" type="submit">
        <i class="bi bi-search"></i>
      </button>
    </form>
  </div>
</template>

<style scoped>
.search-container {
  display: flex;
  justify-content: center; /* Centrado del buscador */
  margin-top: 20px;
}

.search-form {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px; /* Ajustar el tamaño máximo del buscador */
}

.search-input {
  width: 100%;
  padding: 10px;
  border-radius: 25px;
  border: 1px solid #28a745; /* Verde */
  background-color: #333; /* Fondo oscuro */
  color: white;
  font-size: 1rem;
}

.search-input::placeholder {
  color: #bbb;
}

.search-button {
  background-color: #28a745; /* Verde */
  border: none;
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 25px;
  color: white;
  font-size: 1rem;
}

.search-button:hover {
  opacity: 0.8;
}

.search-button i {
  font-size: 1.2rem;
}

/* Estilos para la barra de navegación */
.navbar {
  display: flex;
  justify-content: flex-start; /* Barra de navegación alineada a la izquierda */
  background-color: #222;
  padding: 10px 20px;
}

.navbar-nav {
  display: flex;
  gap: 20px;
}

.navbar-nav .nav-link {
  color: white;
}

.navbar-nav .nav-link:hover {
  color: #28a745; /* Verde para hover */
}
</style>
