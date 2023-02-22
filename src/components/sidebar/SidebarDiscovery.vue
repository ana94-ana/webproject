<script setup>
import PopularOnesIcon from '../sidebarDiscoveryIcon/PopularOnesIcon.vue'
import MusicIcon from '../sidebarDiscoveryIcon/MusicIcon.vue'
import VideoGamesIcon from '../sidebarDiscoveryIcon/VideoGamesIcon.vue'
import SportsIcon from '../sidebarDiscoveryIcon/SportsIcon.vue'
</script>
<template>
    <div class="flex flex-col items-center w-full mt-3">
                    <h1>აღმოჩენა</h1>
                    <a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-slate-300" href="#">
                       <PopularOnesIcon/>
                        <span class="ml-2 text-sm font-medium">პოპულარულები</span>
                    </a>
                    <a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-slate-300" href="#">
                       <MusicIcon/>
                        <span class="ml-2 text-sm font-medium">მუსიკა</span>
                    </a>
                    <a class="flex items-center w-full h-12 px-3 mt-2  hover:bg-slate-300  rounded" href="#">
                        <VideoGamesIcon/>
                    <span class="ml-2 text-sm font-medium">ვიდეო თამაშები</span>
                </a>
                <a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-slate-300 " href="#">
                    <SportsIcon/>
                    <span class="ml-2 text-sm font-medium">სპორტი</span>
                </a>
            </div>
</template>