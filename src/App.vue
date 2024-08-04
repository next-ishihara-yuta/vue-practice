<script setup>
import { useRouter } from 'vue-router';
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue'
// import router from './router';

const router = useRouter();
const goBlog = () => {
  router.push('/blog')
}
</script>
\<template>
  <div class="warp">
    <TheHeader />
    <nav> 
      <router-link to="/mainTodo">Todo</router-link>
       | <router-link to="/about">About</router-link>
       | <router-link to="/blog">Blog</router-link>
    </nav>
    <!-- <main class="main"><MainTodo /></main> -->
    <main class="main"><router-view /></main>
    <TheFooter />
  </div>
</template>

<style scoped>
.warp {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height:  90vh;
  padding: 0;
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f8f8f8;
}

.main {
  flex: 1;
  padding: 16px;
}
</style>