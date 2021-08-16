<template>
  <div id="app">
    <Menu/>
    <router-view/>
  </div>
</template>

<style lang="scss"></style>
<script>
  import Menu from '@/components/Menu'

  export default {
    name: 'App',
    components:{
      Menu
    }
  }
</script>
