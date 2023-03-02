<script setup>
 import { useStore } from 'vuex'

 const store = useStore()
    const video = store.getters['videos/getVideos']
</script>
<template>
   <div class="h-40 ml-32 mt-16 grid grid-cols-3 justify-items-end  ">
  <div v-for="item in video" :key="item.index"
    class="block max-w-xs bg-white  dark:bg-neutral-700">
    <a :href="item?.url" data-te-ripple-init data-te-ripple-color="light">
      <img
        class="rounded-t-lg"
        :src="item.image" 
        alt="" />
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        {{ item?.name }}
      </h5>
      <button
        type="button"
        class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Button
      </button>
    </div>
  </div>
</div>
   </template>
