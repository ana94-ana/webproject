<script setup>
import togleNavigation from "./buttons/togleNavigation.vue"
import Search from "./inputs/search.vue"
import CreateIcon from "./icon/menuIcons/CreateIcon.vue"
import NotificationIcon from "./icon/menuIcons/NotificationIcon.vue"
import AcountIcone from "./icon/menuIcons/AcountIcone.vue"
import youtubeLogo from "./logo/youtubeLogo.vue"
</script>
<template>
  <div class="flex sticky top-0 items-start justify-between items-center">
    <div class="flex flex-row w-full">
      <togleNavigation />
      <youtubeLogo class="w-24 h-auto" />
    </div>
    <div class="flex flex-row w-full">
      <Search />
    </div>
    <div class="flex flex-row justify-end w-full space-x-4 ">
      <CreateIcon />
      <NotificationIcon />
      <router-link to="/account">
         <AcountIcone  />
        </router-link>
     
    </div>
  </div>
</template>