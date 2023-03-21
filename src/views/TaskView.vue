<template>
    <div class="todo-list">
      <h2>To-Do List</h2>

      <!-- 할 일 목록 -->
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          <input type="checkbox" v-model="todo.completed">
          <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
        </li>
      </ul>

      <!-- 할 일 추가 폼 -->
      <form v-on:submit.prevent="addTodo">
        <input type="text" v-model="newTodo" placeholder="새로운 할 일을 입력하세요">
        <button type="submit">추가</button>
      </form>
    </div>
  </template>
<script>
export default {
  // ...
  data() {
    return {
      todos: [
        { title: '할 일 1', completed: false },
        { title: '할 일 2', completed: true },
        { title: '할 일 3', completed: false }
      ],
      newTodo: ''
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() === '') {
        return
      }
      this.todos.push({
        title: this.newTodo.trim(),
        completed: false
      })
      this.newTodo = ''
    }
  }
}
</script>
<style scoped>
.todo-list ul {
  list-style-type: none;
  padding: 0;
}

.todo-list li {
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 18px;
}

.todo-list input[type="checkbox"] {
  margin-right: 10px;
}

.todo-list .completed {
  text-decoration: line-through;
  color: gray;
}
.todo-list form {
  display: flex;
  margin-top: 20px;
}

.todo-list input[type="text"] {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.todo-list button[type="submit"] {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #007aff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s;
}

.todo-list button[type="submit"]:hover {
  background-color: #0062cc;
}
input[type=checkbox] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
}

input[type=checkbox]:checked {
  background-color: #4CAF50;
  border-color: #4CAF50;
}
.completed {
  color: #aaa;
  text-decoration: line-through;
}
form {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

input[type=text] {
  flex-grow: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}

button[type=submit] {
  margin-left: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  color: #fff;
  background-color: #4CAF50;
  cursor: pointer;
}

button[type=submit]:hover {
  background-color: #3e8e41;
}
</style>
