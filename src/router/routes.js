import { HomeView, Home } from "@/views/home";
import { AboutView, About } from "@/views/about";

export default [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    title: "Home",
    component: HomeView,
    meta: { transitionName: "fade" },
    children: [
      {
        name: "cards",
        path: "",
        component: Home,
        meta: { transitionName: "fade" }
      }
    ]
  },
  {
    path: "/about",
    title: "About",
    component: AboutView,
    children: [
      {
        name: "cards",
        path: "",
        component: About,
        meta: { transitionName: "fade" }
      }
    ]
  }
];
