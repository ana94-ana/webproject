<script setup>
import YoutubeLayout from '../layouts/youtubeLayout.vue'
import Sidebar from '../store/youtube/Sidebar.vue'
import HeaderSlot from '../store/youtube/HeaderSlot.vue'


</script>

<template>
    <YoutubeLayout>
        <h1>youtube</h1>
        <template #header>
            <HeaderSlot/>
        </template>
        <template #footer>
           <Sidebar/>  
        </template>
    </YoutubeLayout>
</template>