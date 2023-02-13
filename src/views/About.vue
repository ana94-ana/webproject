<script setup>
import TopNavigationMenu from '../components/menus/topNavigationMenu.vue'
import WatchLeyout from '../layouts/watchLeyout.vue'

</script>

<template>
   <WatchLeyout>
    <template #footer>
        <TopNavigationMenu/>
        <h1> About </h1>
    </template>
   </WatchLeyout>
        
    
</template>