import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import PlaylistsView from "../views/PlaylistsView.vue";
import SearchView from "../views/SearchView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/playlists",
    name: "Playlists",
    component: PlaylistsView,
  },
  {
    path: "/busqueda",
    name: "SearchView",
    component: SearchView,
    props: (route) => ({ query: route.query.q }), // Asegura que la consulta se pase correctamente
  },
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
