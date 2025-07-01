<template>
  <div class="home-container">
    <h1>Selamat Datang, Husain Abdul Ghani</h1>
    <p>Ini adalah halaman Home dari latihan Vue.</p>
    <button @click="showAlert">Klik Aku</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    showAlert() {
      alert('Halo Husain! Kamu berhasil membuat halaman Vue');
    }
  }
}
</script>

<!-- Import CSS dari file eksternal -->
<style src="../style.css"></style>
