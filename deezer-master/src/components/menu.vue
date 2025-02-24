<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <WelcomeModal ref="welcomeModal" @usuarioRegistrado="usuario = $event" />
      <LoginModal ref="loginModal" @usuarioLogueado="usuario = $event" />

      <SearchBar />

      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">INICIO</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/playlists">Mi LISTA</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/busqueda">CANCIONES</router-link>
        </li>
      </ul>

      <div v-if="usuario" class="d-flex align-items-center">
        <img :src="usuario.avatar" alt="Avatar" class="avatar" />
        <span class="text-white ms-2">Hola, {{ usuario.nombre }}!</span>
        <button @click="cerrarSesion" class="btn btn-sm btn-danger ms-3">Cerrar Sesión</button>
      </div>

      <div v-if="!usuario" class="d-flex">
        <button @click="abrirRegistro" class="btn btn-success me-2">Registrarse</button>
        <button @click="abrirLogin" class="btn btn-primary">Login</button>
      </div>

    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import WelcomeModal from './WelcomeModal.vue';
import LoginModal from './LoginModal.vue';
import SearchBar from './SearchBar.vue';

const usuario = ref(null);
const welcomeModal = ref(null);
const loginModal = ref(null);

onMounted(() => {
  const usuarioGuardado = localStorage.getItem("usuario");
  if (usuarioGuardado) {
    const datosUsuario = JSON.parse(usuarioGuardado);
    if (datosUsuario.sesionIniciada !== false) {
      usuario.value = datosUsuario;
    }
  }
});


const abrirRegistro = () => {
  welcomeModal.value.abrirModal();
};

const abrirLogin = () => {
  loginModal.value.abrirModal();
};

const cerrarSesion = () => {
  let usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
  if (usuarioGuardado) {
    usuarioGuardado.sesionIniciada = false; 
    localStorage.setItem("usuario", JSON.stringify(usuarioGuardado)); 
  }
  usuario.value = null;
};

</script>

<style scoped>
.navbar {
  padding: 10px 20px;
  background-color: #222; /* Fondo oscuro */
}

.navbar-nav .nav-link {
  font-size: 1.1rem;
  color: #fff;
}

.navbar-nav .nav-link:hover {
  color: #28a745; /* Verde para hover */
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.btn {
  border-radius: 25px;
  padding: 8px 20px;
  font-size: 0.9rem;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-success {
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:hover {
  background-color: #218838;
}

.btn-danger {
  background-color: #e74c3c;
  border-color: #e74c3c;
}

.btn-danger:hover {
  background-color: #c0392b;
}

.d-flex {
  display: flex;
}

.ms-2 {
  margin-left: 10px;
}

.ms-3 {
  margin-left: 15px;
}
</style>
