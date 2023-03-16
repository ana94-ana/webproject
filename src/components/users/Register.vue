<script setup>
import axios from 'axios'
import { useStore } from 'vuex'
import {useRouter} from 'vue-router'
import { ref } from 'vue'

const router= useRouter()
const store = useStore()
const name = ref("")
const email = ref("")
const password = ref("")

const submit = async () => {
  const data = {
    name: name.value,
    email: email.value,
    password: password.value,
  };
  await axios.post('/auth/register', data).then(response => {
      if (response.data.status) {
        store.dispatch('register/token', response.data)
        router.push({ name: 'Login'})
      }
    }).catch((e) => console.log(e))
}
</script>
<template>
    <form @submit.prevent="submit">
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
            class="bg-green-700 text-white font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">
                Register</button>
        </div>
    </form>
</template>