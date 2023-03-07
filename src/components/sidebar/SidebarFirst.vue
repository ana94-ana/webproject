<script setup>
import SidebarLink from '../SidebarLink.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const menu = computed(() => store.getters['sidebar/getSidebarMenu'])

</script>
<template>
  <div class="w-full ">
    <div class="flex flex-col items-center w-full">
      <SidebarLink v-for="item in menu" :data="item" />
    </div>
  </div>
</template>
