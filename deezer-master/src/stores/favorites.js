import { defineStore } from "pinia";

export const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    playlist: [], 
    enreproducion: null, 
  }),

  getters: {
    isFavorite: (state) => (id) => {
      return state.playlist.some((cancion) => cancion.id === id);
    },
  },

  actions: {
    Agregarcancion(cancion) {
      console.log("🎵 Intentando añadir canción:", cancion);
      if (!this.isFavorite(cancion.id)) {
        this.playlist.push(cancion);
        console.log("✅ Canción añadida:", cancion);

        if (!this.enreproducion) {
          this.setCurrentTrack(cancion);
        }
      }
    },

    Eliminarcancion(cancionId) {
      console.log("🗑️ Intentando eliminar canción con ID:", cancionId);
      this.playlist = this.playlist.filter((cancion) => cancion.id !== cancionId);
      console.log("🎵 Playlist actualizada:", this.playlist);

      if (this.enreproducion?.id === cancionId) {
        this.enreproducion = this.playlist.length > 0 ? { ...this.playlist[0] } : null;
      }
    },

    Borrarlista() {
      this.playlist = [];
      this.enreproducion = null;
      console.log("🚮 Playlist eliminada.");
    },

    reproducirCancionDesdeLista(cancion) {
      console.log("🎶 Intentando reproducir canción:", cancion);
    
      if (!cancion) {
        console.warn("⚠️ No se puede reproducir una canción vacía.");
        return;
      }
    
      const cancionSeleccionada = this.playlist.find((c) => c.id === cancion.id);
    
      if (cancionSeleccionada) {
        this.enreproducion = { ...cancionSeleccionada }; 
        console.log("✅ Canción en reproducción actualizada:", this.enreproducion);
      } else {
        console.warn("⚠️ La canción no está en la playlist.");
      }
    },
    

    setCurrentTrack(track) {
      if (!track) return;
      console.log("🔊 Cambiando canción a:", track);
      this.enreproducion = { ...track }; 
    },

    playNext() {
      console.log('entrado')
      if (this.playlist.length > 0) {
        const currentIndex = this.playlist.findIndex((s) => s.id === this.enreproducion?.id);
        const nextIndex = (currentIndex + 1) % this.playlist.length;
        this.enreproducion = this.playlist[nextIndex];
      }
    },

  }

});
