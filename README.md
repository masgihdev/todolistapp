# Todo List App

Sebuah aplikasi Todo List modern yang dibangun dengan React dan Vite, menawarkan antarmuka yang bersih dan intuitif untuk manajemen tugas sehari-hari.

## Fitur

- ✨ Manajemen tugas (tambah, edit, hapus)
- 🏷️ Pengkategorian tugas
- ✅ Penandaan tugas selesai
- 🔍 Pencarian dan filter tugas
- 💾 Penyimpanan lokal (data tersimpan di browser)
- 📱 Responsif untuk berbagai ukuran layar

## Teknologi

- React 18
- Vite
- React Icons
- Local Storage API

## Prasyarat

Sebelum menjalankan aplikasi, pastikan sistem Anda telah memiliki:

- Node.js (versi 14 atau lebih tinggi)
- npm (Node Package Manager)

## Instalasi

1. Clone repositori ini
```bash
git clone [url-repositori]
cd todolistapp
```

2. Install dependensi
```bash
npm install
```

3. Jalankan aplikasi dalam mode development
```bash
npm run dev
```

4. Buka browser dan akses `http://localhost:5173`

## Penggunaan

1. **Menambah Tugas**
   - Ketik tugas di input field
   - Tambahkan kategori (opsional)
   - Tekan Enter atau klik tombol tambah

2. **Mengedit Tugas**
   - Klik ikon edit pada tugas
   - Ubah teks atau kategori
   - Simpan perubahan

3. **Menandai Tugas Selesai**
   - Klik tombol centang di sebelah tugas

4. **Menghapus Tugas**
   - Klik ikon hapus pada tugas

5. **Filter dan Pencarian**
   - Gunakan dropdown untuk memfilter (Semua/Aktif/Selesai)
   - Gunakan search bar untuk mencari tugas berdasarkan teks atau kategori

## Build

Untuk membuat versi production:

```bash
npm run build
```

File hasil build akan tersedia di folder `dist`.

## Pengembang

Dikembangkan oleh MasgihDev

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT - lihat file [LICENSE](LICENSE) untuk detail.