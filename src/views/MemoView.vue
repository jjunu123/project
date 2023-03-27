<template>
    <div class="memo">
      <h1>메모 노트장</h1>
      <form @submit.prevent="addNote">
        <input v-model="newNote" placeholder="새 메모 추가" />
        <button type="submit">추가</button>
      </form>
      <ul>
        <li v-for="(note, index) in notes" :key="index">
          {{ note }}
          <button @click="removeNote(index)">삭제</button>
        </li>
      </ul>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        notes: [],
        newNote: ''
      }
    },
    methods: {
      addNote() {
        if (this.newNote.trim() !== '') {
          this.notes.push(this.newNote.trim())
          this.newNote = ''
        }
      },
      removeNote(index) {
        this.notes.splice(index, 1)
      }
    }
  }
  </script>

  <style>
  .memo {
    max-width: 400px;
    margin: 0 auto;
    font-family: "Helvetica Neue", sans-serif;
    text-align: center;
  }

  h1 {
    margin-top: 50px;
    font-size: 2rem;
    font-weight: bold;
  }

  form {
    margin-top: 30px;
  }

  input {
    padding: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  button[type="submit"] {
    margin-left: 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007aff;
    color: #fff;
    cursor: pointer;
  }

  ul {
    margin-top: 30px;
    list-style: none;
    padding-left: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }

  li:last-child {
    border-bottom: none;
  }

  button {
    border: none;
    background-color: transparent;
    color: #007aff;
    cursor: pointer;
  }
  </style>
