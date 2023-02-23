<script setup>
import HomeIcon from '../sidebarIcons/HomeIcon.vue'
import SortsIcon from '../sidebarIcons/SortsIcon.vue'
import SubscriptionsIcon from '../sidebarIcons/SubscriptionsIcon.vue'
</script>
<template>
    <div class="w-full  px-1">
                <div class="flex flex-col items-center w-full">
                    <a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-slate-300" href="#">
                        <HomeIcon />
                        <span class="ml-2 text-sm font-medium">მთავარი</span>
                    </a>
                    <a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-slate-300" href="#">
                        <SortsIcon />
                        <span class="ml-2 text-sm font-medium">Sorts</span>
                    </a>
                    <a class="flex items-center w-full h-12 px-3 mt-2  hover:bg-slate-300  rounded" href="#">
                        <SubscriptionsIcon />
                        <span class="ml-2 text-sm font-medium">გამოწერები</span>
                    </a>
                </div>
            </div>
</template>