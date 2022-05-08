import { createRouter, createWebHistory } from "vue-router";
import useAuth from "./composable/useAuth";

// Importing the pages
import Index from "./pages/index.vue";
import About from "./pages/about.vue";
import Members from "./pages/members.vue";
import Music from "./pages/music.vue";
// import Album from "./pages/album.vue";
import Profile from "./pages/profile.vue";
import Shop from "./pages/shop.vue";
import Login from "./pages/login.vue";
import Register from "./pages/register.vue";
import Fanclub from "./pages/fanclub.vue";
import Videos from "./pages/videos.vue";
import Cart from "./pages/cart.vue";
import NotFound from "./pages/404.vue";

// Album pages
import Album01 from "./pages/albums/Album01.vue";
import Album02 from "./pages/albums/Album02.vue";
import Album03 from "./pages/albums/Album03.vue";

// Single pages
import Single01 from "./pages/albums/Single01.vue";
import Single02 from "./pages/albums/Single02.vue";
import Single03 from "./pages/albums/Single03.vue";
import Single04 from "./pages/albums/Single04.vue";
import Single05 from "./pages/albums/Single05.vue";
import Single06 from "./pages/albums/Single06.vue";
import Single07 from "./pages/albums/Single07.vue";
import Single08 from "./pages/albums/Single08.vue";
import Single09 from "./pages/albums/Single09.vue";
import Single10 from "./pages/albums/Single10.vue";
import Single11 from "./pages/albums/Single11.vue";
import Single12 from "./pages/albums/Single12.vue";
import Single13 from "./pages/albums/Single13.vue";
import Single14 from "./pages/albums/Single14.vue";
import Single15 from "./pages/albums/Single15.vue";
import Single16 from "./pages/albums/Single16.vue";
import Single17 from "./pages/albums/Single17.vue";

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
    beforeEnter: (to, from, next) => {
      // If user is not authenticated, redirect them to login page
      if (!isAuthenticated.value) {
        next("/register");
      }
      // If user is authenticated, let them access secret page
      next();
    },
  },
  {
    path: "/music",
    name: "Music",
    component: Music,
    beforeEnter: (to, from, next) => {
      // If user is not authenticated, redirect them to login page
      if (!isAuthenticated.value) {
        next("/register");
      }
      // If user is authenticated, let them access secret page
      next();
    },
  },
  // {
  //   path: "/album",
  //   name: "Album",
  //   component: Album,
  // },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
    beforeEnter: (to, from, next) => {
      // If user is not authenticated, redirect them to login page
      if (!isAuthenticated.value) {
        next("/register");
      }
      // If user is authenticated, let them access secret page
      next();
    },
  },
  {
    path: "/members",
    name: "Members",
    component: Members,
    beforeEnter: (to, from, next) => {
      // If user is not authenticated, redirect them to login page
      if (!isAuthenticated.value) {
        next("/register");
      }
      // If user is authenticated, let them access secret page
      next();
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: (to, from, next) => {
      // If user is not authenticated, redirect them to login page
      if (!isAuthenticated.value) {
        next("/register");
      }
      // If user is authenticated, let them access secret page
      next();
    },
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
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/videos",
    name: "Videos",
    component: Videos,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  // Album pages
  {
    path: "/album/Album01",
    name: "Album01",
    component: Album01,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/Album02",
    name: "Album02",
    component: Album02,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/Album03",
    name: "Album03",
    component: Album03,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  // Single pages
  {
    path: "/album/Single01",
    name: "Single01",
    component: Single01,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/Single02",
    name: "Single02",
    component: Single02,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/Single03",
    name: "Single03",
    component: Single03,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/Single04",
    name: "Single04",
    component: Single04,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/Single05",
    name: "Single05",
    component: Single05,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/Single06",
    name: "Single06",
    component: Single06,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/Single07",
    name: "Single07",
    component: Single07,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/Single08",
    name: "Single08",
    component: Single08,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/Single09",
    name: "Single09",
    component: Single09,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/Single10",
    name: "Single10",
    component: Single10,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/Single11",
    name: "Single11",
    component: Single11,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/Single12",
    name: "Single12",
    component: Single12,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/Single13",
    name: "Single13",
    component: Single13,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/Single14",
    name: "Single14",
    component: Single14,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/Single15",
    name: "Single15",
    component: Single15,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/Single16",
    name: "Single16",
    component: Single16,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/Single17",
    name: "Single17",
    component: Single17,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
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
