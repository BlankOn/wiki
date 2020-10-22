# BlanKoding 2017 \#2


### Laporan BlanKoding \#2

Selamat Malam Kawan-Kawan Pendekar,

Dua hari kemaren, Sabtu dan Minggu, 26-27 Agustus 2017 telah dilangsungkan BlanKoding #2
berlokasi di Kantor Kode Kreatif, Republik Bojong.

Peserta yang hadir:
- Darian Rizaluddin
- Herpiko Dwi Aguno
- Aris Winardi
- Muhammad Rafi
- Estu Fardani
- YHT
- Irfan Pule
- Saputro Aryulianto

Dan kawan-kawan pengembang yg hadir via daring di grup telegram.

Terimakasih untuk para sesepuh yang menyempatkan hadir:
- Pak Ahmad Haris
- Pak Agung Riyadi (ahjung)
- Pak Mahyudin
- Pak Syah Dwi

Berikut beberapa pekerjaan yang dapat diselesaikan ketika BlanKoding:
- Mengembalikan kerjaan ke server Alynne
  * Memasang irgsh di Alynne. Sehingga alynne sudah bisa digunakan untuk pemaketan
  * Memasang Pabrik-cd di Alynne, Sehingga alynne sudah bisa melakukan penjahitan dan telah diatur (cron) untuk melakukan penjahitan teratur. Hasil cetakan bisa diakses di http://cdimage-dev.blankonlinux.or.id/blankon/
  * Memasang reprepro di Alynne, menarik sid harian via cron. Repo ini dapat diakses di tautan http://arsip-dev.blankonlinux.or.id/blankon/dists/

- Dokumentasi
  * Wiki baru kini berbasiskan markdown menggantikan dev.boi yang lama. dev.boi yang lama dipindah ke legacy-dev.boi. (domain onprogres). Wiki diserve menggunakan github page (jekyll + travis). Wiki bisa diakses pada tautan https://blankon.github.io/wiki. Pada halaman wiki ini masih terdapat beberapa kesalahan konten (relevansi, link dan lain lain) dan dalam proses koreksi oleh tim dokumentasi.

- Humas
  * Proposal Sponsor dan Mitra akan segera rilis

- Kesenian
  * Paket wallpaper, Grub sudah masuk irghs. siap dijahit
  * Peer Maskot menyisakan Maskot Manajer Rilis dan Jaminan Kualitas blm selesai.

Kendala
- Koneksi Internasional untuk alynne lambat, sehingga repo uluwatu di ananda blm bisa sepenuhnya ditarik ke alynne. Tim Infra sedang mencari jalan keluar agar repo uluwatu di ananda segera tersalin.

Garis Besar Pengembangan

Tahapan rilis Uluwatu kali ini sangat-sangat meleset dari target awal. Di awan-awal perjalanan Uluwatu, pengembang berkonsentrasi pada pelayanan Infrastruktur dengan target mampu mereproduksi infra dan layanan yang ada di BlankOn Linux. Hal ini dikarenakan minimnya dokumentasi dan penurunan catatan dari pengembang-pengembang awal ke tim pengembangan selanjutnya.

Fase Nol | Upgrade mesin mesin blankon
  - Penambahan Hardisk 2TB ke Wajinah
  - Penambahan Hardisk 4TB ke Rani
  - Penambahan Procesor ke Alynne
  - Pemasangan Ram ke Alynne | kondisi alyne, 2 CPU, 8 Core, 16GB
  - Inisiasi Ananda | Digital Ocean 4Core 4GB, 350GB SSD (Repo)

Fase Satu | Riset ujicoba replika service blankon
Fase Dua | Reinstall Alynne dan mengembalikan layanan awal
Fase Tiga | Reinstall Rani dan mengembalikan layannan awal (On Progress)

Dari itu proses ini diawali dengan pembuatan server baru ananda.boi untuk ujicoba mereplika layanan IRGSH, Reprepro, dan Pabrik-CD. Setelah ini berjalan, dilanjutkan dengan install ulang Alynne, dan mengembalikan layanan yang dulu pernah berjalan di alynne.

Demikian laporan ini kami tulis.

Salam hangat

\- Estu Fardani -
+62 856 432 14898
Blog: http://tuanpembual.wordpress.com

Sumber: milis pengembang BlankOn



