<template>
  <div class="carousel-container">
    <Carrusel />
  </div>

</template>

<script setup>
import Carrusel from "../components/carrusel.vue";
</script>

<style scoped>
/* Estilos generales para la página */
h1 {
  color: #28a745; /* Verde */
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

/* Estilo del carrusel */
.carousel-container {
  margin-top: 30px;
  background-color: #444; /* Gris oscuro */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Estilos para el componente de búsqueda */
.search-container {
  margin-top: 40px;
  padding: 15px;
  background-color: #333; /* Gris oscuro */
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Estilo de las listas */
.sass-example {
  .psass {
    font-size: 16px;
    line-height: 1.5;
    color: #bbb;
    padding: 10px;
    border: 1px solid #666;
    background-color: #444; /* Gris oscuro */
    
    ul {
      margin-top: 10px;
      padding-left: 20px;
      list-style-type: square;

      li {
        margin-bottom: 5px;
        color: #fff; /* Blanco */
        font-weight: bold;

        &:hover {
          color: #28a745; /* Verde */
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
