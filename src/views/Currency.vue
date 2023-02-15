<script setup>
import { onMounted } from 'vue'
import TopNavigationMenu from '../components/menus/topNavigationMenu.vue'
import axios from 'axios'
import currencieLayout from '../layouts/currencieLayout.vue'
import { createStore } from 'vuex'
import currencyModule from '../store/modules/currencyModule'


const store = createStore()

store.currency=store.state.getCurrency.value
const apiUrl=import.meta.env.VITE_API_URL

function getCurrency(){
    axios.get(apiUrl).then(Response => currency.value=Response.data[0].currency)
}

onMounted(()=>{
    getCurrency
})

</script>

<template>
   <currencieLayout>
    <template #header>
      <TopNavigationMenu/>
    </template>
  <template>
   <ul>
    <li v-for="rate in currencies" :key="rate.index">
        <div>
        <div >{{ rate.code }}</div>
        <div >{{ rate.quantity }}</div>
        <div >{{ rate.rate }}</div>
        <div >{{ rate.name }}</div>
        <div >{{ rate.validFromDate }}</div>
        </div>

    </li>
   </ul>
</template>
<currencyModule/>
   </currencieLayout>
</template>