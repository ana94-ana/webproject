<script setup>
 import { useStore } from 'vuex'

 const store = useStore()
    const video = store.getters.getVideos
</script>
<template>
   <ul class="card object-cover object-center w-52 mx-auto absolute right-12"> 
    <li v-for="item in video" :key="item?.index">
        <a :href="item?.url">
            <div class="flex flex-row">
                <div class="">
                    <img :src="item.image" alt="" class="rounded-xl ">
                    <div class="flex flex-row mt-2">
                        <img :src="item.channelimg" alt="" class="w-9 rounded-3xl">
                        <span class="font-medium ml-3 text-sm ">{{ item?.name }}</span>
                    </div>
                </div>
            </div>
        </a>
    </li>
   </ul>
   </template>
