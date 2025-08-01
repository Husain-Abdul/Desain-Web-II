<template>
  <Layout>
    <div class="p-6 text-gray-800 dark:text-white">
      <!-- Header Settings -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          ⚙️ Pengaturan Aplikasi
        </h1>
        <p class="text-gray-600 dark:text-gray-300 mt-2">
          Kelola preferensi dan konfigurasi aplikasi Anda
        </p>
      </div>

      <!-- Navigation Tabs -->
      <div class="mb-6">
        <div class="flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            @click="activeTab = tab.id"
            :class="[
              'px-4 py-2 rounded-t-lg font-medium transition-all duration-200',
              activeTab === tab.id
                ? 'bg-blue-500 text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            ]"
          >
            {{ tab.icon }} {{ tab.name }}
          </button>
        </div>
      </div>

      <!-- Content Area -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <!-- Akun Pengguna -->
        <div v-if="activeTab === 'account'" class="space-y-6">
          <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h2 class="text-xl font-semibold mb-4">👤 Akun Pengguna</h2>
            
            <!-- Edit Profil -->
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="font-medium mb-3">Edit Profil</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium mb-1">Nama Lengkap</label>
                  <input
                    v-model="settings.profile.name"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-600"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1">Email</label>
                  <input
                    v-model="settings.profile.email"
                    type="email"
                    class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-600"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1">Roles</label>
                  <input
                    v-model="settings.profile.roles"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-600"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1">Foto Profil</label>
                  <div class="flex items-center gap-3">
                    <img
                      :src="settings.profile.avatar || 'https://imgur.com/zeOIcEj.jpg'"
                      alt="Avatar"
                      class="w-12 h-12 rounded-full object-cover"
                    />
                    <button class="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                      Ganti Foto
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Ubah Password -->
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
              <h3 class="font-medium mb-3">🔐 Ubah Password</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium mb-1">Password Lama</label>
                  <input
                    v-model="settings.password.old"
                    type="password"
                    class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-600"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1">Password Baru</label>
                  <input
                    v-model="settings.password.new"
                    type="password"
                    class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-600"
                  />
                </div>
              </div>
              <button class="mt-3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                Update Password
              </button>
            </div>

            <!-- Keamanan -->
            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 class="font-medium mb-3">🛡️ Keamanan</h3>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="font-medium">Autentikasi Dua Faktor (2FA)</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Tingkatkan keamanan akun Anda</p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input
                      v-model="settings.security.twoFactor"
                      type="checkbox"
                      class="sr-only peer"
                    />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div class="flex items-center justify-between">
                  <div>
                    <p class="font-medium">Login History</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Lihat riwayat login terakhir</p>
                  </div>
                  <button class="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Lihat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tampilan dan Tema -->
        <div v-if="activeTab === 'appearance'" class="space-y-6">
          <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h2 class="text-xl font-semibold mb-4">🎨 Tampilan & Tema</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium mb-1">Mode Tema</label>
                <select v-model="settings.appearance.theme" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-600">
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Ukuran Font</label>
                <select v-model="settings.appearance.fontSize" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-600">
                  <option value="small">Kecil</option>
                  <option value="medium">Sedang</option>
                  <option value="large">Besar</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Bahasa Aplikasi</label>
                <select v-model="settings.appearance.language" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-600">
                  <option value="id">Bahasa Indonesia</option>
                  <option value="en">English</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Layout</label>
                <select v-model="settings.appearance.layout" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-600">
                  <option value="sidebar-left">Sidebar Kiri</option>
                  <option value="sidebar-right">Sidebar Kanan</option>
                  <option value="grid">Grid View</option>
                  <option value="list">List View</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- Notifikasi -->
        <div v-if="activeTab === 'notification'" class="space-y-6">
          <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h2 class="text-xl font-semibold mb-4">🔔 Notifikasi</h2>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span>Aktifkan Notifikasi</span>
                <input type="checkbox" v-model="settings.notification.enabled" class="toggle-checkbox" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Jenis Notifikasi</label>
                <div class="flex gap-4">
                  <label><input type="checkbox" v-model="settings.notification.types.email" /> Email</label>
                  <label><input type="checkbox" v-model="settings.notification.types.push" /> Push</label>
                  <label><input type="checkbox" v-model="settings.notification.types.sms" /> SMS</label>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Frekuensi Notifikasi</label>
                <select v-model="settings.notification.frequency" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-600">
                  <option value="realtime">Real-time</option>
                  <option value="daily">Harian</option>
                  <option value="weekly">Mingguan</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- Preferensi Aplikasi -->
        <div v-if="activeTab === 'preference'" class="space-y-6">
          <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h2 class="text-xl font-semibold mb-4">🌐 Preferensi Aplikasi</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium mb-1">Zona Waktu</label>
                <select v-model="settings.preference.timezone" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-600">
                  <option value="WIB">WIB (GMT+7)</option>
                  <option value="WITA">WITA (GMT+8)</option>
                  <option value="WIT">WIT (GMT+9)</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Format Tanggal & Waktu</label>
                <select v-model="settings.preference.datetimeFormat" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-600">
                  <option value="dd-mm-yyyy">DD-MM-YYYY</option>
                  <option value="mm-dd-yyyy">MM-DD-YYYY</option>
                  <option value="yyyy-mm-dd">YYYY-MM-DD</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Satuan</label>
                <select v-model="settings.preference.unit" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-600">
                  <option value="metric">Metrik (kg, meter)</option>
                  <option value="imperial">Imperial (lb, feet)</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Default Halaman Login</label>
                <select v-model="settings.preference.defaultPage" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-600">
                  <option value="dashboard">Dashboard</option>
                  <option value="profile">Profile</option>
                  <option value="users">User List</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- Pengaturan Khusus -->
        <div v-if="activeTab === 'custom'" class="space-y-6">
          <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h2 class="text-xl font-semibold mb-4">🛠️ Pengaturan Khusus</h2>
            <div v-if="appType === 'school'" class="space-y-4">
              <div>
                <label class="block text-sm font-medium mb-1">Tahun Ajaran Aktif</label>
                <input v-model="settings.custom.schoolYear" type="text" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-600" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Nama Perusahaan</label>
                <input v-model="settings.custom.schoolName" type="text" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-600" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Alamat Perusahaan</label>
                <input v-model="settings.custom.schoolAddress" type="text" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-600" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Logo Perusahaan</label>
                <input type="file" class="w-full" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Peran & Hak Akses</label>
                <input v-model="settings.custom.roles" type="text" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-600" placeholder="admin, manager, staff" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Backup & Restore Data</label>
                <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">Backup</button>
                <button class="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">Restore</button>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Pengaturan Jadwal/Kalender</label>
                <input v-model="settings.custom.academicCalendar" type="text" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-600" />
              </div>
            </div>
            <div v-else class="space-y-4">
              <div>
                <label class="block text-sm font-medium mb-1">Alamat Pengiriman Default</label>
                <input v-model="settings.custom.shippingAddress" type="text" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-600" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Metode Pembayaran Default</label>
                <input v-model="settings.custom.paymentMethod" type="text" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-600" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Wishlist Publik/Privat</label>
                <select v-model="settings.custom.wishlist" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-600">
                  <option value="public">Publik</option>
                  <option value="private">Privat</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Riwayat Transaksi</label>
                <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">Lihat</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Privasi dan Keamanan -->
        <div v-if="activeTab === 'privacy'" class="space-y-6">
          <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h2 class="text-xl font-semibold mb-4">🔒 Privasi & Keamanan</h2>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium mb-1">Siapa yang bisa melihat profil Anda?</label>
                <select v-model="settings.privacy.profileVisibility" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-600">
                  <option value="public">Publik</option>
                  <option value="private">Hanya Saya</option>
                  <option value="friends">Teman</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Kelola Sesi Login Aktif</label>
                <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">Kelola</button>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Persetujuan Data (GDPR)</label>
                <input type="checkbox" v-model="settings.privacy.gdprConsent" />
                <span class="ml-2">Saya setuju dengan kebijakan data</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Bahasa dan Lokalisasi -->
        <div v-if="activeTab === 'language'" class="space-y-6">
          <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h2 class="text-xl font-semibold mb-4">💬 Bahasa & Lokalisasi</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium mb-1">Pilih Bahasa</label>
                <select v-model="settings.language.selected" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-600">
                  <option value="id">Bahasa Indonesia</option>
                  <option value="en">English</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Wilayah/Negara</label>
                <input v-model="settings.language.region" type="text" class="w-full px-3 py-2 border rounded-lg dark:bg-gray-600" />
              </div>
            </div>
          </div>
        </div>

        <!-- Tentang Aplikasi -->
        <div v-if="activeTab === 'about'" class="space-y-6">
          <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h2 class="text-xl font-semibold mb-4">📄 Tentang Aplikasi</h2>
            <div class="space-y-2">
              <div>
                <span class="font-medium">Versi Aplikasi:</span> 1.0.0
              </div>
              <div>
                <span class="font-medium">Developer:</span> Husain Abdul Ghani
              </div>
              <div>
                <span class="font-medium">Syarat & Ketentuan:</span>
                <a href="#" class="text-blue-500 hover:underline">Baca di sini</a>
              </div>
              <div>
                <span class="font-medium">Kebijakan Privasi:</span>
                <a href="#" class="text-blue-500 hover:underline">Baca di sini</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tombol Simpan -->
      <div class="mt-8 flex justify-end gap-3">
        <button class="px-6 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors">
          Reset
        </button>
        <button class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg">
          Simpan Perubahan
        </button>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref } from 'vue'
