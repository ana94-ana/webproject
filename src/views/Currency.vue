<script setup>
import { onMounted, computed } from 'vue'
import TopNavigationMenu from '../components/menus/topNavigationMenu.vue'
import currencieLayout from '../layouts/currencieLayout.vue'
import { useStore } from 'vuex'




const store = useStore()



const currencies= computed(()=> {
    return store.getters.getCurrencies
})


onMounted(()=>{
    store.dispatch('getCurrenciesInfoNBG')
})

</script>

<template>
   
    <template>
    
    </template>
   <ul >
    <li v-for="rate in currencies" :key="rate.index">
        <div class="border px-4 py-2" >
        <div >{{ rate.code }}</div>
        <div >{{ rate.quantity }}</div>
        <div >{{ rate.rate }}</div>
        <div >{{ rate.name }}</div>
        <div >{{ rate.validFromDate }}</div>
        </div>

    </li>
   </ul>
  
</template>