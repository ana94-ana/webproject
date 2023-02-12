<script setup>
import ActionButtons from "./ActionButtons.vue"

defineProps({
    data: { type: Array, required: true },
    action:{type:Boolean}
})
</script>
<template>
    <ul >
        <li class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" 
        v-for="item in data" :key="item.index">
        <div>
        <span>{{ item.name }}- <a :href="item.url"><img :src="item.cover" ></a></span>
          <ActionButtons :tocart="action" :id="item.id"/> 
          <RouterLink :to="{name:'Movie',params:{id:1} }">Info </RouterLink>
          
        </div>
        </li>
    </ul>
</template>