<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const store = useStore()

const movi = computed(() => {
    return store.getters.getactiveMovie
})
onMounted(() => {
    store.dispatch('getRecordById', route.params.id)
})
</script>

<template>
    
   <div class="max-w-sm rounded overflow-hidden shadow-lg mg-left">
        <img class="w-full" :src="movi?.cover">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ movi?.name }}</div>
            <p class="text-gray-700 text-base">
                {{ movi?.description }}
            </p>
        </div>
    </div>
</template>