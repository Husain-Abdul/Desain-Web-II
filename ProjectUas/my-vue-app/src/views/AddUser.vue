<!-- src/views/AddUser.vue -->
<template>
  <Layout>
    <div class="max-w-xl mx-auto p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-xl shadow transition-all duration-300">
      <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Tambah Pengguna</h2>

      <form @submit.prevent="addUser" class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Nama</label>
          <input
            v-model="form.name"
            type="text"
            class="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Email</label>
          <input
            v-model="form.email"
            type="email"
            class="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Role</label>
          <select
            v-model="form.role"
            class="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option disabled value="">-- Pilih Role --</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="user">User</option>
          </select>
        </div>

        <div class="pt-4">
          <button
            type="submit"
            class="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg text-white font-semibold shadow"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  </Layout>
</template>

<script setup>
import Layout from '../components/Layout.vue'
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  name: '',
  email: '',
  role: ''
})

const addUser = async () => {
  try {
    await axios.post('https://6888894fadf0e59551ba59a0.mockapi.io/users', form.value)
    router.push('/users')
  } catch (error) {
    console.error('Gagal menambahkan user:', error)
    alert('Gagal menambahkan pengguna. Coba lagi!')
  }
}
</script>