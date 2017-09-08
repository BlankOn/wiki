# ProsedurPembuatanPaket
Dokumen ini membahas prosedur pembuatan paket di BlankOn. Dokumen ini tidak
membahas bagaimana cara membuat_paket_Debian
## Ketentuan
Pemaket sudah:
   1. mendaftarkan kunci GPG ke launchpad atau ​menandatangani_Ubuntu_Code_of
      Conduct.
   2. mendaftarkan ​kunci_publik_SSH Anda di Launchpad.
   3. tergabung dalam tim blankon-pemaket di Launchpad.
   4. memahami ​cara_kerja_bazaar.
   5. memahami Pembuatan_paket_Debian.
## Lokasi Paket
Paket disimpan dalam gudang kode di bawah kendali blankon-pemaket. Lokasi
utamanya adalah: http://bazaar.launchpad.net/~blankon-pemaket/blankon/<nama-
paket>. Lokasi ini disebut juga dengan *cabang utama*. Jadi tiap-tiap paket
memiliki cabang utama sendiri-sendiri.
## Jenis paket
  Paket Ubuntu
      Paket yang ada di Ubuntu namun tidak dimodifikasi untuk BlankOn. Artinya
      BlankOn menggunakan paket tersebut apa adanya. Paket-paket ini tidak
      diproses oleh pabrik paket.
  Paket impor
      Paket yang diimpor dari proyek lain dan BlankOn memodifikasi paket
      tersebut.
  Paket impor Ubuntu
      paket yang diimpor dari Ubuntu.
  Paket impor non-Ubuntu
      paket yang diimpor dari proyek lain selain Ubuntu.
  Paket khas BlankOn
      Paket yang dibuat oleh pengembang BlankOn dan tidak terdapat pada
      repositori Ubuntu.
## Penomoran versi
#### Paket khas BlankOn dan paket impor non-Ubuntu
nama-paket_X.Y.Z-TblankonU
    * Gunakan kata "blankon" untuk menandakan paket blankon pada nomor
      versinya.
    * Versi X.Y.Z ditentukan oleh si pengembang.
    * Angka T diset ke angka 0.
    * Angka U menandakan versi revisi paket Debian.
    * Angka U dinaikkan bila ada perubahan pada paket (perubahan hanya terjadi
      di dalam direktori debian/ saja. Bila ada perubahan pada kode sumber maka
      naikkan versi X.Y.Z
#### Paket impor Ubuntu
nama-paket_X.Y.Z-TubuntuV+blankonW
    * Gunakan kata "blankon" untuk menandakan paket blankon pada nomor
      versinya.
    * Versi X.Y.Z-TubuntuV ditentukan oleh *upstream*.
    * Angka W menandakan versi revisi kode sumber.
    * Angka S menandakan versi revisi paket Debian.
    * Angka S dinaikkan bila ada perubahan pada paket (perubahan hanya terjadi
      di dalam direktori debian/ saja. Bila ada perubahan pada kode sumber,
      maka sertakan patch dan naikkan angka W.
Nomor versi juga digunakan sebagai tag saat mengirim_paket_ke_pabrik_paket.
## Prosedur Pembuatan Paket Baru
Skenario di bawah membahas pembuatan paket baru bernama paket blankon-abc.
Pastikan Anda memiliki kode sumber blankon-abc dengan semua isi berkasnya ada
dalam direktori bernama blankon-abc. Pastikan juga bahwa Anda sudah berhasil
membuat paket Debian blankon-abc di komputer Anda.
   1. Inisialisasikan bzr di paket Anda.
      cd blankon-abc
      bzr init --format=dirstate-tags
   2. Lakukan perubahan terhadap paket menurut kemauan Anda di sini...
   3. Setelah selesai simpan perubahan tersebut di komputer Anda dengan:
      bzr commit
      Tuliskan perubahan yang Anda lakukan dengan detil.
   4. Kembali ke langkah 2 bila Anda masih ingin melakukan perubahan.
   5. Coba bangun paket ini di komputer Anda.
   6. Bila Anda sudah puas dengan perubahan tersebut, simpan ke gudang kode
      dengan cara:
      bzr push bzr+ssh://bzr@dev.blankonlinux.or.id/bzr/kode-rilis/nama-paket/
   7. Selesai, paket sekarang sudah masuk ke gudang kode.
## Turut bergabung dalam pembuatan paket
Sekarang anggap Anda baru bergabung dalam pembuatan paket blankon-abc yang
sebelumnya sudah dilakukan oleh kawan Anda. Untuk turut berkontribusi maka yang
Anda lakukan adalah:
   1. Ambil salinan paket tersebut dari gudang kode:
      bzr branch http://dev.blankonlinux.or.id/bzr/kode-rilis/nama-paket/
   2. Lakukan perubahan terhadap paket menurut kemauan Anda di sini....
      Pastikan perubahan Anda tidak merusak paket tersebut.
   3. Setelah selesai simpan perubahan tersebut di komputer Anda dengan:
      bzr commit
      Tuliskan perubahan yang Anda lakukan dengan detil.
   4. Kembali ke langkah 2 bila Anda masih ingin melakukan perubahan.
   5. Coba bangun paket ini di komputer Anda.
   6. Bila Anda sudah puas dengan perubahan tersebut, simpan ke gudang kode
      dengan cara:
      bzr push bzr+ssh://bzr@dev.blankonlinux.or.id/bzr/kode-rilis/nama-paket/
   7. Selesai, paket sekarang sudah masuk ke gudang kode.
## Impor paket dari proyek lain
Bila Anda akan mengimpor paket dari proyek lain maka prinsipnya sama dengan
pembuatan paket baru. Tapi daftarkan alamat surat elektronik Anda pada berkas
daftar.txt di gudang kode dengan alamat ​https://code.launchpad.net/~blankon-
pemaket/blankon/pengelola-paket-impor.
KategoriPemaket
Last modified on 08/05/2010 10:21:28 PM
#### 
    
 
 
 
 
 
---
 
