# Panduan Paket Impor - chromium-browser
Pengembangan Chromium dilakukan langsung dari gudang kode subversion milik
Google. Tidak ada rilis tertentu yang diterbitkan pengembang, jadi pemaket
harus membuat berkas orig.tar.gz sendiri.
## Membuat orig.tar.gz
    * Instal depot_tools
    * Buat direktori chromium-copy, dan masuk ke dalam direktori tersebut
    * Ikuti petunjuk ​inisialisasi_gudang_kode_chromium
    * Lakukan "gclient sync", tunggu hingga semua kode chromium tersedot di
      dalam direktori chromium-copy
    * Keluar dari direktori chromium-copy
    * Ambil paket debian chromium dari gudang kode BlankOn
    * Jalankan "debian/rules get-current-source LOCAL_BRANCH=/ke/lokasi/tempat/
      menyimpan/chromium-copy"
    * Jika berhasil akan diperoleh berkas chromium-
      browser_X.Y.Z~svnTTBBHHrZ.orig.tar.gz
          o X.Y.Z = nomor versi Chromium
          o TTBBHH = tahun, bulan, tanggal
          o rZ = r diikuti nomor revisi Chromium yang diperoleh dari hasil sync
            terakhir di atas
    * Unggah berkas orig.tar.gz tersebut ke situs Internet yang bisa diakses
      irgsh
    * Lakukan dch -i
    * Modifikasi nomor versi menjadi X.Y.Z~svnTTBBHHrZ-0blankon1 berdasarkan
      hasil pembuatan orig.tar.gz di atas
    * Simpan berkas changelog tersebut
    * bzr commit hasil perubahan changelog dan beri tag, dorong ke irgsh
    * Kirim paket ke pabrik seperti biasa
Last modified on 05/15/2010 01:23:55 PM

 
---
 
