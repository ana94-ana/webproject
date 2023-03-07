<script setup>
import YoutubeLayout from '../layouts/youtubeLayout.vue'
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header.vue'
import TagsSlider from '../components/sliders/TagsSlider.vue'
import Videos from '../components/card/Videos.vue'

</script>
<template>
    <YoutubeLayout>
        <TagsSlider />
        <Videos />
    </YoutubeLayout>
</template>