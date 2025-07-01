<template>
  <div v-if="user">
    <h2 class="text-xl font-bold mb-4">Detail Pengguna</h2>
    <img :src="user.avatar" class="w-24 h-24 rounded-full mb-2" />
    <p><strong>Nama:</strong> {{ user.first_name }} {{ user.last_name }}</p>
    <p><strong>Email:</strong> {{ user.email }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const user = ref(null)

const getUserDetail = async () => {
  const response = await axios.get(`https://reqres.in/api/users/${route.params.id}`)
  user.value = response.data.data
}

onMounted(getUserDetail)
</script>
