import { createRouter, createWebHistory } from "vue-router";
import useAuth from "./composable/useAuth";

// Importing the pages
import Index from "./pages/index.vue";
import About from "./pages/about.vue";
import Members from "./pages/members.vue";
import Music from "./pages/music.vue";
import Album from "./pages/album.vue";
import Profile from "./pages/profile.vue";
import Shop from "./pages/shop.vue";
import Login from "./pages/login.vue";
import Register from "./pages/register.vue";
import Fanclub from "./pages/fanclub.vue";
import NotFound from "./pages/404.vue";

// Album pages
import Album01 from "./pages/albums/001.vue";

// Member pages
import Member01 from "./pages/profiles/jiu.vue";
import Member02 from "./pages/profiles/sua.vue";
import Member03 from "./pages/profiles/siyeon.vue";
import Member04 from "./pages/profiles/handong.vue";
import Member05 from "./pages/profiles/yoohyeon.vue";
import Member06 from "./pages/profiles/dami.vue";
import Member07 from "./pages/profiles/gahyeon.vue";

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
    path: "/album",
    name: "Album",
    component: Album,
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
    path: "/profile",
    name: "Profile",
    component: Profile,
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
  // Album pages
  {
    path: "/album/001",
    name: "Album01",
    component: Album01,
    beforeEnter: (to, from, next) => {
      // If user is not authenticated, redirect them to login page
      if (!isAuthenticated.value) {
        next("/register");
      }
      // If user is authenticated, let them access secret page
      next();
    },
  },
  // Member pages
  {
    path: "/member/jiu",
    name: "Member01",
    component: Member01,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/member/sua",
    name: "Member02",
    component: Member02,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/member/siyeon",
    name: "Member03",
    component: Member03,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/member/handong",
    name: "Member04",
    component: Member04,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/member/yoohyeon",
    name: "Member05",
    component: Member05,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/member/dami",
    name: "Member06",
    component: Member06,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/member/gahyeon",
    name: "Member07",
    component: Member07,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
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
