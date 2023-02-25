<script setup>
import {useStore} from 'vuex'
import Tag from "../Tag.vue"

const store=useStore()

const tags =store.getters['tags/tags']
</script>
<template>
  <div class="sticky top-0 w-full">
    <ul class="flex ml-60">
      <li class="mr-3">
       <Tag/>
      </li>
      <li class="mr-3" v-for="tag in tags"  :key="tag">
        <Tag :data="tag"/>
      </li>
    </ul>
  </div>
</template>
