<script setup>
import { useRouter } from "vue-router";
import useAuth from "../composable/useAuth";

const { isAuthenticated, logout } = useAuth();

const router = useRouter();

// When user logs out, redirect them to the home page
const loggingOut = () => {
  logout();
  router.push("/");
};
</script>

<template>
  <div class="bg-slate-gray text-white border-b-4 border-slate-gray-lighter">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/">
        <img src="../assets/logo.svg" alt="" class="pr-4 w-64" />
      </router-link>
      <nav>
        <ul class="md:flex md:items-center md:space-x-4">
          <router-link v-if="!isAuthenticated" :to="{ name: 'Login' }">
            <li
              class="py-8 px-4 hover:cursor-pointer hover:underline hover:decoration-solid hover:decoration-white hover:underline-offset-8 hover:decoration-2 hover:text-white"
            >
              LOG IN
            </li>
          </router-link>
          <router-link v-if="!isAuthenticated" :to="{ name: 'Register' }">
            <li
              class="py-2 px-6 text-black hover:cursor-pointer tracking-tight font-bold bg-white rounded-full hover:bg-gray-300 hover:text-black"
            >
              REGISTER
            </li>
          </router-link>
          <!-- Static method -->
          <div v-else class="flex">
            <router-link to="/">
              <li
                class="py-8 px-4 hover:cursor-pointer hover:underline hover:decoration-solid hover:decoration-white hover:underline-offset-8 hover:decoration-2 hover:text-white"
              >
                Home
              </li>
            </router-link>
            <!-- Dynamic method -->
            <router-link :to="{ name: 'Members' }">
              <li
                class="py-8 px-4 hover:cursor-pointer hover:underline hover:decoration-solid hover:decoration-white hover:underline-offset-8 hover:decoration-2 hover:text-white"
              >
                Members
              </li>
            </router-link>
            <router-link :to="{ name: 'Music' }">
              <li
                class="py-8 px-4 hover:cursor-pointer hover:underline hover:decoration-solid hover:decoration-white hover:underline-offset-8 hover:decoration-2 hover:text-white"
              >
                Music
              </li>
            </router-link>
            <router-link :to="{ name: 'Shop' }">
              <li
                class="py-8 px-4 hover:cursor-pointer hover:underline hover:decoration-solid hover:decoration-white hover:underline-offset-8 hover:decoration-2 hover:text-white"
              >
                Shop
              </li>
            </router-link>

            <router-link :to="{ name: 'Videos' }">
              <li
                class="py-8 px-4 hover:cursor-pointer hover:underline hover:decoration-solid hover:decoration-white hover:underline-offset-8 hover:decoration-2 hover:text-white"
              >
                Videos
              </li>
            </router-link>
            <!-- <router-link :to="{ name: 'Cart' }">
              <li
                class="py-8 px-4 hover:cursor-pointer hover:underline hover:decoration-solid hover:decoration-white hover:underline-offset-8 hover:decoration-2 hover:text-white"
              >
                Cart
              </li>
            </router-link> -->
            <button @click="loggingOut">
              <li class="py-8 px-4 hover:cursor-pointer hover:bg-red-500">
                Logout
              </li>
            </button>
          </div>
        </ul>
      </nav>
    </div>
  </div>
</template>
