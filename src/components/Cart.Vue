<template>
  <div>
    <div v-if="cartSize === 0" class="empty-cart">
      <img src="./../assets/empty-cart.png" style="width: 500px; height: 500px">
      <h3>Your Shopping Cart is empty</h3>
    </div>
    <div v-else>
      <h3>My Cart({{ cartSize }})</h3>
      <table>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
          <th>Add Quantity</th>
          <th>Remove</th>
        </tr>
        <tr v-for="product in cartItems">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.quantity * product.price }}</td>
          <td><button @click="addQuantity(product)" class="btn add-quanity-bg">Add Quantity</button></td>
          <td><button @click="removeProductFromCart(product)" class="btn remove-item-bg">Remove Product</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';

  export default {
    computed: mapGetters([
      'cartSize', 'cartItems'
    ]),
    methods: mapActions([
      'removeProductFromCart', 'addQuantity'
    ])
  }
</script>
<style>
  .empty-cart {
    text-align: center;
  }
  table {
    width:100%;
  }
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th, td {
    padding: 15px;
    text-align: left;
  }
  table th {
    background-color: black;
    color: white;
  }
  .btn{
    border: none;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
  }
  .add-quanity-bg{
    background-color: #7b7f80;
  }
  .remove-item-bg{
    background-color: #805227;
  }
</style>
