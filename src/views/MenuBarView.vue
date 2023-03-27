<template>
  <section>
    <div>
      <nav><router-link to="/">Home</router-link></nav>
      <nav><router-link to="/mainview">Main</router-link></nav>
      <nav><router-link to="/taskview">ToDoList</router-link></nav>
      <nav><router-link to="/memoview">MEMO</router-link></nav>
    </div>
  </section>

  <div id="center">
    <calender-view></calender-view>
  </div>

  <div>
    <div class="left_view">
      <ul>
        <li id="logo2">
          <div>Inventory</div>
          <div>Manager</div>
        </li>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/mainview">Main</router-link></li>
        <li><router-link to="/taskview">ToDoList</router-link></li>
        <li><router-link to="//databinding/html">HTML</router-link></li>
        <li id="company">
          <div>Welcome to Inventory</div>
          <div>Seoul Gangnam <br> ... </div>
          <div>@copyright demnodey</div>
        </li>
      </ul>
    </div>
    <img id="left_btn" @click="toggle" src="../assets/left_btn.png">
  </div>
  <div class="rightdown">
    <memo-view></memo-view>
    </div>
  <div class="right_view">
    <task-view></task-view>
  </div>
</template>

<script>
import TaskView from './TaskView.vue'
import CalenderView from './CalenderView.vue'
import MemoView from './MemoView.vue'
export default {
  components: { TaskView, CalenderView, MemoView },
  name: 'left_view',
  data() {
    return {
      toggle: this.enter
    }
  },
  methods: {
    enter: function () {
      this.toggle = this.leave
      var left = (250 - (parseInt(document.querySelector('#left_btn').clientWidth) / 2)) + 'px'
      document.querySelector('.left_view').animate([{ left: '-250px' }, { left: '0px' }], { duration: 800, fill: 'forwards' })
      document.querySelector('#left_btn').animate([{ left: left }, { left: left, transform: 'rotate(180deg)' }], { duration: 800, fill: 'forwards' })
    },
    leave: function () {
      this.toggle = this.enter
      var left = (0 - (parseInt(document.querySelector('#left_btn').clientWidth) / 2)) + 'px'
      document.querySelector('.left_view').animate([{ left: '0px' }, { left: '-250px' }], { duration: 800, fill: 'forwards' })
      document.querySelector('#left_btn').animate([{ left: left }, { left: left, transform: 'rotate(0deg)' }], { duration: 800, fill: 'forwards' })
    }
  }
}
</script>
<style>
  a{color:black}
  a:hover{color:rgb(255,98,124);}
  .left_view{
    position:fixed;
    top:0px;
    left:-250px;
    width:250px;
    height:1000px;
    background:rgba(255,98,124,0.6);
    padding:40px 0
  }
  .left_view ul {padding: 0 30px}
  .left_view ul li { font-size:25px;  height:75px;}
  .left_view ul li#logo {font-family: 'Passion One', cursive; font-size:50px; height:170px;}
  .left_view ul li#logo div {line-height: 0.8}
  .left_view ul li#company {font-size:16px; margin-top:150px; }
  #left_btn {position:fixed; top:495px; left:-60px; cursor:pointer}
</style>
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
    padding: 0 430px;
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
  .rightdown{
    position: absolute;
    right: 0;
    top: 50;
    width: 300px;
    height: 30%;
    background-color: #fff;
    border-left: 1px solid #eee;
  }
  .right_view {
    position: absolute;
    right: 0;
    top: 0;
    width: 300px;
    height: 30%;
    background-color: #fff;
    border-left: 1px solid #eee;
  }

  .center {
    text-align: center;
    margin-top: 1px;
  }
</style>