import Layout from '../components/Layout.vue'

const tabs = [
  { id: 'account', name: 'Akun', icon: '👤' },
  { id: 'appearance', name: 'Tampilan', icon: '🎨' },
  { id: 'notification', name: 'Notifikasi', icon: '🔔' },
  { id: 'preference', name: 'Preferensi', icon: '🌐' },
  { id: 'custom', name: 'Khusus', icon: '🛠️' },
  { id: 'privacy', name: 'Privasi', icon: '🔒' },
  { id: 'language', name: 'Bahasa', icon: '💬' },
  { id: 'about', name: 'Tentang', icon: '📄' }
]
const activeTab = ref('account')

// Ganti ke 'school' jika dashboard admin sekolah, 'ecommerce' jika aplikasi umum
const appType = ref('school')

const settings = ref({
  profile: {
    name: '',
    email: '',
    phone: '',
    avatar: ''
  },
  password: {
    old: '',
    new: ''
  },
  security: {
    twoFactor: false
  },
  appearance: {
    theme: 'auto',
    fontSize: 'medium',
    language: 'id',
    layout: 'sidebar-left'
  },
  notification: {
    enabled: true,
    types: { email: true, push: false, sms: false },
    frequency: 'realtime'
  },
  preference: {
    timezone: 'WIB',
    datetimeFormat: 'dd-mm-yyyy',
    unit: 'metric',
    defaultPage: 'dashboard'
  },
  custom: {
    // Untuk sekolah
    schoolYear: '',
    schoolName: '',
    schoolAddress: '',
    roles: '',
    academicCalendar: '',
    // Untuk e-commerce
    shippingAddress: '',
    paymentMethod: '',
    wishlist: 'public'
  },
  privacy: {
    profileVisibility: 'public',
    gdprConsent: false
  },
  language: {
    selected: 'id',
    region: ''
  }
})
</script>

<style scoped>
.toggle-checkbox {
  width: 2rem;
  height: 1rem;
  appearance: none;
  background: #d1d5db;
  border-radius: 9999px;
  position: relative;
  outline: none;
  cursor: pointer;
  transition: background 0.2s;
}
.toggle-checkbox:checked {
  background: #2563eb;
}
.toggle-checkbox:before {
  content: '';
  position: absolute;
  left: 0.15rem;
  top: 0.15rem;
  width: 0.7rem;
  height: 0.7rem;
  background: #fff;
  border-radius: 9999px;
  transition: transform 0.2s;
}
.toggle-checkbox:checked:before {
  transform: translateX(1rem);
}
</style> 