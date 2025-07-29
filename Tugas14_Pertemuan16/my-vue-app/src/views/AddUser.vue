<template>
    <Layout>
        <div class="flex items-center gap-3 mb-8">
            <h2 class="text-3xl font-extrabold text-blue-800 flex items-center gap-2 drop-shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                Tambah User
            </h2>
        </div>

        <form @submit.prevent="submitUser" class="space-y-6 max-w-lg bg-white p-8 rounded-xl shadow-lg mx-auto border border-blue-100">
            <div>
                <label class="block mb-1 font-semibold text-blue-700">Nama</label>
                <input v-model="form.name" type="text" class="border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-lg p-3 w-full text-gray-800 outline-none transition" required>
            </div>
            <div>
                <label class="block mb-1 font-semibold text-blue-700">Email</label>
                <input v-model="form.email" type="email" class="border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-lg p-3 w-full text-gray-800 outline-none transition" required>
            </div>
            <div>
                <label class="block mb-1 font-semibold text-blue-700">Avatar (URL)</label>
                <input v-model="form.avatar" type="text" class="border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-lg p-3 w-full text-gray-800 outline-none transition" required>
            </div>
            <div class="flex gap-3 w-full">
                <button type="submit" class="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow transition-all duration-200 text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                    Simpan
                </button>
                <router-link to="/" class="flex-1 flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-blue-700 font-bold py-3 rounded-lg shadow transition-all duration-200 text-lg border border-blue-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                    Kembali
                </router-link>
            </div>
        </form>
    </Layout>
</template>

<script setup>
import Layout from '../components/Layout.vue';
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const form = ref({
    name: '',
    email: '',
    avatar: '',
})

const router = useRouter();

const submitUser = async () => {
    await fetch('https://6867ef69d5933161d70a5740.mockapi.io/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form.value)
    })

    router.push('/')
}
</script>