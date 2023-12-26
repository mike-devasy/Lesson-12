import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import WorkersView from '@/views/WorkersView.vue'
import InterviewsView from '@/views/InterviewsView.vue'
import CandidatesView from '@/views/CandidatesView.vue'
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/workers",
    name: "workers",
    component: WorkersView,
  },
  {
    path: "/candidates",
    name: "candidates",
    component: CandidatesView,
  },
  {
    path: "/interviews",
    name: "interviews",
		component:InterviewsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
