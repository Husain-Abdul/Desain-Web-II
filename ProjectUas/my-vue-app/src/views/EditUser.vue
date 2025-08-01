<template>
  <Layout>
    <div class="max-w-xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
      <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Edit Pengguna</h2>

      <form @submit.prevent="updateUser">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-200 mb-1">Nama</label>
          <input v-model="form.name" type="text" class="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600" required />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-200 mb-1">Email</label>
          <input v-model="form.email" type="email" class="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600" required />
        </div>

        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-200 mb-1">Role</label>
          <select v-model="form.role" class="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600" required>
            <option disabled value="">-- Pilih Role --</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="user">User</option>
          </select>
        </div>

        <button type="submit" class="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded text-white font-semibold">
          Update
        </button>
      </form>

      <div v-if="loading" class="text-gray-400 mt-4">Loading data user...</div>
      <div v-if="error" class="text-red-500 mt-4">{{ error }}</div>
    </div>
  </Layout>
</template>

<script setup>
import Layout from '../components/Layout.vue'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()

const form = ref({
  name: '',
  email: '',
  role: ''
})
const loading = ref(true)
const error = ref(null)

const userId = route.params.id

// Ambil data user berdasarkan ID
const getUser = async () => {
  try {
    const res = await axios.get(`https://6888894fadf0e59551ba59a0.mockapi.io/users/${userId}`)
    form.value = {
      name: res.data.name,
      email: res.data.email,
      role: res.data.role
    }
  } catch (err) {
    error.value = 'Gagal mengambil data user'
    console.error(err)
  } finally {
    loading.value = false
  }
}

// Update user
const updateUser = async () => {
  try {
    await axios.put(`https://6888894fadf0e59551ba59a0.mockapi.io/users/${userId}`, form.value)
    router.push('/users') // Balik ke halaman daftar
  } catch (err) {
    console.error('Gagal update user:', err)
    alert('Gagal update user.')
  }
}

onMounted(getUser)
</script>