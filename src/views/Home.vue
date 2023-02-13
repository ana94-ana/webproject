<script setup>
import mainLayout from '../layouts/mainLayout.vue'
import topNavigationMenu from '../components/menus/topNavigationMenu.vue'


</script>

<template>
    <mainLayout>
        <template #footer>
            <topNavigationMenu />
            <h1> Home Page</h1>
        </template >  
    </mainLayout>

</template>