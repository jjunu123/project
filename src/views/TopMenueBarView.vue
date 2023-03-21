<template>
    <section>
      <div>
        <nav><router-link to="/">Home</router-link></nav>
        <nav><router-link to="/mainview">Main</router-link></nav>
        <nav><router-link to="/taskview">ToDoList</router-link></nav>
        <nav><router-link to="//databinding/html">HTML</router-link></nav>
      </div>
    </section>
  </template>
<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

body {
  font-family: "Noto Sans KR", sans-serif !important;
}

a {
  color: inherit;
  text-decoration: none;
}

section {
  text-align: center;
}

section > div {
  display: inline-block;
  background-color: #f7dfdf;
  padding: 0 30px;
  border-radius: 7px;
}

section > div > nav {
  display: inline-block;
}

section > div > nav > a {
  display: block;
  padding: 20px 10px 20px 10px;
  font-size: 20px;
}

section > div > nav > a:hover {
  background-color: #fdf3f3;
  color: #d8a9a9;
  cursor : pointer;
}
</style>
