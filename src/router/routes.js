import { useAuthStore } from "../stores/authStore";

const routes = [
  {
    path: "/",
    component: () => import("pages/LoginPage.vue"),
  },
  {
    path: "/main",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "profile",
        component: () => import("pages/ProfilePage.vue"),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
