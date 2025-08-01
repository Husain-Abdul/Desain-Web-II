<template>
  <!-- Overlay untuk mobile -->
  <div v-if="isOpen && isMobile" 
       @click="$emit('close')" 
       class="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"></div>
  
  <aside :class="[
    'bg-gray-900 text-white w-64 p-6 space-y-6 fixed top-0 left-0 h-full transition-transform duration-300 z-40',
    isOpen ? 'translate-x-0' : '-translate-x-full', 
    'lg:fixed lg:z-40'
  ]">
    <!-- Tombol close untuk mobile dan desktop -->
    <div class="flex items-center justify-between">
      <div class="text-xl font-bold">Admin Panel</div>
      <button @click="$emit('close')" class="text-white hover:text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    
    <nav class="space-y-2">
      <RouterLink 
        to="/" 
        @click="$emit('close')"
        class="block px-3 py-2 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-colors"
        :class="{ 'bg-gray-800 text-blue-400': $route.path === '/' }"
      >
        Dashboard
      </RouterLink>
      <RouterLink 
        to="/users" 
        @click="$emit('close')"
        class="block px-3 py-2 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-colors"
        :class="{ 'bg-gray-800 text-blue-400': $route.path === '/users' }"
      >
        Users
      </RouterLink>
      <RouterLink 
        to="/settings" 
        @click="$emit('close')"
        class="block px-3 py-2 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-colors"
        :class="{ 'bg-gray-800 text-blue-400': $route.path === '/settings' }"
      >
        Settings
      </RouterLink>
    </nav>
  </aside>
</template>

<script setup>
import { useRoute } from 'vue-router'

defineProps({
  isOpen: Boolean,
  isMobile: {
    type: Boolean,
    default: false
  }
})

defineEmits(['close'])
</script>