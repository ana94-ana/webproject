<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import Cart from './components/Cart.vue'
import Products from './components/Products.vue'


</script>

<template>
<div class="container flex flex-row mt-4 mx-auto items-center">
  <Products />
  <Cart/>
</div>
</template>