// Fungsi utama untuk memperbarui jam dan tanggal
function updateClock() {
  const now = new Date();

  // Format Waktu (Jam:Menit:Detik)
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;

  // Format Tanggal (Hari, Tanggal Bulan Tahun)
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const dayName = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const dateString = `${dayName}, ${date} ${month} ${year}`;

  // Memasukkan hasil format ke dalam elemen HTML
  document.getElementById("clock").textContent = timeString;
  document.getElementById("dateDisplay").textContent = dateString;
}

// Menghapus animasi loading setelah 1 detik
// (Class 'loading' ada di tag <body> pada file HTML)
setTimeout(() => {
  document.body.classList.remove("loading");
}, 1000);

// Memanggil fungsi updateClock() pertama kali agar jam langsung muncul,
// lalu mengaturnya untuk diulang setiap 1 detik (1000 milidetik).
updateClock();
setInterval(updateClock, 1000);

// Menambahkan efek visual saat jam diklik
document.getElementById("clock").addEventListener("click", function () {
  this.style.transform = "scale(0.98)";
  setTimeout(() => {
    // Mengembalikan ke posisi semula (dengan efek hover)
    this.style.transform = "translateY(-2px)";
  }, 100);
});
