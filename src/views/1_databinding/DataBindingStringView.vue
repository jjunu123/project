<template>
    <div>
        <h3>Hello {{ username }}</h3>
        <p>{{ message }}</p>
    </div>
</template>
<script>
export default {
  data () {
    return {
      username: 'John Doe',
      message: 'Welcone 개발자의 품격',
      arr: [],
      obj: {}
    }
  }
}
</script>
<style scoped>
.text-red {
  color: red;
}
</style>
