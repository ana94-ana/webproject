<script setup>

import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const store = useStore()

const search = computed(() => {
    return store.getters.search
})
onMounted(() => {
    store.dispatch('getRecordById', route.params.name)
})


</script>
<template>
  {{ search }}
</template>
