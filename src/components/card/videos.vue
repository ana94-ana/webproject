<script setup>
 import { useStore } from 'vuex'

 const store = useStore()
    const video = store.getters['videos/getVideos']
</script>
<template>
    <div  class="max-w-sm overflow-hidden shadow-lg">
   <div class="card object-cover object-center mx-auto  grid grid-flow-col grid-rows-4"> 
    <div v-for="item in video" :key="item.index">
        <a :href="item?.url">
            <div class="flex flex-row">
                <div class="">
                    <img :src="item.image" alt="" class="rounded-xl ">
                    <div class="flex flex-row mt-2">
                        <span class="font-medium ml-3 text-sm ">{{ item?.name }}</span>
                    </div>
                </div>
            </div>
        </a>
    </div>
</div>
</div>
   </template>
