<script setup>
const props = defineProps({
    data:Object
})

</script>
<template>
  <router-link class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-slate-300" :to="{ name: data.to }">
      <component :is="data.icon"/>
      <span class="ml-2 text-sm font-medium">{{ data.title }}</span>
  </router-link>
</template>
