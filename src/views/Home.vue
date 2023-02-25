<script setup>
import YoutubeLayout from '../layouts/youtubeLayout.vue'
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header.vue'
import TagsSlider from '../components/sliders/TagsSlider.vue'


</script>

<template>
    <YoutubeLayout>
        <template #header>
            <Header/>
        </template>
        <template #sidebar>
           <Sidebar/>  
        </template>
        <template #tags>
            <TagsSlider/>
        </template>
    </YoutubeLayout>
</template>