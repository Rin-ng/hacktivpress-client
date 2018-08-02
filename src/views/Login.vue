<template>
  <div class="home">
    <Login></Login>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'login',
  components: {
    Login
  }
}
</script>
<style scoped>
/* .home{
  background-image: url('../assets/images/bg2.jpg');
  background-size: cover;
  background-repeat: none;
  min-height: 100vh;
} */
</style>