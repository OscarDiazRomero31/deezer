<template>
  <div v-if="mostrarModal" class="modal-overlay">
    <div class="modal-content">

      <input v-model="nombreLogin" type="text" class="form-control" placeholder="Nombre de usuario" />

      <input v-model="contraseñaLogin" type="password" class="form-control mt-2" placeholder="Contraseña" />

      <button @click="iniciarSesion" class="btn btn-success">Login</button>
      <button @click="cerrarModal" class="btn btn-secondary mt-2">Cancelar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const mostrarModal = ref(false);
const nombreLogin = ref('');
const contraseñaLogin = ref('');
const emit = defineEmits(["usuarioLogueado"]);

const abrirModal = () => {
  mostrarModal.value = true;
};

const cerrarModal = () => {
  mostrarModal.value = false;
};

const iniciarSesion = () => {
  const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

  if (!usuarioGuardado) {
    alert("No hay usuario registrado. Por favor, regístrate primero.");
    return;
  }

  if (usuarioGuardado.nombre === nombreLogin.value && usuarioGuardado.contraseña === contraseñaLogin.value) {
    usuarioGuardado.sesionIniciada = true; 
    localStorage.setItem("usuario", JSON.stringify(usuarioGuardado)); 
    emit("usuarioLogueado", usuarioGuardado);
    cerrarModal();
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
};

defineExpose({ abrirModal });
</script>

<style scoped>
/* Modal de inicio de sesión */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
}

.modal-content {
  background: #222; /* Fondo oscuro */
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 350px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

button {
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 8px;
}

.btn-success {
  background-color: #28a745; /* Verde */
  border: none;
  color: white;
}

.btn-success:hover {
  background-color: #218838;
}

.btn-secondary {
  background-color: #6c757d; /* Gris */
  border: none;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
}
</style>
