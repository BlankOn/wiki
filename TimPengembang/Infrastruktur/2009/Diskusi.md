# Rancangan Diskusi Infrastruktur 2009

## Diskusi
Alur perjalanan paket:
submitter -> manager -> worker -> manager
   * submitter: pengembang = pemelihara paket
   * manager: penjadwal pembuatan paket/pengiriman paket ke pabrik yang
      terdistribusi
   * worker: pabrik paket yang terdistribusi

### Pengiriman Tugas
Apa yang mau dikirim?
Kalau model yang dipakai saat ini (irgsh) yang dikirim oleh pengembang
(submitter) hanyalah lokasi dimana berkas-berkas terkait (kode sumber, diff)
bisa diambil oleh pabrik (worker). Sedangkan kalau dput yang dipakai di Debian,
berkas-berkas tersebut langsung dikirim dari komputer pengembang.

#### Model irgsh:
   * (+) berkas orig tidak perlu selalu diupload oleh pengembang bahkan tidak
      perlu diupload karena pabrik dapat mengambilnya dari mirror terdekat
      (khusus paket impor)
   * (+) bisa diatur agar pabrik mengambil berkas dari repositori bazaar yang
      artinya pengembang juga akan menggunakan bazaar. Penggunaan bazaar
      mempermudah dan mempercepat pengiriman perubahan karena hanya yang
      berubah saja yang dikirim.
   * (+) deskripsi tugas bisa dimasukkan secara online via web.
   * (-) kerja dua kali, yaitu mengirim berkas ke sebuah tempat dan mengirim
      deskripsi tugas.

#### Model Debian
   * (+) cukup sekali kirim
   * (-) andai perlu dikirim ulang, maka berkas-berkas tadi perlu dikirim
      ulang (bayangkan harus mengirim ratusan megabytes untuk paket
      openoffice.org)

Sepertinya model irgsh lebih cocok. Artinya, aplikasi dput yang sudah ada di
Debian tidak bisa dipakai =D.

### Pengiriman Paket Binari dari Pabrik (worker) ke Mesin Pusat (manager)

Bagaimana cara mengirimnya?

Aplikasi dput yang dipakai di Debian mendukung beberapa cara mengirim berkas-
berkas sumber, yaitu ftp, http, https, rsync, scp, dan local (dengan install
atau cp).

Yang menjadi isu sebenarnya adalah apakah akan diterapkan pembatasan siapa saja
yang bisa mengirim berkas-berkas tersebut? Jika iya, bagaimana cara
membatasinya?

Salah satu model yang ada adalah pengiriman melalui http (atau https) dimana
lokasi tujuan pengiriman bisa diproteksi dengan username/password (http basic
auth). Username dan password ini dibuat sekali pakai sehingga setelah upload
selesai dilakukan, maka username dan password ini tidak dapat digunakan lagi.

Lokasi pengiriman yang dimaksud di sini adalah sebuah URL. Setiap pengiriman
akan memiliki URL yang berbeda dan setiap URL akan diproteksi dengan username/
password khusus untuk URL dan sesi pengiriman tersebut.

Bentuk implementasi:
   1. worker akan meminta lokasi pengiriman paket ke manager.
   2. manager membuat sebuah direktori pengiriman dan memproteksi direktori
      tersebut dengan mengatur http basic auth di berkas .htaccess dalam
      direktori tersebut. Sudah ada sebuah aplikasi yang akan menangani koneksi
      menuju direktori tersebut.
   3. manager mengirim URL tujuan ke worker, misalnya ​http://
      upload.blankonlinux.or.id/paket/12345/
   4. worker menggunakan URL tersebut untuk mengirim paket.
   5. worker memberitahu manager bahwa pengiriman sudah selesai.
   6. manager memproses berkas-berkas yang dikirim dan menghapus direktori
      pengiriman tadi.

Isu tambahan:
   * Bagaimana jika pengiriman terputus? apakah bisa dilanjutkan?
   * Bagaimana jika ada worker yang tidak menyelesaikan pengiriman? apakah ada
      batas waktu?
   * Bagaimana membedakan worker yang tidak lagi mengirim (namun tidak memberi
      tahu apa-apa) dan proses upload yang sangat lama?
   * Apakah http cocok untuk digunakan untuk keperluan ini?

Last modified on 11/15/2008 02:55:01 AM

#### Attachments (1)
   * pabrik-paket.svg​ (50.2 KB) - added by mdamt 8 years ago.

 
---
 
