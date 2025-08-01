<script setup>
import { inject } from 'vue'

// Ambil data profile dari Layout
const profile = inject('profile')
</script>

<template>
  <header class="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
    <div class="flex items-center space-x-4">
      <button @click="$emit('toggle-sidebar')" class="text-gray-900 dark:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <h1 class="text-lg font-semibold">Dashboard</h1>
    </div>

    <!-- Avatar -->
    <div
      class="w-8 h-8 rounded-full overflow-hidden cursor-pointer"
      @click="$router.push('/profile')"
      title="Profile Settings"
    >
      <img
        :src="profile?.avatar || 'https://imgur.com/zeOIcEj.jpg'"
        alt="Avatar"
        class="w-full h-full object-cover"
      />
    </div>
  </header>
</template>