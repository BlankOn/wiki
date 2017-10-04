# Panduan Pemasangan Syslog Instalasi

Syslog instalasi adalah berkas log debug yang berguna untuk memahami biang
kerok suatu kesalahan yang terjadi instalasi BlankOn alternate, tanpa bantuan
syslog akan sulit bagi pengembang untuk mencari pokok permasalahannya. Jadi
jangan lupa untuk menyertakan syslog apabila Anda melaporkan bugs mengenai
instalasi BlankOn alternate.

Berikut adalah contoh bagaimana cara mendapatkan syslog di alternate,
sebelumnya pastikan komputer yang akan diinstal BlankOn terhubungan dengan
jaringan. Pada contoh disini BlankOn diinstall di dalam Vmware yang terhubung
dengan komputer host dengan metode brigde.

  * Ketika tampilan error muncul silakan tekan tombol ESC 2x agar masuk ke
      menu utama Instalasi:
      [/raw-attachment/wiki/Dokumentasi/Panduan/Pemasangan/SyslogInstalasi/001-
      alternate-error.png]
  * Di menu utama silakan cari lalu pilih menu "Menyimpan log-log debug"
      [/raw-attachment/wiki/Dokumentasi/Panduan/Pemasangan/SyslogInstalasi/002-
      alternate-menu.png]
  * Log dapat Anda simpan ke dalam disket, Anda ambil melalui web atau
      melalui mount point. Saya sendiri biasanya memilih ambil melalui web saja
      karena sangat mudah.
      [/raw-attachment/wiki/Dokumentasi/Panduan/Pemasangan/SyslogInstalasi/003-
      alternate-logs.png]
  * Selanjutkan Anda akan diberi alamat ip untuk mengambil log-log debug itu
      berada.
      [/raw-attachment/wiki/Dokumentasi/Panduan/Pemasangan/SyslogInstalasi/004-
      alternate-web.png]
  * Masukkan alamat ip tsb pada browser di komputer host Anda lalu simpan.
      [/raw-attachment/wiki/Dokumentasi/Panduan/Pemasangan/SyslogInstalasi/005-
      alternate-browser.jpg]
  * Silakan attach syslog tersebut pada laporan bugs Anda.

Last modified on 02/02/2009 10:41:25 AM

#### Attachments (5)
  * 001-alternate-error.png​ (4.8 KB) - added by imtheface 8 years ago.
  * 002-alternate-menu.png​ (11.1 KB) - added by imtheface 8 years ago.
  * 003-alternate-logs.png​ (5.9 KB) - added by imtheface 8 years ago.
  * 004-alternate-web.png​ (5.3 KB) - added by imtheface 8 years ago.
  * 005-alternate-browser.jpg​ (60.8 KB) - added by imtheface 8 years ago.
 
---
 
