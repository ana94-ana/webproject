<script setup>
import { useStore } from 'vuex'
const store = useStore()
</script>

<template>
    <div class="w-96 mt-4">
        <div class="mb-6 mkl-[280px] ">
            <div for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your E-mail</div>
            <input type="email" id="email" v-model=$store.state.email
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com">
        </div>
        <div class="mb-6">
            <div for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</div>
            <input v-model=$store.state.name
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required>
        </div>
        <div class="mb-6">
            <div for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> your password</div>
            <input v-model=$store.state.password
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required>
        </div>
        <button @click="updateUser()" type="submit"
            class="text-white bg-gray-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update
            your personal infromation</button>
    </div>
</template>