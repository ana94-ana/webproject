<script setup>
import Cart from './components/Cart.vue'
import Products from './components/Products.vue'

const menu=[
  {routeName:'Home', title: 'Main Page'},
  {routeName:'About', title: 'About Us'},
  {routeName:'Contact', title: 'Contact Us'}
]

</script>

<template>

<div class="container flex flex-col mt-4 mx-auto space-y-4">
 <!--<Products />
  <Cart/>-->
  <div class="flex flex-row space-x-4">
    <RouterLink v-for="item in menu" :key="item.index" :to="{name: item.routeName}">{{ item.title }}</RouterLink>

   <!-- <RouterLink to="/">Home Page</RouterLink>
  <RouterLink to="/about">About Page</RouterLink>
  <RouterLink to="/contact">Contact Page</RouterLink>-->

  </div>
  <div>
    <RouterView/>
  </div>
</div>
</template>