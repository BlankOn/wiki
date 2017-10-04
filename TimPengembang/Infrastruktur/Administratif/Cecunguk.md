# Cecunguk
Halaman ini menjelaskan tentang akun di cecunguk.blankonlinux.or.id.

## Fasilitas
  * Shell via SSH
  * Hosting web pada alamat ​http://cecunguk.blankonlinux.or.id/~namapengguna

## Batasan
  * Otentikasi SSH tidak mengizinkan penggunaan sandi, tapi hanya menggunakan
      kunci publik SSH

## Persyaratan
  * Calon pengguna harus punya akun Launchpad
  * Kunci SSH sudah masuk ke Launchpad

## Proses pembuatan akun
  * Buat akun dengan adduser
      `# adduser namapengguna`
  * Pasang kunci SSH
      `# ~irgsh/utils/update-ssh.sh namapengguna namapengguna-di-launchpad`
  * akun siap digunakan

## Proses pembaruan kunci SSH
  * Lakukan
      `# ~irgsh/utils/update-ssh.sh namapengguna namapengguna-di-launchpad`
  * Kunci SSH yang sudah ada akan diganti dengan kunci baru dari Launchpad

## Proses pembaruan kunci SSH yang sudah ada sebelumnya
  * tambahkan "1" pada akhir perintah update-ssh.sh
      `# ~irgsh/utils/update-ssh.sh namapengguna namapengguna-di-launchpad 1`

## Menggunakan hosting web
  * Masukkan semua berkas yang hendak diakses dari web pada direktori www

KategoriInfra
Last modified on 06/17/2008 12:13:04 AM

---
 
