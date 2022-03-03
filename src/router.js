import { createRouter, createWebHistory } from "vue-router";
import useAuth from "./composable/useAuth";

// Importing the pages
import Index from "./pages/index.vue";
import About from "./pages/about.vue";
import Members from "./pages/members.vue";
import Music from "./pages/music.vue";
import Shop from "./pages/shop.vue";
import Login from "./pages/login.vue";
import Register from "./pages/register.vue";
import Fanclub from "./pages/fanclub.vue";
import NotFound from "./pages/404.vue";

const { isAuthenticated } = useAuth();

// Creating the routes
const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/music",
    name: "Music",
    component: Music,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/members",
    name: "Members",
    component: Members,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/fanclub",
    name: "Fanclub",
    component: Fanclub,
    beforeEnter: (to, from, next) => {
      // If user is not authenticated, redirect them to login page
      if (!isAuthenticated.value) {
        next("/register");
      }
      // If user is authenticated, let them access secret page
      next();
    },
  },
  // If a path isn't found then redirect to the 404 page not found page
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

// Creating the router
const router = createRouter({
  // What to do when you go back a page
  history: createWebHistory(),
  // Importing the routers we created
  routes: routes,
});

export default router;
