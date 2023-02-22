<script setup>
import LibraryIcon from '../sidebarIcons/LibraryIcon.vue'
import HistoryIcon from '../sidebarIcons/HistoryIcon.vue'
import YourVideosIcon from '../sidebarIcons/YourVideosIcon.vue'
import SeeLaterIcon from '../sidebarIcons/SeeLaterIcons.vue'
import LikedVideosIcon from '../sidebarIcons/LikedVideosIcon.vue'
import VoisesShortsIcon from '../sidebarIcons/VoisesShortsIcon.vue'
</script>
<template>
    <div class="flex flex-col items-center w-full mt-5">
                    <a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-slate-300" href="#">
                        <LibraryIcon />
                        <span class="ml-2 text-sm font-medium">ბიბლიოთეკა</span>
                    </a>
                    <a class="flex items-center w-full h-12 px-3 mt-2  hover:bg-slate-300  rounded" href="#">
                        <HistoryIcon/>
                        <span class="ml-2 text-sm font-medium">ისტორია</span>
                    </a>
                    <a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-slate-300 " href="#">
                        <YourVideosIcon/>
                        <span class="ml-2 text-sm font-medium">თქვენი ვიდეოები</span>
                    </a>
                    <a class="flex items-center w-full h-12 px-3 mt-2  hover:bg-slate-300  rounded" href="#">
                       <SeeLaterIcon/>
                        <span class="ml-2 text-sm font-medium">მოგვიანებით სანახავი</span>
                    </a>
                    <a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-slate-300 " href="#">
                        <LikedVideosIcon/>
                        <span class="ml-2 text-sm font-medium">მოწონებული ვიდეოები</span>
                    </a>
                    <a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-slate-300 " href="#">
                        <VoisesShortsIcon/>
                        <span class="ml-2 text-sm font-medium">ხმები Shorts-იდან</span>
                    </a>
                </div>
</template>