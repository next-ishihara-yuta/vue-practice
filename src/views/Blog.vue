<template>
  <div class="blog-list-container">
    <h1 class="page-title">ブログ記事一覧</h1>
    <ul class="post-list">
      <li v-for="post in posts" :key="post.id" class="post-item">
        <span class="post-id">#{{ post.id }}</span>
        <router-link :to="{name: 'blogDetail', params: {id: post.id}}" class="post-title">
          {{ post.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { onMounted, ref } from 'vue';

export type PostResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const posts = ref<PostResponse[]>([]);
const fetchData = async () => {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    posts.value = await response.json();
  } catch (error) {
    console.error(error);
  }
}

onMounted(fetchData);
</script>

<style scoped>
.blog-list-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.page-title {
  color: #333;
  text-align: center;
  margin-bottom: 30px;
}

.post-list {
  list-style-type: none;
  padding: 0;
}

.post-item {
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 15px;
  transition: box-shadow 0.3s ease;
}

.post-item:hover {
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.post-id {
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.8em;
  margin-right: 10px;
}

.post-title {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}

.post-title:hover {
  text-decoration: underline;
}
</style>