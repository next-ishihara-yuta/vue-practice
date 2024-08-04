<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

import type { PostResponse } from './Blog.vue';

const route = useRoute();
const id = route.params.id;
const post = ref<PostResponse>();

const fetchData = async() => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  post.value = await response.json();
};

onMounted(fetchData);
</script>

<template>
  <div class="blog-detail-container"></div>
    <h1 class="page-title">{{ post?.title }}</h1>
    <div class="detail">{{post?.body}}</div>
    
</template>



<style scoped>
.blog-detail-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.page-title {
  color: #2c3e50;
  font-size: 2em;
  margin-bottom: 10px;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

.post-meta {
  color: #7f8c8d;
  font-size: 0.9em;
  margin-bottom: 20px;
}

.post-content {
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 30px;
}

.home-link {
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.home-link:hover {
  background-color: #2980b9;
}
</style>
<style scoped>
.blog-detail-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.page-title {
  color: #2c3e50;
  font-size: 2em;
  margin-bottom: 10px;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

.post-meta {
  color: #7f8c8d;
  font-size: 0.9em;
  margin-bottom: 20px;
}

.post-content {
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 30px;
}

.home-link {
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.home-link:hover {
  background-color: #2980b9;
}
</style>