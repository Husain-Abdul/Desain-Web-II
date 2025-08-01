<template>
  <Layout>
    <div class="p-6 text-gray-800 dark:text-white">
      <h1 class="text-2xl font-bold mb-4">Profile</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Avatar dan Informasi Dasar -->
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
          <div class="flex flex-col items-center">
            <div class="relative">
              <img
                :src="profile.avatar || 'https://imgur.com/zeOIcEj.jpg'"
                alt="Avatar"
                class="w-32 h-32 rounded-full object-cover mb-2"
              />
              <button
                class="absolute bottom-2 right-2 bg-gray-700 bg-opacity-70 p-1 rounded-full"
                title="Edit Foto"
                @click="$refs.avatarInput.click()"
              >
                <Pencil class="w-4 h-4 text-white" />
              </button>
            </div>
            <input
              type="file"
              ref="avatarInput"
              @change="handleAvatarChange"
              class="hidden"
            />

            <div class="mt-3 text-center">
              <div class="flex items-center justify-center gap-2">
                <template v-if="isEditingName">
                  <input
                    v-model="profile.name"
                    class="border rounded-lg px-2 py-1 text-center"
                  />
                  <button @click="isEditingName = false">
                    <Check class="w-4 h-4 text-green-500" />
                  </button>
                </template>
                <template v-else>
                  <h2 class="text-xl font-semibold">{{ profile.name }}</h2>
                  <button @click="isEditingName = true">
                    <Pencil class="w-4 h-4 text-blue-500" />
                  </button>
                </template>
              </div>

              <p class="text-sm text-gray-600 dark:text-gray-300">{{ profile.email }}</p>

              <div class="flex items-center justify-center gap-2 mt-2">
                <template v-if="isEditingBio">
                  <textarea
                    v-model="profile.bio"
                    rows="2"
                    class="border rounded-lg px-2 py-1 w-full"
                  ></textarea>
                  <button @click="isEditingBio = false">
                    <Check class="w-4 h-4 text-green-500" />
                  </button>
                </template>
                <template v-else>
                  <p class="text-sm italic">{{ profile.bio }}</p>
                  <button @click="isEditingBio = true">
                    <Pencil class="w-4 h-4 text-blue-500" />
                  </button>
                </template>
              </div>
            </div>
          </div>
        </div>

        <!-- Detail dan Skill -->
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow space-y-4">
          <p><strong>Work Colleagues:</strong> {{ profile.workColleagues }}</p>
          <p><strong>Role:</strong> {{ profile.role }}</p>
          <p><strong>Status:</strong> {{ profile.status }}</p>
          <p><strong>Join Date:</strong> {{ formatDate(profile.joinDate) }}</p>
          <p><strong>Last Login:</strong> {{ formatDate(profile.lastLogin) }}</p>
          <p><strong>Total Activity:</strong> {{ profile.totalActivity }}</p>

          <div>
            <h3 class="font-semibold mb-2">Skills:</h3>
            <ul class="flex flex-wrap gap-2">
              <li
                v-for="(skill, index) in profile.skills"
                :key="index"
                class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
              >
                {{ skill }}
              </li>
            </ul>

            <div class="mt-4 flex gap-2">
              <input
                v-model="newSkill"
                type="text"
                placeholder="Add skill"
                class="border rounded-lg px-3 py-1 w-full"
              />
              <button @click="addSkill" class="bg-blue-500 text-white px-3 py-1 rounded-lg">Add</button>
            </div>
          </div>

          <div class="flex gap-4 pt-4">
            <button @click="saveProfile" class="bg-green-500 text-white px-4 py-2 rounded-lg">Save</button>
            <button @click="resetProfile" class="bg-red-500 text-white px-4 py-2 rounded-lg">Reset</button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref } from 'vue'
import Layout from '../components/Layout.vue'
import { Pencil, Check } from 'lucide-vue-next'

const isEditingName = ref(false)
const isEditingBio = ref(false)

const defaultProfile = {
  avatar: '',
  name: 'Husain Abdul Ghani',
  email: 'HusainAbdulGhani@gmail.com',
  bio: 'Frontend Developer, Vue Enthusiast, and Lifelong Learner. Passionate about creating beautiful and functional web applications.',
  workColleagues: 'Yesa Aradya Pasha',
  role: 'Manager',
  status: 'active',
  joinDate: '2025-07-01',
  lastLogin: '2025-08-01',
  totalActivity: 100,
  skills: ['Vue.js', 'TailwindCSS', 'JavaScript', 'REST API', 'Git', 'Node.js', 'React.js', 'Python', 'C++']
}

const profile = ref({ ...defaultProfile })
const newSkill = ref('')

function handleAvatarChange(e) {
  const file = e.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (event) => {
      profile.value.avatar = event.target.result
    }
    reader.readAsDataURL(file)
  }
}

function addSkill() {
  if (newSkill.value.trim() && !profile.value.skills.includes(newSkill.value.trim())) {
    profile.value.skills.push(newSkill.value.trim())
    newSkill.value = ''
  }
}

function saveProfile() {
  console.log('Saving profile:', profile.value)
  alert('Profil berhasil disimpan!')
}

function resetProfile() {
  profile.value = { ...defaultProfile }
  newSkill.value = ''
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>