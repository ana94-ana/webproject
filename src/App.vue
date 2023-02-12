<script setup>
import Cart from './components/Cart.vue'
import Products from './components/Products.vue'
import topNavigationMenu from './components/menus/topNavigationMenu.vue'



</script>

<template>

<div class="container flex flex-col mx-auto space-y-4">
 <!--<Products />
  <Cart/>-->
<topNavigationMenu/>
    <RouterView/>
</div>
</template>