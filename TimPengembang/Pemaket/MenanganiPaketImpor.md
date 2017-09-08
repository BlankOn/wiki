# MenanganiPaketImpor
## Mengimpor paket pertama kali
Berikut adalah langkah-langkah melakukan impor paket dari Ubuntu.
   1. Dapatkan URL paket di Launchpad Bentuk URL umumnya adalah ​https://
      launchpad.net/ubuntu/+source/<nama-paket>. Kunjungi halaman tersebut dan
      klik pada versi terakhir (ada paling atas). Di halaman versi tersebut
      dapat Anda jumpai bagian "Download". Salin URL patch Ubuntu (dengan
      akhiran nama diff.gz)
   2. Siapkan direktori kerja di komputer Anda, misalnya /tmp. Unduh dan
      ekstrak berkas patch tersebut.
      cd /tmp
      wget <url-diff.gz-barusan>
      gunzip -c <nama-berkas-diff.gz> | patch -p0
      Yang kita butuhkan hanyalah patch dari Ubuntu saja, dan bukan isi kode
      sumber paket aslinya (dengan nama <nama-paket.orig.tar.gz>.
   3. Anda akan dapatkan direktori baru bernama <nama-paket_nomor-versi-
      ubuntu>/
   4. Inisialisasikan bazaar di dalam direktori itu, masukkan semua berkas yang
      ada, dan lakukan commit.
      cd <nama-paket_nomor-versi-ubuntu>/
      bzr init --format=dirstate-tags
      bzr add *
      bzr commit -m "Impor awal"
   5. Ganti nama berkas debian/changelog menjadi debian/changelog.ubuntu dan
      masukkan ke dalam gudang kode juga
      bzr mv debian/changelog debian/changelog.ubuntu
   6. Sunting debian/changelog
      dch --create
      Gunakan penomoran versi yang benar. Lihat bagian "Penomoran Versi" pada
      dokumen Prosedur Pembuatan Paket?. Konfirmasikan kepada koordinator bila
      Anda ragu. Ganti nomor versi dan nama distro yang ada di dalam debian/
      changelog. Sebagai contoh pada paket gnome-desktop:
      gnome-desktop (1:2.19.6-0ubuntu1) gutsy; urgency=low
        * New upstream version
       -- Sebastien Bacher <seb128@canonical.com>  Mon, 30 Jul 2007 23:21:46
      +0200
        ... dan seterusnya hingga akhir berkas
      Diganti dan dipotong hingga menjadi ini saja:
      gnome-desktop (1:2.19.6-0ubuntu1-0blankon1) konde; urgency=low
        * Impor dari 1:2.19.6-0ubuntu1.
       -- Mohammad DAMT <mdamt@gnome.org>  Thu,  9 Aug 2007 03:07:32 +0300
          Perhatikan bahwa semua entri yang lama tidak perlu
          disimpan. Juga pastikan bahwa nomor versi Ubuntu aslinya
          jangan dirubah (Dalam contoh tetap 1:2.19.6-0ubuntu1).
   1. Simpan berkas tersebut dan lakukan commit.
      bzr add debian/changelog
      bzr commit -m "Memperbarui sejarah paket"
      bzr tag nama_tag
   2. Kirim ke gudang kode. Perhatikan bahwa tidak perlu mencantumkan nomor
      versi saat mengirim ke gudang kode.
      bzr push bzr+ssh://bzr@dev.blankonlinux.or.id/bzr/<nama_kode>/
      <nama_paket/
   3. Daftarkan nama Anda sesuai dengan paket yang dikelola di sini: ​http://
      dev.blankonlinux.or.id/wiki/<versi>/DaftarPaketImpor?. Ini sangat penting
      karena bila ada paket baru di Ubuntu maka Anda akan segera diberitahu.
## Bila ada perubahan di Ubuntu
   1. Siapkan kode sumber paket Anda yang sudah diimpor sebelumnya di direktori
      /tmp
      bzr branch <url-paket-anda-di-gudang-kode>
   2. Ambil dan ekstrak patch Ubuntu di /tmp, mirip seperti langkah impor baru
      di atas
      wget <url-patch-diff.gz>
      gunzip -c <nama-berkas-diff.gz> | patch -p0
   3. Ganti nama debian/changelog di dalam direktori paket ubuntu menjadi
      debian/changelog.ubuntu
      mv <direktori-paket-ubuntu_versi-sekian-sekian>/debian/changelog
      <direktori-paket-ubuntu_versi-sekian-sekian>/debian/changelog.ubuntu
   4. Lakukan perbandingan dengan kode sumber paket Anda
      diff -urN -x .bzr <direktori-paket-anda> <direktori-paket-ubuntu_versi-
      sekian-sekian> > perbedaan.txt
   5. Sunting berkas perbedaan.txt dan hapus bagian yang tidak perlu diubah,
      misalnya semua perubahan yang telah Anda lakukan sebelumnya.
   6. Gelar berkas perbedaan.txt yang telah Anda sunting tersebut pada kode
      sumber Anda
      cd <direktori-paket-anda>
      cat ../perbedaan.txt | patch -p1
   7. Catat nomor versi asli paket Ubuntu tersebut:
      head -1 debian/changelog.ubuntu
   8. Sunting debian/changelog Anda:
      dch -i
      Pastikan bahwa versi paket Anda juga mencantumkan nomor versi Ubuntunya.
   9. Tes paketnya dan bila sudah puas dengan paket ini, silakan dilepas ke
      pabrik paket.
Last modified on 08/08/2010 02:45:02 PM
#### 
    
 
 
 
 
 
---
 
