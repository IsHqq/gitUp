<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  // 导入组件
  import login from './components/login/Login'
  import Register from '@/components/login/Register'

  export default {
    name: 'App',
    components: {
      login,
      Register
   }
  }
</script>
