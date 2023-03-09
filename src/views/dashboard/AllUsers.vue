<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const users = computed(() => {
    return store.getters.getUsers
})
onMounted(() => {
    store.dispatch('getUserInfo')
})
</script>
<template>
     <table class="border-auto border-spacing-2 border border-slate-1000 bg-emerald-100 ">
                    <tbody>
                        <tr>
                        <tr v-for="value in users" :key="value.index">
                            <td class="pr-8 pl-8 ">{{ value.id }}</td>
                            <td class="pr-8 pl-8 ">{{ value.name }}</td>
                            <td class="pr-8 pl-8">{{ value.email }}</td>
                            <td class="pr-8 pl-8">{{ value.roles }}</td>
                        </tr>
                        </tr>
                    </tbody>
                </table>
    <div id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-violet-300 dark:bg-violet-600">
            <ul class="space-y-2">
                <li>
                    <a href="#"
                        class="flex items-center p-2 text-base font-normal border bg-violet-600 text-white  rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-300">
                        <RouterLink :to="{ name: 'UserInfo', params: { userId: 1 } }"> info </RouterLink>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class=" ml-[280px]">
        <router-view />
    </div>
</template>