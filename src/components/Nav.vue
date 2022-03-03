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
  <div class="bg-gray-800 text-white border-b-4 border-gray-600">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/">
        <h1 class="text-3xl font-thin tracking-tighter">
          InSomnia's<span class="font-normal"> Dream</span>
        </h1>
      </router-link>
      <nav>
        <ul class="flex space-x-4">
          <!-- Static method -->
          <router-link to="/">
            <li
              class="py-8 px-4 hover:cursor-pointer text-white hover:text-gray-700 hover:bg-gray-300"
            >
              Home
            </li>
          </router-link>
          <!-- Dynamic method -->
          <router-link :to="{ name: 'Members' }">
            <li
              class="py-8 px-4 hover:cursor-pointer text-white hover:text-gray-700 hover:bg-gray-300"
            >
              Members
            </li>
          </router-link>
          <router-link :to="{ name: 'Music' }">
            <li
              class="py-8 px-4 hover:cursor-pointer text-white hover:text-gray-700 hover:bg-gray-300"
            >
              Music
            </li>
          </router-link>
          <router-link :to="{ name: 'Shop' }">
            <li
              class="py-8 px-4 hover:cursor-pointer text-white hover:text-gray-700 hover:bg-gray-300"
            >
              Shop
            </li>
          </router-link>
          <router-link v-if="!isAuthenticated" :to="{ name: 'Login' }">
            <li
              class="py-8 px-4 hover:cursor-pointer text-white hover:text-gray-700 hover:bg-gray-300"
            >
              Login
            </li>
          </router-link>
          <router-link v-if="!isAuthenticated" :to="{ name: 'Register' }">
            <li
              class="py-8 px-4 hover:cursor-pointer text-white hover:text-gray-700 hover:bg-gray-300"
            >
              Register
            </li>
          </router-link>
          <div v-else class="flex">
            <router-link :to="{ name: 'Fanclub' }">
              <li
                class="py-8 px-4 hover:cursor-pointer hover:bg-gray-300 hover:text-gray-700"
              >
                Fanclub
              </li>
            </router-link>
            <button @click="loggingOut">
              <li
                class="py-8 px-4 hover:cursor-pointer hover:bg-gray-300 hover:text-gray-700"
              >
                Logout
              </li>
            </button>
          </div>
        </ul>
      </nav>
    </div>
  </div>
</template>
