<script setup lang="ts">

type Props = {
  color: string
}

type Emits = {
  'on-click': [void];
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>();

const handleClick = () => {
  emit('on-click');
}
</script>

<template>
  <button class="btn" @click="handleClick" :class="props.color"><slot /></button>
</template>

<style scoped>
.btn {
    position: relative;
    padding: 6px 8px;
    font-size: 14px;
    color: #fff;
    text-align: center;
    background-color: #03a9f4;
    border: 1px solid #eee;
    border-radius: 6px;
  }
  .green {
    background-color: #00c853;
  }

  .pink {
    background-color: #f44336;
  }

  .blue {
    background-color: #2196f3;
  }
</style>