<template>
  <div class="min-h-screen flex bg-gray-100 dark:bg-gray-900 text-white transition-all duration-300">
    <!-- Sidebar -->
    <Sidebar :isOpen="isSidebarOpen" :isMobile="isMobile" @close="closeSidebar" />

    <!-- Konten utama -->
    <div :class="[
      'flex-1 flex flex-col transition-all duration-300',
      isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'
    ]">
      <!-- Header -->
      <Header @toggle-sidebar="toggleSidebar" />

      <!-- Konten halaman -->
      <main class="flex-1 p-6 sm:p-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <div class="max-w-6xl mx-auto rounded-xl shadow-lg bg-white dark:bg-gray-800 p-6 sm:p-8 min-h-[60vh] text-gray-900 dark:text-white transition-all duration-300">
          <DashboardCards v-if="showDashboardCards" />
          <slot />
        </div>
      </main>

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import DashboardCards from './DashboardCards.vue'
import { useRoute } from 'vue-router'
import { ref, watch, onMounted, onUnmounted } from 'vue'

const isSidebarOpen = ref(true)
const isMobile = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}

// Deteksi ukuran layar
const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 1024 // lg breakpoint
  if (isMobile.value) {
    isSidebarOpen.value = false
  } else {
    isSidebarOpen.value = true
  }
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})

const route = useRoute()
const showDashboardCards = ref(false)
watch(() => route.path, (newPath) => {
  showDashboardCards.value = newPath === '/'
}, { immediate: true })
</script>