<script setup>

import mainLayout from '../../layouts/mainLayout.vue'
import topNavigationMenu from '../menus/topNavigationMenu.vue'
import InfoMovies from './InfoMovies.vue'



</script>

<template>

    <mainLayout>
        <template #header>
            <topNavigationMenu />
        </template>
        <InfoMovies/>
    </mainLayout>
   

</template>