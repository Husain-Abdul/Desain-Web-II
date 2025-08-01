<template>
  <header class="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
    <div class="flex items-center space-x-4">
      <button @click="$emit('toggle-sidebar')" class="text-gray-900 dark:text-white">
        <!-- Ikon Hamburger -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <h1 class="text-lg font-semibold">Dashboard</h1>
    </div>
    <div 
      class="w-8 h-8 rounded-full bg-blue-500 cursor-pointer hover:bg-blue-600 transition-colors flex items-center justify-center text-white font-semibold"
      @click="$router.push('/profile')"
      title="Profile Settings"
    >
      H
    </div>
  </header>
</template>