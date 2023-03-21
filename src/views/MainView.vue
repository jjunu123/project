<template>
<div>
    <div class='left'>
      <ul>
        <li id='logo'>
          <div>Inventory</div>
          <div>Manager</div>
        </li>
        <li>HOME</li>
        <li>MANAGER</li>
        <li>STATE</li>
        <li>RESISTER</li>
        <li id='company'>
          <div>Welcomt to Inventory</div>
          <div>Seoul Gangnam <br> ... </div>
          <div>@copyright demnodey</div>
        </li>
      </ul>
    </div>
    <img id='left_btn' @click='toggle' src='../assets/images/left_btn.png'>
  </div>

  <div class="main-container">
    <div class="header">
      <h1>My App</h1>
    </div>
    <div class="content">
      <div class="right-panel">
        <h2>Recent Posts</h2>
        <ul>
          <li><a href="#">Post 1</a></li>
          <li><a href="#">Post 2</a></li>
          <li><a href="#">Post 3</a></li>
          <li><a href="#">Post 4</a></li>
        </ul>
      </div>
      <div class="left-panel">
        <h2>Featured Products</h2>
        <div class="product">
          <img src="../assets/unsse.jpg" alt="Product 1">
          <h3>온나노코</h3>
          <p>이사람은 은써다 매우 요망한 사람이다.</p>
        </div>
        <div class="product">
          <img src="../assets/unsse2.jpg" alt="Product 2">
          <h3>Product 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis, massa a faucibus porttitor, nulla mauris lacinia lectus, ac ultricies erat mi eget augue.</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>&copy; My App 2023</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContainer'
}
</script>

<style scoped>
.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 36px;
}

nav ul {
  list-style: none;
  display: flex;
}

nav ul li {
  margin-left: 20px;
}

nav ul li a {
  color: #333;
  text-decoration: none;
  font-size: 18px;
}

.content {
  display: flex;
  justify-content: space-between;
}

.left-panel {
  width: 65%;
}

.left-panel h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.product {
  margin-bottom: 40px;
}

.product img {
  width: 100%;
}

.product h3 {
  margin-top: 10px;
  margin-bottom: 5px;
}

.product p {
  font-size: 14px;
}

.right-panel {
  width: 10%;
}
</style>
