<script setup>
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";

// Form validation
const schema = yup.object({
  username: yup.string().required().email().label("Email "),
  password: yup.string().required().min(8).label("Password"),
});

useForm({
  validationSchema: schema,
});

const { value: username, errorMessage: emailError } = useField("username");
const { value: password, errorMessage: passwordError } = useField("password");

import useAuth from "../composable/useAuth";
import useError from "../composable/useError";

const { isAuthenticated, login, signup, googleLogin } = useAuth();

// const username = ref("");
// const password = ref("");

const router = useRouter();

const logginIn = async () => {
  await login(username.value, password.value);
  goToHome();
};

const signingUp = async () => {
  await signup(username.value, password.value);
  goToHome();
};

const google = async () => {
  await googleLogin();
  goToHome();
};

const goToHome = () => {
  // If user is authenticated, send them to the home page
  if (isAuthenticated.value) {
    router.push("/");
  } else {
    setError("Invalid username or password");
    start();
  }
};

const { error, setError } = useError();

import { useTimeout, promiseTimeout } from "@vueuse/core";

const { ready, start } = useTimeout(3000, { controls: true });
</script>

<template>
  <!-- //////////////////////////////////////////////////////// -->
  <div
    class="flex flex-col justify-center items-center min-h-screen-nonav bg-inherit"
  >
    <h2 class="font-extralight text-3xl tracking-tighter text-white pb-4 mt-12">
      Login to InSomniasDream
    </h2>
    <div class="bg-white shadow rounded w-max p-10 mt-2">
      <img class="h-64" src="../assets/login-group.jpg" alt="Hello GB" />
      <form @submit.prevent="logginIn" class="flex flex-col space-y-4 pl-8 p-4">
        <button
          @click="google"
          aria-label="Continue with google"
          role="button"
          class="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 rounded-full border-slate-gray border-2 flex items-center w-full mt-10 bg-white hover:opacity-75"
        >
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
              fill="#4285F4"
            />
            <path
              d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
              fill="#34A853"
            />
            <path
              d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
              fill="#FBBC05"
            />
            <path
              d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
              fill="#EB4335"
            />
          </svg>
          <p class="text-base font-medium ml-4 text-black">
            Continue with Google
          </p>
        </button>
        <!-- <button
          @click="google"
          class="bg-blue-600 hover:bg-blue-800 p-1 rounded-md"
        >
          <img src="../assets/googlelogo.svg" alt="" class="float-left" />
          <p class="pt-3 text-white">Sign in with Google</p>
        </button> -->
        <div>
          <p class="text-center text-xs m-0 p-0 text-black">
            ------------------------------ OR ------------------------------
          </p>
        </div>
        <div>
          <label class="text-sm font-bold leading-none text-black">
            Email
          </label>
          <input
            name="username"
            type="text"
            placeholder="Username"
            v-model="username"
            class="bg-white border-2 border-slate-gray rounded-full text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
          />
        </div>
        <span class="text-red-500 text-center text-xs">{{ emailError }}</span>
        <div>
          <label class="text-sm font-bold leading-none text-black">
            Password
          </label>
          <input
            name="password"
            type="text"
            placeholder="Password"
            v-model="password"
            class="bg-white border-2 border-slate-gray rounded-full text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
          />
        </div>
        <span class="text-red-500 text-center text-xs">{{
          passwordError
        }}</span>

        <div class="flex space-x-2">
          <button
            type="submit"
            @submit.prevent="logginIn"
            class="focus:ring-2 focus:ring-offset-2 focus:ring-slate-gray-light leading-none text-white focus:outline-none bg-black rounded-full hover:bg-slate-gray py-4 w-full font-bold"
          >
            Login
          </button>
        </div>
        <p
          tabindex="0"
          class="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-400"
        >
          Don't have an account?
          <router-link v-if="!isAuthenticated" :to="{ name: 'Register' }">
            <span
              class="text-sm mt-4 font-medium leading-none text-black hover:text-gray-600"
            >
              Register here
            </span>
          </router-link>
        </p>
      </form>
    </div>
    <div
      v-if="!ready && error"
      class="bg-red-300 w-1/4 absolute bottom-2 right-2 rounded-lg p-4 text-center text-red-800"
    >
      {{ error }}
    </div>
  </div>
</template>
