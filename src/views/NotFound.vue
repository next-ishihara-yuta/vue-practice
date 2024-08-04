<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>ページが見つかりません</h2>
    <p>お探しのページは存在しないか、移動または削除された可能性があります。</p>
    <router-link to="/mainTodo">ホームページに戻る</router-link>
  </div>
</template>

<script setup lang="ts">
// スクリプトが必要な場合はここに追加
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
}

h1 {
  font-size: 72px;
  color: #e74c3c;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

a {
  color: #3498db;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>