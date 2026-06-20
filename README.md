# Universal Favicon Generator 🎨

**Universal Favicon Generator** adalah aplikasi web ringan berbasis HTML, CSS, JS, dan LocalStorage yang dirancang untuk membantu Anda membuat berkas favicon berkualitas tinggi untuk situs web Anda secara instan.

Aplikasi ini mendukung pembuatan favicon dari **Emoji**, **Simbol/Shape Vector**, **Inisial Huruf (Teks)**, maupun **Unggah Gambar Kustom**, serta menyediakan instruksi pemasangan lengkap untuk berbagai platform populer.

---

## 🚀 Fitur Utama

1. **Multi-Source Favicon Creator**:
   * **Emoji Creator**: Pilih dari 50+ preset emoji populer resolusi tinggi.
   * **Preset Shape**: Desain favicon menggunakan simbol vektor (Bintang, Jantung, Petir, Kode, dll).
   * **Text Initial**: Buat inisial 1-3 huruf dengan pilihan font kustom.
   * **Image Upload**: Unggah file gambar sendiri (PNG/JPG/SVG) secara drag & drop.
2. **Kustomisasi Gaya Penuh**:
   * Bentuk Latar Belakang: Bulat (Circle), Rounded Box, Kotak (Square), atau Transparan.
   * Pengaturan Warna Latar & Warna Ikon (Color picker + kode Hex).
   * Pengaturan ukuran skala ikon, rotasi pergeseran posisi X/Y, lebar border, dan warna border.
3. **Tinjauan Langsung Real-time**:
   * Mockup **Browser Tab** untuk melihat ikon di tab browser virtual.
   * Mockup **Google Search Result** untuk melihat tampilan di halaman pencarian Google.
   * Mockup **Mobile Home Screen** untuk tampilan aplikasi smartphone.
4. **Penyimpanan Lokal (Database Desain)**:
   * Simpan hasil desain unik Anda ke database browser lokal (`localStorage`) untuk diedit kembali di lain waktu.
5. **Ekspor & Download Lengkap**:
   * Unduh ukuran individual: 16x16, 32x32, Apple-touch (180x180), dan PWA Icon (192x192).
   * Unduh **Paket Lengkap (.ZIP)** yang otomatis berisi semua ukuran PNG, berkas `favicon.ico`, dan `site.webmanifest` yang siap digunakan untuk PWA.
6. **Panduan Pemasangan Terintegrasi**:
   * Panduan instalasi dan copy-paste kode untuk **WordPress (WP)**, **Blogger (Blogspot)**, **GitHub Pages/HTML biasa**, dan **Web App Manifest**.

---

## 📂 Struktur Berkas

* **`index.html`**: Antarmuka visual desainer, previewer mockup, dan panel kode instruksi.
* **`style.css`**: Gaya visual bertema gelap modern dengan efek *glassmorphism* dan responsif untuk seluler.
* **`app.js`**: Mesin penggambar canvas, resize, parsing upload gambar, pembuatan paket berkas ZIP, dan penyimpanan draf lokal.
* **`README.md`**: Dokumentasi panduan ini.

---

## 💻 Cara Menjalankan Aplikasi

### 1. Jalankan Offline
* Buka browser di perangkat Anda, lalu buka file **`index.html`** secara langsung.

### 2. Jalankan dengan Web Server Lokal (Termux/Terminal)
Jika Anda menggunakan Termux di Android:
```bash
# Masuk ke direktori
cd ~/storage/downloads/favicon-generator

# Jalankan server
python3 -m http.server 8080
```
Lalu buka browser HP Anda ke alamat: `http://localhost:8080`

### 3. Deploy ke GitHub Pages (Online)
Jika ingin diakses online secara global, buat repositori baru di GitHub, unggah file ini, lalu aktifkan GitHub Pages di tab **Settings** -> **Pages** -> Deploy branch **`main`**.

---

## 🛠️ Lisensi
Proyek ini gratis digunakan dan dikembangkan secara bebas.
