<script setup>
import YoutubeLayout from '../layouts/youtubeLayout.vue'
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header.vue'
import Tag from '../components/Tag.vue'


</script>

<template>
    <YoutubeLayout>
        <template #header>
            <Header/>
        </template>
        <template #footer>
           <Sidebar/>  
        </template>
        <template #tags>
            <Tag/>
        </template>
    </YoutubeLayout>
</template>