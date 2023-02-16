<script setup>
import CurrenciesInfo from '../components/menus/CurrenciesInfo.vue';
import TopNavigationMenu from '../components/menus/topNavigationMenu.vue'
import currencieLayout from '../layouts/currencieLayout.vue'




</script>

<template>
    <currencieLayout>
        <template #header>
            <TopNavigationMenu />
        </template> 
        <CurrenciesInfo/>
    </currencieLayout>
</template>