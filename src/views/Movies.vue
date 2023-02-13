<script setup>
import topNavigationMenu from '../components/menus/topNavigationMenu.vue'
import Products from '../components/Products.vue'
import WatchLeyout from '../layouts/watchLeyout.vue'


</script>

<template>
    <WatchLeyout>
        <template #header>
          <topNavigationMenu/>
          <Products/> 
        </template>
       
    </WatchLeyout>
</template>
