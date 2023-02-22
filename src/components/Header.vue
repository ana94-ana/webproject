<script setup>
import togleNavigation from './buttons/togleNavigation.vue'
import Search from './inputs/search.vue'
import voice from './menuIcons/voice.vue'
import CreateIcon from './menuIcons/CreateIcon.vue'
import NotificationIcon from './menuIcons/NotificationIcon.vue'
import AcountIcone from './menuIcons/AcountIcone.vue'

</script>
<template>
    <div class="flex sticky top-0 items-center justify-between flex-wrap p-2 ">
        <div class="flex items-center flex-shrink-0  mr-6">
            <togleNavigation />
        </div>
        <div class="flex items-center flex-shrink-0  mr-6 w-1/2">
            <div class=" mt-3 flex w-full  ">
                <Search />
                <div class="flex items-center flex-shrink-0 mr-6">
                    <voice />
                </div>
            </div>
        </div>
        <div class="flex items-center flex-shrink-0 mr-6">
            <CreateIcon />
            <NotificationIcon />
            <AcountIcone />
        </div>
    </div>
</template>