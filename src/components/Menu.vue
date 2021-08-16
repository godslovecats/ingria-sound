<template>
  <div class="menu">
    <div class="menu-left">
      <img class="menu-link menu-logo" src="@/assets/img/logo.png" width="30" height="30">
    </div>
    <div class="menu-right">
      <router-link class="menu-link" to="/about">About</router-link>
      <router-link class="menu-link" to="/services">Services</router-link>
    </div>
  </div>
</template>
<script>
    export default {
      name: 'Menu'
    }
</script>
<style lang="scss">
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-logo{
      object-fit: contain;
      max-width: 50px;
    }
    &-link {
      padding: 0.5rem 1rem;
      margin: 0 1.5rem;
      color: $white;
      font-weight: 500;
    }
  }
</style>
