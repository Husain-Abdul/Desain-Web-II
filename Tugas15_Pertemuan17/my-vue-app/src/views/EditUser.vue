<template>
  <Layout>
    <div class="flex items-center gap-3 mb-8">
      <h2 class="text-3xl font-extrabold text-blue-800 flex items-center gap-2 drop-shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        Edit User
      </h2>
    </div>

    <div v-if="isLoading" class="text-gray-500 text-lg py-16 flex justify-center items-center">
            <svg class="animate-spin h-7 w-7 mr-3 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
            Loading data user...
        </div>

    <form v-else @submit.prevent="updateUser" class="space-y-6 max-w-lg bg-white p-8 rounded-xl shadow-lg mx-auto border border-blue-100">
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
        <button type="submit" class="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg shadow transition-all duration-200 text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          Update
        </button>
        <router-link to="/" class="flex-1 flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-blue-700 font-bold py-3 rounded-lg shadow transition-all duration-200 text-lg border border-blue-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Kembali
        </router-link>
      </div>
    </form>
  </Layout>
</template>


<script setup>
import Layout from '../components/Layout.vue';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const form = ref({
    name: '',
    email: '',
    avatar: ''
});

const isLoading = ref(true);

onMounted(async () => {
    const res = await fetch(`https://6867ef69d5933161d70a5740.mockapi.io/users/${route.params.id}`);
    const data = await res.json();
    form.value = {
        ...data
    }
    isLoading.value = false;
});

const updateUser = async () => {
    await fetch(`https://6867ef69d5933161d70a5740.mockapi.io/users/${route.params.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form.value)
    });

    router.push('/');
}


</script>