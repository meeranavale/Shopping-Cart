<template>
  <div>
    <div class="flex-container">
      <div v-for="product in products" class="product-info">
        <div>
          <img :src='product.image_path' style="width: 250px; height: 150px">
          <p>Name: {{ product.name }}</p>
          <p>Price: {{ product.price }}</p>
        </div>
        <button class="add-to-cart" @click="addProductToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';

  export default {
    computed: mapGetters([
      'products'
    ]),
    methods: mapActions([
      'addProductToCart'
    ])
  }
</script>

<style scoped>
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    background-color: DodgerBlue;
  }
  .flex-container .product-info {
    background-color: #f1f1f1;
    width: 300px;
    margin: 10px;
    text-align: center;
    line-height: 20px;
    font-size: 20px;
  }
  .add-to-cart{
    background-color: #7b7f80;
    border: none;
    color: white;
    padding: 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
  }
</style>
