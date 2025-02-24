<template>
  <div v-if="mostrarModal" class="overlay">
    <div class="modal-container">
      
      <!-- Input para el nombre -->
      <input v-model="nombre" type="text" class="input-field" placeholder="Escribe tu nombre..." />
  
      <!-- Input para la contraseña -->
      <input v-model="contraseña" type="password" class="input-field mt-2" placeholder="Crea una contraseña" />
  
      <!-- Selección de avatar -->
      <div class="avatar-options">
        <img 
          v-for="(avatar, index) in avatars" 
          :key="index" 
          :src="avatar" 
          :class="{ active: avatarSeleccionado === avatar }"
          @click="avatarSeleccionado = avatar"
          alt="Avatar"
        />
      </div>
  
      <!-- Botón para guardar usuario -->
      <button @click="registrarUsuario" class="btn-save">Registrarse</button>
      <button @click="cerrarModal" class="btn-cancel">Cancelar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const mostrarModal = ref(false);
const nombre = ref('');
const contraseña = ref('');
const avatarSeleccionado = ref('');
const emit = defineEmits(["usuarioRegistrado"]);

const avatars = ref([
  "https://i.pravatar.cc/150?img=14",
  "https://i.pravatar.cc/150?img=15",
  "https://i.pravatar.cc/150?img=16"
]);

const abrirModal = () => {
  mostrarModal.value = true;
};

const cerrarModal = () => {
  mostrarModal.value = false;
};

const registrarUsuario = () => {
  if (nombre.value.trim() && contraseña.value.trim() && avatarSeleccionado.value) {
    const usuario = {
      nombre: nombre.value.trim(),
      contraseña: contraseña.value.trim(),
      avatar: avatarSeleccionado.value
    };

    try {
      localStorage.setItem('usuario', JSON.stringify(usuario));
      console.log("Usuario guardado en localStorage:", usuario);
    } catch (error) {
      console.error("Error guardando en localStorage:", error);
    }

    emit("usuarioRegistrado", usuario);

    cerrarModal();
  } else {
    alert("Por favor, completa todos los campos antes de registrarte.");
  }
};

defineExpose({ abrirModal });
</script>

<style scoped>
/* Modal de bienvenida */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* Fondo oscuro semitransparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
}

.modal-container {
  background-color: #333;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  width: 370px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  color: #fff;
}

/* Input fields */
.input-field {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border-radius: 8px;
  border: 1px solid #444;
  background-color: #555;
  color: #fff;
  font-size: 1rem;
}

/* Contenedor de avatares */
.avatar-options {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
}

.avatar-options img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s, border-color 0.3s;
  border: 2px solid transparent;
}

.avatar-options img:hover {
  transform: scale(1.1);
}

.active {
  border-color: #28a745; /* Verde */
}

/* Botones */
button {
  width: 100%;
  padding: 12px;
  margin-top: 15px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 8px;
}

.btn-save {
  background-color: #28a745; /* Verde */
  color: white;
  border: none;
}

.btn-cancel {
  background-color: #888; /* Gris */
  color: white;
  border: none;
}

button:hover {
  opacity: 0.8;
}
</style>
