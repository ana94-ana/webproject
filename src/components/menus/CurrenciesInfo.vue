<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()



const currencies = computed(() => {
    return store.getters.getCurrencies
})


onMounted(() => {
    store.dispatch('getCurrenciesInfoNBG')
})


</script>
<template>

<h1 class="pr-8 pl-8 font-bold text-2xl">ლარის მიმართ უცხოური ვალუტების გაცვლის ოფიციალური კურსები</h1>
           
                <table class="border-auto border-spacing-2 border border-slate-1000 bg-emerald-100 ">
                    <thead>
                        <tr>
                            <th class="pr-8 pl-8">ვალუტა </th>
                            <th class="pr-8 pl-8">ყიდვა </th>
                            <th class="pr-8 pl-8">გაყიდვა </th>
                            <th class="pr-8 pl-8">ვალუტის დასახელება  </th>
                            <th class="pr-8 pl-8">მოქმედებს თარიღი </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="rate in currencies" :key="rate.index">
                            <td class="pr-8 pl-8 font-bold">{{ rate.code }}</td>
                            <td class="pr-8 pl-8 font-bold text-green-600">{{ rate.quantity }}</td>
                            <td class="pr-8 pl-8 font-bold text-red-600">{{ rate.rate }}</td>
                            <td class="pr-8 pl-8">{{ rate.name }}</td>
                            <td class="pr-8 pl-8">{{ rate.validFromDate }}</td>
                        </tr>
                    </tbody>
                </table>
</template>