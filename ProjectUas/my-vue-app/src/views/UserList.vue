<template>
  <Layout>
    <div class="p-6 text-white dark:text-white">
      <h2 class="text-2xl font-bold mb-6">Daftar Pengguna</h2>

        <!-- Judul & Tombol Tambah -->
    <div class="flex justify-between items-center mb-4">
      <router-link to="/users/add" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow">
        + Tambah Pengguna
      </router-link>
    </div>

      <!-- Tabel Pengguna -->
      <div class="overflow-x-auto rounded-xl shadow bg-gray-900 p-4">
        <table class="min-w-full table-auto text-sm text-left text-gray-200">
          <thead class="text-xs uppercase bg-gray-800 text-gray-400">
            <tr>
              <th class="px-6 py-3">ID</th>
              <th class="px-6 py-3">Nama</th>
              <th class="px-6 py-3">Email</th>
              <th class="px-6 py-3">Role</th>
              <th class="px-6 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id" class="border-b border-gray-700 hover:bg-gray-800">
              <td class="px-6 py-4">{{ user.id }}</td>
              <td class="px-6 py-4">{{ user.name }}</td>
              <td class="px-6 py-4">{{ user.email }}</td>
              <td class="px-6 py-4 capitalize">{{ user.role }}</td>
              <td class="px-6 py-4 text-center space-x-2">
                <button @click="editUser(user.id)" class="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded text-sm">Edit</button>
                <button @click="deleteUser(user.id)" class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Loading/Error -->
        <div v-if="loading" class="text-center text-gray-400 mt-4">Loading...</div>
        <div v-if="error" class="text-red-500 mt-4">{{ error }}</div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import Layout from '../components/Layout.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const users = ref([])
const loading = ref(true)
const error = ref(null)

const fetchUsers = async () => {
  try {
    const res = await axios.get('https://6888894fadf0e59551ba59a0.mockapi.io/users')
    users.value = res.data
  } catch (err) {
    error.value = 'Gagal mengambil data pengguna.'
    console.error(err)
  } finally {
    loading.value = false
  }
}

const deleteUser = async (id) => {
  const konfirmasi = confirm('Yakin ingin menghapus user ini?')
  if (!konfirmasi) return

  try {
    await axios.delete(`https://6888894fadf0e59551ba59a0.mockapi.io/users/${id}`)
    fetchUsers()
  } catch (err) {
    console.error('Gagal menghapus user:', err)
    alert('Gagal menghapus user.')
  }
}

const editUser = (id) => {
  router.push(`/users/edit/${id}`)
}

onMounted(fetchUsers)
</script>