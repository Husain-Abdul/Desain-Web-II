<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg h-72 flex flex-col">
    <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">User Roles Distribution</h2>
    <div class="flex-1 relative">
      <Pie v-if="chartData" :data="chartData" :options="chartOptions" class="absolute inset-0" />
    </div>
  </div>
</template>

<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { Pie } from 'vue-chartjs'
import { ref, onMounted } from 'vue'
import axios from 'axios'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

const chartData = ref(null)

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#ffffff',
        font: { size: 12 },
        boxWidth: 12,
      },
    },
    tooltip: {
      backgroundColor: '#1f2937',
      titleColor: '#ffffff',
      bodyColor: '#d1d5db',
    },
  },
}

onMounted(async () => {
  try {
    const response = await axios.get('https://6888894fadf0e59551ba59a0.mockapi.io/users')
    const users = response.data

    // Hitung distribusi per role
    const roleCounts = {}
    users.forEach(user => {
      const role = user.role || 'Unknown'
      roleCounts[role] = (roleCounts[role] || 0) + 1
    })

    // Generate label & data dari roleCounts
    const labels = Object.keys(roleCounts)
    const data = Object.values(roleCounts)

    // Warna default (dapat disesuaikan)
    const defaultColors = ['#F59E0B', '#10B981', '#3B82F6', '#EF4444', '#8B5CF6', '#F472B6']
    const backgroundColor = labels.map((_, i) => defaultColors[i % defaultColors.length])

    // Set chartData
    chartData.value = {
      labels,
      datasets: [
        {
          label: 'Roles',
          data,
          backgroundColor,
          borderWidth: 1,
        },
      ],
    }
  } catch (error) {
    console.error('Gagal mengambil data user:', error)
  }
})
</script>
