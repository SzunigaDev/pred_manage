<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center bg-grey-2">
        <q-card class="q-pa-md shadow-2 my_card" bordered>
          <q-img src="company/szc.webp" :ratio="1" fit="contain">
            <div class="absolute-top text-subtitle1 text-center">
              AS DESK Help & Support
            </div>
          </q-img>
          <q-card-section class="text-center">
            <div class="text-grey-9 text-h5 text-weight-bold">
              Inicio de sesión
            </div>
            <div class="text-grey-8">
              Inicia sesión con tu usuario de acceso
            </div>
          </q-card-section>
          <q-card-section>
            <q-input
              dense
              outlined
              v-model="username"
              label="Usuario"
            ></q-input>
            <q-input
              dense
              outlined
              class="q-mt-md"
              v-model="password"
              type="password"
              label="Contraseña"
            ></q-input>
          </q-card-section>
          <q-card-section>
            <q-btn
              style="border-radius: 8px"
              color="dark"
              glossy
              rounded
              size="md"
              label="Entrar"
              no-caps
              icon="login"
              class="full-width"
              @click="handleLogin"
            ></q-btn>
          </q-card-section>
          <q-inner-loading :visible="loading">
            <q-spinner size="50px" />
          </q-inner-loading>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/authStore";
import { Notify, QInnerLoading, QSpinner } from "quasar";

const username = ref("");
const password = ref("");
const loading = ref(false);
const router = useRouter();
const authStore = useAuthStore();

const handleLogin = async () => {
  loading.value = true;
  const success = await authStore.login(username.value, password.value);
  loading.value = false;
  if (success) {
    router.push("/main/profile");
  } else {
    Notify.create({
      message: "Usuario o contraseña inválidos.",
      color: "negative",
      position: "top",
    });
  }
};
</script>
