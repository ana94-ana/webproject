<script setup>
defineProps({
    data:Object
})

</script>
<template>
    <a v-if="!data" class="flex items-center w-full h-8 px-3 mt-2 border border-black rounded bg-black text-white"
        href="#">ყველა</a>
    <a v-else class="flex items-center w-full h-8 px-3 mt-2  hover:bg-slate-300  rounded" href="#">{{data?.name }}</a>
</template>