# Tahapan Rilis

# Proses Rilis
[/raw-attachment/wiki/ProsesRilis/proses-rilis.png]

Tugas secara umum Lihat di ProsesRilis/Tugas

## Kriteria rilis

### Jahitan
- Bisa dipasang
- Halaman Lengkap Proses_Rilis_Jahitan

### Beta
- Pembekuan lumbung, tidak lagi sync ke Sid
- Kriteria jahitan terpenuhi
- Rilis lama dapat ditingkatkan ke rilis beta ini
- Karya seni dan branding sudah 100% BlankOn
- Sukses dalam apt-get upgrade
- Masalah yang diketahui saat jahitan dirilis sudah diperbaiki
- Halaman Lengkap ada Proses_Rilis_Beta

### RC (Release Candidate)
- Kriteria beta terpenuhi
- Tidak ada bloker

### Rilis
- Diambil dari rilis terbaik dari RC
- Kriteria beta terpenuhi
- Masalah yang diketahui saat beta dirilis sudah diperbaiki
- Halaman Lengkap Proses_Rilis_Akhir

## Pra Rilis
### Rilis H-10:
- Memberitahukan para developer melalui ​milis:
  - Cek branding BlankOn harus sudah 100% diterapkan
  - Memperbaiki bug-bug yang masih ada
  - Update bibit paket (jika ada)

### Rilis H-7:
- Berdiskusi dengan tim-tim yang masih ada kekurangan dalam pengumpulan tugas-tugasnya
- Meninjau masalah dan target bug yang akan diselesaikan

### Rilis H-3:
- Umumkan jahitan harian yang akan dijadikan rilis
- Memberitahukan Tim Tester untuk melakukan testing segera setelah jahitan yang sudah ditentukan diumumkan:
  - Memasang jahitan yang sudah ditentukan
  - Proses peningkatan versi dari versi sebelumnya
- Review masalah-masalah yang ada, dan tentukan mana yang akan diperbaiki dan mana yang tidak

### Rilis H-1:
   1. Meminta tim web untuk menyiapkan halaman bagi pengumuman dan catatan
      rilis
   2. Meminta tim infrastruktur memeriksa kembali metode alternatif pengunduhan
      (jigdo, torrent)
   3. Mengubah jahitan menjadi rilis ofisial (bukan pengembangan)
   4. Menyiapkan pengumuman rilis:

## Pengumuman Rilis
- Gunakan templat yang disediaan [di sini](./TemplatCatatanRilis.md)
- Mengumumkan rilis ke milis-milis yang diperlukan (termasuk milis eksternal) dan kanal-kanal yang tersedia
- Update topik di #blankon
- Update Distrowatch
- Update Debian Census
