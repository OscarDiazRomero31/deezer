<template>
  <div id="app">
    <header class="header">
      <div class="header-content">
        <h1>
          <router-link class="brand-link" to="/">MI APP DE MUSICA</router-link>
        </h1>
      </div>
    </header>

    <div class="navigation-wrapper">
      <Menu />
    </div>

    <main class="main-content">
      <RouterView />
    </main>

    <InfoView />

    <footer class="footer">
      <p>&copy; Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Menu from './components/menu.vue';
</script>

<style lang="scss">
$primary-color: #28a745; /* Verde */
$footer-bg-color: #212529;
$footer-text-color: #f8f9fa;

.header {
  background-color: $primary-color;
  color: #fff;
  padding: 20px 0;
}

.header-content {
  text-align: center;
}

.brand-link {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 2.5rem;
}

.navigation-wrapper {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #333;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: top 0.3s ease;
}

.main-content {
  margin: 20px;
  color: #fff;
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
}

.footer {
  background-color: $footer-bg-color;
  color: $footer-text-color;
  text-align: center;
  padding: 15px 0;
  margin-top: 40px;
}

footer p {
  margin: 0;
}

/* Efectos de hover para los elementos de la navegación */
nav li {
  &:hover {
    background-color: $primary-color;
    color: #333;
  }
}

/* Reproductor centrado en la pantalla */
.reproductor-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  text-align: center;
}
</style>
