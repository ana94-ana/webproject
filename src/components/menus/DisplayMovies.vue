<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import mainLayout from '../../layouts/mainLayout.vue'
import topNavigationMenu from '../menus/topNavigationMenu.vue'

const route = useRoute()
const store = useStore()

const movi = computed(() => {


    return store.getters.getactiveMovies

})
onMounted(() => {
    store.dispatch('getRecordById', route.params.id)
})


</script>

<template>

    <mainLayout>
        <template #header>
            <topNavigationMenu />
            {{ movi }}
        </template>
    </mainLayout>
    <!-- <template #header>
            <topNavigationMenu />
            <div class="max-w-sm rounded overflow-hidden shadow-lg mg-left">
                <img class="w-full" :src="movi.cover">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{{ movi.name }}</div>
                    <p class="text-gray-700 text-base">
                        {{ movi.description }}
                    </p>
                </div>
            </div>
        </template>-->
    

</template>