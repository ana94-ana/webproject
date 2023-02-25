<script setup>
import voice from "../icon/menuIcons/voice.vue"
</script>
<template>
<div class="flex w-10/12">
    <input type="search"
                    class="relative m-0 block w-[1%] min-w-0 flex-auto rounded border rounded-l-full w-full border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                <span
                    class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-l-0 border-gray-300 rounded-r-full dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
                    id="basic-addon2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                        <path fill-rule="evenodd"
                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
</div>
                <div class="flex flex-row items-center">
                    <voice />
                </div>
</template>