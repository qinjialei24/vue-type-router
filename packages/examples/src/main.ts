import { typesafeRouterPlugin, createTypesafeRoute } from "vue-typesafe-router";
import { createApp } from "vue";
import App from "./App.vue";
import AboutView from "./views/AboutView.vue";
import { createRouter, createWebHistory } from "vue-router";
import Demo from "./views/Demo.vue";
import UserProfile from "./views/UserProfile.vue";
import UserDetail from "./views/UserDetail.vue";
import User from "./views/User.vue";
export const homeRoute = createTypesafeRoute<{ id: number; name: string }>({
  path: "/home",
  component: import("./views/HomeView.vue"),
});
export const aboutRoute = createTypesafeRoute<{
  id: number;
  name: string;
  friends: string[];
}>({
  path: "/about",
  component: AboutView,
});

export const userProfileRoute = createTypesafeRoute<
  {
    profileId: string;
    profileName: string;
  },
  { name: string }
>({
  path: "/user/:name/profile",
  component: UserProfile,
});

export const userRoute = createTypesafeRoute<any, { name: string }>({
  path: "/user/:name",
  component: User,
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/demo", component: Demo },
    {
      ...userRoute.config,
      children: [
        userProfileRoute.config,
        {
          path: "detail",
          name: "user-detail",
          component: UserDetail,
        },
      ],
    },
    {
      ...homeRoute.config,
    },
    aboutRoute.config,
  ],
});
const app = createApp(App);
app.use(router).use(typesafeRouterPlugin);
app.mount("#app");
