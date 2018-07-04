<template>
  <div class="header">
    <div style="display: flex">
      <router-link to="/" tag="div" active-class="active" exact style="flex:1">Products</router-link>
      <router-link to="/cart" tag="div" active-class="active" exact>Cart({{ cartSize }})</router-link>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: mapGetters([
      'cartSize'
    ])
  }
</script>

<style>
  .header{
    background: #101333;
    padding: 10px 0px 10px 0px;
    color: #2d35ff;
    top: 0;
    font-size: x-large;
  }
</style>
