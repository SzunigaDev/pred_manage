import { defineStore } from "pinia";
import axios from "axios";

const API_URL = "http://localhost:8000/api";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")) || null,
  }),
  actions: {
    async login(username, password) {
      try {
        const response = await axios.post(`${API_URL}/token/`, {
          username,
          password,
        });
        if (response.data.access) {
          this.user = response.data;
          localStorage.setItem("user", JSON.stringify(response.data));
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error("Unauthorized: Invalid username or password.");
        } else {
          console.error("An error occurred:", error);
        }
        // Retornar false para indicar que el inicio de sesión falló
        return false;
      }
      // Retornar true para indicar que el inicio de sesión fue exitoso
      return true;
    },
    logout() {
      this.user = null;
      localStorage.removeItem("user");
    },
    getCurrentUser() {
      return this.user;
    },
  },
});
