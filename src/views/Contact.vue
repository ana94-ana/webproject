<script setup>
import TopNavigationMenu from '../components/menus/topNavigationMenu.vue'
import MainLayout from '../layouts/mainLayout.vue'

</script>


<template>
    <MainLayout>
        <template #header>
            <TopNavigationMenu/>
            <h1> Contact Page </h1>
        </template>
    </MainLayout>
</template>