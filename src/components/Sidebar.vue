<script setup>
import SidebarFirst from './sidebar/SidebarFirst.vue'
import SidebarDiscovery from './sidebar/SidebarDiscovery.vue'
import SidebarSecond from './sidebar/SidbarSecond.vue'

</script>
<template>
    <div class="fixed ">
        <div class="flex  flex-col items-center w-60  ">
            <SidebarFirst />
            <div class="w-full  px-2">
                <SidebarSecond />
            </div>
            <div class="w-full sticky top-0   px-2">
                <SidebarDiscovery />
            </div>
        </div>
    </div>
</template>