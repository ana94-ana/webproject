<script setup>
import Cart from '../components/Cart.vue'
import WatchLeyout from '../layouts/watchLeyout.vue'
import topNavigationMenu from '../components/menus/topNavigationMenu.vue'


</script>

<template>

        <WatchLeyout>
        <template #footer>
          <topNavigationMenu/>
          <Cart/> 
        </template>
       
    </WatchLeyout>


</template>