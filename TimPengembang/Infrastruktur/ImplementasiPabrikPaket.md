# Implementasi Pabrik Paket
## Cara Kerja
### Kode sumber
​https://code.launchpad.net/~blankon-infrastruktur/blankon/pabrik-paket
### Karakteristik
    * Minimalis, mengandalkan hanya http biasa.
    * Catatan dilakukan dalam berkas teks biasa.
    * Komunikasi antara induk dan cabang dilakukan secara pasif, melalui
      bantuan berkas teks biasa.
### Induk
Informasi yang diberikan:
Contoh saat ini, <url-dasar>nya adalah: ​http://irgsh.blankonlinux.or.id.
Induk membuat berkas kerja baru pada direktori jobs/<nomor-pekerjaan>/
jobdesc.txt. Isi berkas ini adalah informasi pekerjaannya, yaitu nama tag, url
di gudang kode, url paket asli dari Ubuntu (berkas .orig.tar.gz), dan
distribusi pekerjaan (misalnya konde-updates, konde-security, dsb).
#### Tugas Induk Utama
Tugas induk utama dikerjakan oleh skrip run-master.sh.
   1. Induk mengambil status semua cabang (mengunduh berkas status.txt) yang
      memiliki status bukan IDLE (lihat bagian *Pengecekan Hasil*), serta
      mengecek denyut nadi terakhir (berkas last-seen.txt). Bila cabang aktif
      kurang dari 2 jam yang lalu maka cabang dianggap masih aktif. Isi berkas
      status.txt menandakan apakah cabang sedang sibuk mengerjakan paket
      (berisi kata BUSY), selesai mengerjakan paket (berisi kata DONE atau
      ERROR) atau sedang menganggur (berisi kata IDLE). Bila cabang menganggur
      ke langkah 6.
   2. Induk memperbarui daftar paket siap bangun dari direktori queue, bila ada
      paket baru ke langkah 3. Bila tidak ada paket baru, induk mengisi semua
      berkas slaves/*/job.txt dengan kata NONE. Direktori queue adalah taut
      simbolik ke direktori pekerjaan jobs, namun pada direktori pekerjaan
      menggunakan tanda minus sebagai penghubung, misalnya pekerjaan di jobs/
      200711/0010 akan muncul di queue/ sebagai queue/<arsitektur>/200711-0010.
   3. Dari hasil langkah 1, induk menentukan cabang mana yang akan mengerjakan
      paket baru ini. Bila tidak ada cabang yang menganggur maka kembali ke
      langkah 1. Bila ada cabang yang menganggur induk segera menuliskan
      <nomor-pekerjaan> tadi di dalam berkas slaves/<nama-cabang>/job.txt. Itu
      tandanya cabang diberikan tugas untuk mengerjakan <nomor-pekerjaan>. Taut
      simbolik di direktori queue dihapus.
   4. Bila masih ada paket baru lagi yang belum dikerjakan kembali ke 2.
   5. Induk beristirahat selama beberapa saat (450 detik). Kembali ke 1.
#### Pengecekan Hasil
Pada bagian ini induk hanya mengecek semua paket yang telah selesai atau sedang
dikerjakan. Bagian ini dikerjakan oleh skrip get-result.sh
     Induk mengunduh berkas status.txt dari semua cabang.
     Bila berisi BUSY, induk mengunduh build-stage.txt.
     Bila berisi ERROR, induk mengunduh berkas build-log.txt.bz2. Induk
     kemudian menulis berkas slaves/<nama-cabang>/ack.txt dengan <nomor-
     pekerjaan>. Tujuannya supaya cabang tahu bahwa induk sudah mengetahui
     hasil kerja ini. Induk juga membersihkan status pekerjaan cabang
     dengan menulis kata NONE pada slaves/<nama-cabang>/job.txt. Terakhir,
     induk mengonfirmasi pekerjaan dengan menuliskan kata ERROR pada jobs/
     <nomor-pekerjaan>/<arsitektur>/status.txt sekaligus mengirim surat
     kepada pengirim paket.
     Bila berisi DONE, induk mengunduh berkas manifest.txt dan mengambil
     semua berkas yang tercantum dalam berkas manifest.txt ke dalam
     direktori incoming/<nama-cabang>, kemudian menulis berkas slaves/
     <nama-cabang>/ack.txt dengan <nomor-pekerjaan>. Tujuannya supaya
     cabang tahu bahwa induk sudah mengunduh semua hasil pekerjaannya.
     Induk juga membersihkan status pekerjaan cabang dengan menulis kata
     NONE pada slaves/<nama-cabang>/job.txt. Kemudian, induk menyetujui
     hasil kerja dengan menuliskan kata DONE pada jobs/<nomor-pekerjaan>/
     <arsitektur>/status.txt. Terakhir induk akan memasukkan semua hasil
     kerja ke repositori (Lihat bagian *Pengunggahan ke Repositori*)
#### Pengunggahan ke Repositori
Pengunggahan ke repositori dilakukan oleh bikin-arsip.sh.
   1. Skrip mencari semua berkas berakhiran .changes, dan dari tiap-tiap berkas
      tersebut diambil semua berkas yang tercantum di dalamnya dan dimasukkan
      ke dalam pool. Pabrik juga akan mengirim surat kepada pemaket yang
      mengirimkan paket (yang tercantum dalam debian/changelog) bahwa paket
      telah masuk ke repositori.
   2. Berkas Packages, Packages.gz, Release, dan Release.gpg dibuat ulang dalam
      masing-masing distribusi yang ada dalam repositori.
### Cabang
Informasi yang diberikan:
Contoh saat ini, <url-dasar>nya adalah: ​http://tempayan.blankonlinux.or.id/
#### Tugas induk utama
Tugas ini dikerjakan oleh berkas run-slave.sh.
   1. Bila status terakhir bukan IDLE maka cabang akan memeriksa apakah induk
      telah mengonfirmasi hasil pekerjaan sebelumnya (pada <url-induk>/slaves/
      arsitektur/<nama-cabang>/ack.txt). Bila berkas tersebut berisi nomor
      pekerjaan yang sama dengan nomor sebelumnya, maka semua berkas dalam
      direktori results/ akan dihapus.
   1. Bila IDLE cabang akan memeriksa apakah cabang sedang diistirahatkan atau
      tidak (dengan mengecek keberadaan berkas .slave-paused. Bila tidak,
      cabang akan mengambil berkas <url-induk>/slaves/<arsitektur>/job.txt.
         1. Bila berisi NONE maka tidak ada yang perlu dilakukan cabang.
         2. Bila berisi nomor pekerjaan baru, maka cabang akan mengambil berkas
            job-desc.txt dari induk dan memrosesnya (Lihat *Pemrosesan Paket*).
            Cabang juga mengisi berkas status.txt dengan kata BUSY.
               1. Bila pemrosesan paket berhasil (isi last-job-status.txt
                  berisi angka 0) maka cabang akan menyalin semua hasil
                  pemaketan dari pbuilder ke direktori results, kemudian
                  mendaftarkan semua berkas yang ada di direktori results ke
                  dalam berkas manifest.txt. Cabang juga mengisi berkas
                  status.txt dengan kata DONE.
               2. Bila gagal (isi last-job-status.txt berisi angka 1 atau 2)
                  maka cabang akan mengisi berkas status.txt dengan kata ERROR
                  dan mengompres berkas build-log.txt menjadi build-
                  log.txt.bz2.
#### Pemrosesan paket
Tugas ini dikerjakan oleh fungsi build_jobdesc pada berkas run-slave.sh.
   1. Mengunduh tag pada gudang kode.
   2. Memeriksa apakah kode distribusi pada debian/changelog sama dengan
      deskripsi yang telah diberikan melalui antarmuka web. Bila tidak sama,
      maka pemrosesan gagal dengan kode 2.
   3. Mengunduh tarball asli (bila ada). Tarbal diekstrak dan digabungkan
      dengan paket yang diunduh dari gudang kode yang telah dilakukan pada
      tahap 1.
   4. Membuat berkas .dsc dan .tar.gz dengan dpkg-source.
   5. Memperbarui lingkungan pembangunan di pbuilder (apt-get upgrade). Bila
      gagal, maka proses diberi kode 1.
   6. Melakukan pembangunan di pbuilder. Bila gagal, maka proses diberi kode 2.
*** Kode hasil pemrosesan paket ***
     0 Paket sukses dibuat
     1 proses pemaketan gagal tapi dapat diulangi (ada kesalahan kecil di
     repositori atau tag atau url)
     2 berarti proses pemaketan gagal dan tidak dapat diulangi, artinya
     pemaket harus membuat tiket baru.
## Implementasi dan instalasi
    * Pabrik Induk?
    * Pabrik_Cabang
KategoriInfra
Last modified on 06/17/2008 12:23:18 AM
#### 
    
 
 
 
 
 
---
 
