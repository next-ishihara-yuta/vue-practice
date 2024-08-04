<script setup lang="ts">
import {  ref } from 'vue';
import { useTodoList } from '@/composables/useTodoList';
import ButtonAdd from '@/components/ButtonAdd.vue';
import ButtonDel from '@/components/ButtonDel.vue';
import ButtonShow from '@/components/ButtonShow.vue';
import ButtonEdit from '@/components/ButtonEdit.vue';


const todo = ref<string | undefined>();
const {todoList, add, show, edit, del, check, countFin
} = useTodoList();

const ls = localStorage.todoList;
const isEdit = ref(false);
let editId = -1;

todoList.value = ls ? JSON.parse(ls) : [];
const addTodo = () => {
  if(todo.value){
    add(todo.value);
    todo.value = '';
  }
};

const showTodo = (id: number) => {
  todo.value = show(id);
  if(todo.value) {
    isEdit.value = true;
  }
}


const editTodo = () => {
    if (todo.value) {
    edit(todo.value);
    todo.value = '';
    isEdit.value = false;
  }
}

const deleteTodo = (id: number) => {
  isEdit.value = false;
  del(id);

}

const changeCheck = (id: number) => {
  check(id);
}

console.log('set up');
</script>

<template>
  <div class="box_input">
    <input 
    type="text" 
    class="todo_input" 
    v-model="todo" 
    placeholder="+ TODOを入力" 
    />
    <ButtonEdit color="green" @edit-click="editTodo"  v-if="isEdit">変更</ButtonEdit>
    <ButtonAdd color="blue" @add-click="addTodo" v-else>追加</ButtonAdd>
  </div>
  <div class="box_list">
    <div class="todo_list" v-for="todo in todoList" :key="todo.id">
      <div class="todo" :class="{fin: todo.checked}">
        <input type="checkbox" class="check" @change="changeCheck(todo.id)" :checked="todo.checked" />
        <label>{{ todo.task }}</label>
      </div>
      <div class="btns">
        <ButtonShow color="green" @show-click="showTodo(todo.id)">編</ButtonShow>
        <ButtonDel color="pink" @del-click="deleteTodo(todo.id)">削</ButtonDel>
      </div>
    </div>
  </div>
  <div class="finCount">
    <span>完了: {{ countFin }},</span>
    <span>未完了: {{ todoList.length - countFin }}</span>
  </div>
</template>


<style scoped>
  .todo_input {
    width: 250px;
    padding: 6px 8px;
    margin-right: 8px;
    font-size: 18px;
    border: 1px solid #aaa;
    border-radius: 6px;
  }



  .btn:active {
    top: 1px
  }

  .box_list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .todo_list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 8px;
  }

  .todo {
    width: 250px;
    padding: 6px 8px;
    border: 1px solid #ccc;
    border-radius: 6px;
  }

  .check {
    margin-right: 12px;
    transform: scale(1.6);
  }

  .btns {
    display: flex;
    gap: 4px;
  }



  .fin {
    text-decoration: line-through;
    color: #777;
    background-color: #ddd
  }

  .finCount {
    margin-top: 8px;
    font-size: 0.8em;
  }
</style>