<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 flex items-center justify-between"
    >
      <div>
        <h4 class="text-sm font-semibold text-gray-500 dark:text-gray-400">{{ card.title }}</h4>
        <p class="text-2xl font-bold mt-1">
          <span v-if="card.value !== null">{{ card.value }}</span>
          <span v-else>Loading...</span>
        </p>
      </div>
      <div class="text-3xl">
        <component :is="card.icon" class="text-blue-500 dark:text-yellow-400" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineComponent, markRaw } from 'vue'
import { getUsers, getOrders } from '../services/api.js' // Sesuaikan path jika perlu

// Komponen ikon dibungkus markRaw agar tidak dijadikan reactive
const UserIcon = markRaw(defineComponent({ template: '<span>👤</span>' }))
const ShoppingCartIcon = markRaw(defineComponent({ template: '<span>🛒</span>' }))
const MessageCircleIcon = markRaw(defineComponent({ template: '<span>💬</span>' }))

// State cards
const cards = ref([
  {
    title: 'Total Users',
    value: null,
    icon: UserIcon,
  },
  {
    title: 'Total Orders',
    value: null,
    icon: ShoppingCartIcon,
  },
  {
    title: 'Feedbacks',
    value: 45, // Dummy value
    icon: MessageCircleIcon,
  },
])

// Ambil data dari API saat komponen dimount
onMounted(async () => {
  try {
    const users = await getUsers()
    cards.value[0].value = Array.isArray(users) ? users.length : 0
  } catch (error) {
    console.error('Gagal ambil data users:', error)
    cards.value[0].value = 'Error'
  }

  try {
    const orders = await getOrders()
    cards.value[1].value = Array.isArray(orders) ? orders.length : 0
  } catch (error) {
    console.error('Gagal ambil data orders:', error)
    cards.value[1].value = 'Error'
  }
})
</script>