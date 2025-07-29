<template>
    <Layout>
        <div class="flex items-center justify-between mb-8">
            <h2 class="text-3xl font-extrabold text-blue-800 flex items-center gap-3 drop-shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75" /></svg>
                Daftar User
            </h2>
            <router-link to="/add" class="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                Tambah User
            </router-link>
        </div>

        <div v-if="loading" class="text-gray-500 text-lg py-16 flex justify-center items-center">
            <svg class="animate-spin h-7 w-7 mr-3 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
            Loading data user...
        </div>

        <div v-else class="overflow-x-auto">
            <table class="w-full table-auto border-separate border-spacing-y-2">
                <thead class="bg-gradient-to-r from-blue-100 to-blue-200 rounded-t-lg">
                    <tr>
                        <th class="px-6 py-3 text-left font-bold text-blue-700 uppercase tracking-wider rounded-tl-lg">Avatar</th>
                        <th class="px-6 py-3 text-left font-bold text-blue-700 uppercase tracking-wider">Nama</th>
                        <th class="px-6 py-3 text-left font-bold text-blue-700 uppercase tracking-wider rounded-tr-lg">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id" class="bg-white shadow-md hover:scale-[1.01] hover:shadow-lg transition-all duration-150 rounded-lg">
                        <td class="px-4 py-3 flex items-center justify-center">
                            <img :src="user.avatar" alt="avatar" class="w-14 h-14 rounded-full shadow border-2 border-blue-200 object-cover">
                        </td>
                        <td class="px-4 py-3 text-gray-900 font-semibold text-lg">{{ user.name }}</td>
                        <td class="px-4 py-3 text-gray-600">{{ user.email }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Layout from '../components/Layout.vue';

const users = ref([]);
const loading = ref(true);

onMounted(async () => {
    const res = await fetch('https://6867ef69d5933161d70a5740.mockapi.io/users');
    users.value = await res.json();
    loading.value = false;
})
</script>