import MainTodo from "@/views/MainTodo.vue";
import path from "path";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
    path:'/',
    name: 'mainTodo',
    component: MainTodo,
    },
    {
      path:'/mainTodo',
      name: 'mainTodo',
      component: MainTodo,
    },
    {
      path: '/about',
      name: 'about',
      component: import("@/views/About.vue"),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: import("@/views/NotFound.vue"),
    },
    {
      path: '/blog',
      name: 'blog',
      component: import("@/views/Blog.vue"),
    },
    {
      path: '/blog/:id',
      name: 'blogDetail',
      component: import("@/views/BlogDetail.vue"),
    }
  ]
});

export default router