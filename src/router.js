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
import NotFound from "./pages/404.vue";

// Album pages
import Album01 from "./pages/albums/001.vue";
import Album02 from "./pages/albums/002.vue";
import Album03 from "./pages/albums/003.vue";
import Album04 from "./pages/albums/004.vue";
import Album05 from "./pages/albums/005.vue";
import Album06 from "./pages/albums/006.vue";
import Album07 from "./pages/albums/007.vue";
import Album08 from "./pages/albums/008.vue";
import Album09 from "./pages/albums/009.vue";
import Album10 from "./pages/albums/010.vue";
import Album11 from "./pages/albums/011.vue";
import Album12 from "./pages/albums/012.vue";
import Album13 from "./pages/albums/013.vue";
import Album14 from "./pages/albums/014.vue";
import Album15 from "./pages/albums/015.vue";
import Album16 from "./pages/albums/016.vue";
import Album17 from "./pages/albums/017.vue";
import Album18 from "./pages/albums/018.vue";
import Album19 from "./pages/albums/019.vue";

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
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/002",
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
    path: "/album/003",
    name: "Album03",
    component: Album03,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/004",
    name: "Album04",
    component: Album04,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/005",
    name: "Album05",
    component: Album05,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/006",
    name: "Album06",
    component: Album06,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/007",
    name: "Album07",
    component: Album07,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/008",
    name: "Album08",
    component: Album08,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/009",
    name: "Album09",
    component: Album09,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/010",
    name: "Album10",
    component: Album10,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/011",
    name: "Album11",
    component: Album11,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/012",
    name: "Album12",
    component: Album12,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/013",
    name: "Album13",
    component: Album13,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/014",
    name: "Album14",
    component: Album14,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/015",
    name: "Album15",
    component: Album15,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/016",
    name: "Album16",
    component: Album16,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/017",
    name: "Album17",
    component: Album17,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/018",
    name: "Album18",
    component: Album18,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated.value) {
        next("/register");
      }
      next();
    },
  },
  {
    path: "/album/019",
    name: "Album19",
    component: Album19,
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
