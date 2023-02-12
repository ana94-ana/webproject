<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'


const route = useRoute()

const store = useStore()

const movi = computed(() => {
    
    store.dispatch('getRecordById',route.params.id)
    return store.getters.getactiveMovies

})

</script>

<template>
    <div>
        {{ movi }}
    </div>
</template>