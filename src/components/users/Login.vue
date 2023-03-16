<script setup>
import axios from 'axios'
import { useStore } from 'vuex'
import { ref } from 'vue'
import {useRouter} from 'vue-router'

const store = useStore()
const router= useRouter()
const email = ref("")
const password = ref("")

const submit = async () => {
  const data = {
    email: email.value,
    password: password.value,
  };
  await axios.post('/auth/login', data).then(response => {
          if (response.data.status) {
            store.dispatch('register/token', response.data)
            router.push({ name: 'Categories'})
          }
        }).catch((e) => console.log(e))


    }

</script>
<template>
    <form @submit.prevent="submit">
    <div class="w-96 mt-4">
        <div class="mb-6 mkl-[280px] ">
            <div class="mb-4">
                <label for="email" class="block text-gray-700 font-bold mb-2">Email:</label>
                <input type="email" id="email" v-model="email" required class="border rounded-lg py-2 px-3 w-full">
            </div>

            <div class="mb-4">
                <label for="password" class="block text-gray-700 font-bold mb-2">Password:</label>
                <input type="password" id="password" v-model="password" required class="border rounded-lg py-2 px-3 w-full">
            </div>
        </div>

        <button type="submit"
        class="bg-green-700 text-white font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">
            Autorization</button>
    </div>
    </form>
</template>