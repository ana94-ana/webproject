<script setup>
import axios from 'axios'
import { useStore } from 'vuex'
import routes from '../../router/routes'
import { ref } from 'vue'

const router = routes
const store = useStore()
const name = ref("")
const email = ref("")
const password = ref("")

function submit() {
    const register = {
        name: name.value,
        email: email.value,
        password: password.value
    }
    axios.post('https://items.magischer.de/api/auth/register', register)
        .then(res => {
            console.log(res.register)
            router.push({ name: "Register" })
        })
}
</script>
<template>
    <form @submit.prevevent="submit">
        <div class="w-96 mt-4">
            <div class="mb-6 mkl-[280px] ">
                <div class="mb-4">
                    <label for="name" class="block text-gray-700 font-bold mb-2">Name:</label>
                    <input type="text" id="name" v-model="name" required class="border rounded-lg py-2 px-3 w-full">
                </div>

                <div class="mb-4">
                    <label for="email" class="block text-gray-700 font-bold mb-2">Email:</label>
                    <input type="email" id="email" v-model="email" required class="border rounded-lg py-2 px-3 w-full">
                </div>

                <div class="mb-4">
                    <label for="password" class="block text-gray-700 font-bold mb-2">Password:</label>
                    <input type="password" id="password" v-model="password" required
                        class="border rounded-lg py-2 px-3 w-full">
                </div>
            </div>
            <button type="submit"
                class="text-white bg-gray-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Autorization</button>
        </div>
    </form>
</template>