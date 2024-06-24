<template>
  <q-page class="q-pa-md">
    <div class="q-gutter-md">
      <h1>Profile</h1>
      <p>Bienvenido, {{ user.username }}!</p>
      <q-btn @click="logout" label="Logout" color="primary" />
    </div>
  </q-page>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/authStore";

const router = useRouter();
const authStore = useAuthStore();
const user = computed(() => authStore.getCurrentUser());

const logout = () => {
  authStore.logout();
  router.push("/");
};
</script>
