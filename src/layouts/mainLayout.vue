<script setup>
import topNavigationMenu from '../components/menus/topNavigationMenu.vue'
import menu from '../components/menus/menu'
</script>

<template>
  
<div class="container flex flex-col mx-auto space-y-4">
<topNavigationMenu/>
<slot/>
</div>
<div>
 <menu/> 
</div>
</template>