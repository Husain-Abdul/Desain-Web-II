<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg h-72 flex flex-col">
    <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
      User Registrations (per Month)
    </h2>
    <div class="flex-1 relative min-h-[250px]">
      <Bar :data="chartData" :options="chartOptions" class="absolute inset-0" />
    </div>
  </div>
</template>

<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import { ref, onMounted } from 'vue'
import { getUsers } from '../../services/api.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const chartData = ref({
  labels: monthLabels,
  datasets: []
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: '#ffffff',
        font: { size: 12 },
      },
    },
    tooltip: {
      backgroundColor: '#1f2937',
      titleColor: '#ffffff',
      bodyColor: '#d1d5db',
    },
  },
  scales: {
    x: {
      ticks: { color: '#ffffff' },
      grid: { color: 'rgba(255,255,255,0.05)' },
    },
    y: {
      ticks: { color: '#ffffff' },
      grid: { color: 'rgba(255,255,255,0.05)' },
      suggestedMax: 25,
    },
  },
}

onMounted(async () => {
  const users = await getUsers()
  console.log('Data user:', users)

  const registrationsPerMonth = Array(12).fill(0)

  users.forEach(user => {
    const rawCreatedAt = user.createdAt
    let date = null

    if (typeof rawCreatedAt === 'number') {
      date = new Date(rawCreatedAt * 1000)
    } else if (typeof rawCreatedAt === 'string') {
      const cleaned = rawCreatedAt.trim()
      if (cleaned !== '' && !isNaN(Date.parse(cleaned))) {
        date = new Date(cleaned)
      }
    }

    if (!(date instanceof Date) || isNaN(date.getTime())) {
      console.warn(`Invalid date for user "${user.name}" =>`, rawCreatedAt)
      return
    }

    const month = date.getMonth()
    console.log(` ${user.name} registered on ${date.toISOString()} (Month: ${month})`)

    if (month >= 0 && month < 12) {
      registrationsPerMonth[month]++
    }
  })

  console.log('Registrasi per bulan:', registrationsPerMonth)

  //  Ganti seluruh datasets untuk memastikan reaktivitas
  chartData.value = {
    labels: monthLabels,
    datasets: [
      {
        label: 'Users',
        data: registrationsPerMonth,
        backgroundColor: '#3B82F6',
        borderRadius: 6,
        barThickness: 30,
      }
    ]
  }
})
</script>