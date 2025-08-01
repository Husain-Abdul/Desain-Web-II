<template>
  <Layout>
    <div>
      <DashboardCards :totalUsers="totalUsers" />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <BarChart :users="users" />
        <PieChart :roles="rolesDistribution" />
      </div>
    </div>
  </Layout>
</template>

<script>
import { ref, onMounted } from 'vue'
import Layout from '../components/Layout.vue'
import BarChart from '../components/charts/BarChart.vue'
import PieChart from '../components/charts/PieChart.vue'
import { getUsers } from '../services/api.js'

export default {
  components: {
    Layout,
    BarChart,
    PieChart
  },
  setup() {
    const users = ref([])
    const totalUsers = ref(0)
    const rolesDistribution = ref({
      admin: 0,
      editor: 0,
      viewer: 0
    })

    onMounted(async () => {
      const fetchedUsers = await getUsers()
      users.value = fetchedUsers
      totalUsers.value = fetchedUsers.length

      const roles = { admin: 0, editor: 0, viewer: 0 }
      fetchedUsers.forEach(user => {
        if (roles[user.role]) roles[user.role]++
      })
      rolesDistribution.value = roles
    })

    return { users, totalUsers, rolesDistribution }
  }
}
</script>
