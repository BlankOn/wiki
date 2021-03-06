Lokasi rapat: Google Meet

### Agenda

- Pidato dikit mengenai rencana ke depan (https://docs.google.com/presentation/d/1r0fkQ_B4ywa4c4LHwmWNZA_oe-CXzpF_gfL4EHo8NVE/edit?usp=sharing)
- Feedback/rapat
- Diskusi cara kerja pembuatan/pemeliharaan distribusi linux
- Laporan kondisi/kendala tim
- Usulan kelas lanjutan

### Catatan rapat

#### Bloker
 
- SDM pemaket belum siap, perlu kelas: pemaketan biasa, pemaketan kernel, cara penggunaan irgsh
  - Tanggal 6 hari jumat, 19.00 WIB
    - Pemaketan dasar dari sumber kode -> *.deb
- Live-build dari repo verbeek belum mulus, ETA pertengahan november

### Pekerjaan lain-lain

https://github.com/BlankOn/Verbeek/projects/1


## Ganjalan/kendala tim

### Pemaket
- SDM-nya belum jelas/belum dicolek lagi
- Perlu kelas pemaketan dasar lagi: https://github.com/BlankOn/Verbeek/issues/84

### Kesenian
- 3 orang siap (termasuk koor)
- Boleh start curang duluan mengacu ke https://github.com/BlankOn/blankon-tambora-kesenian

### Infrastruktur
- 3 orang termasuk koor
- Alokasi mesin untuk apa (?)
  - Infra comot daftar layanan dari https://github.com/BlankOn/wiki/blob/master/TimPengembang/Infrastruktur/DaftarMesin.md
  - Diskusikan mana yang layak untuk dilanjutkan, ajukan ke grup diskusi
  - Eksekusi
- Manajemen akses (?)
  - user deployment ( no sudo ), punya akses docker
  - ada docker-compose.yaml di home user tsb
  - docker-compose.yaml-nya taruh di repo (boleh di github, boleh di gitlab)
- SMTP terkendala reputasi IP, sedang diupayakan ganti IP: https://github.com/BlankOn/Verbeek/issues/79
- Perlu upayakan 500k per tahun untuk dapat jatah di data utama kembali, perlu colek Humas
- Kunjungan waljinah lagi terkait isu susulan akses terkunci: https://github.com/BlankOn/Verbeek/issues/74
- Kelas envoy untuk modernisasi infrastruktur: https://github.com/BlankOn/Verbeek/issues/85

### JK
- 2 orang termasuk koordinator
- Kendala di keterbatasan perangkat uji
- Webvirt ( jk.blankonlinux.or.id ), tunggu kredensial dari pak Samsul

### Dokumentasi
- 1 orang (koor)
- Rapikan
  - patokan yang mau dirapiin itu apa (?): missing link (bisa lihat dari build log docusaurus)
- Hidupkan dan pelihara lagi panduan.blankonlinux.or.id (laporan susulan ke Fans): https://github.com/BlankOn/Verbeek/issues/60
- Cara bekerja dengan wiki: fokus ke github, sunting langsung di antar muka web
  - Tanyain komitmen, coret-coret
  - Berikan akses penuh ke wiki buat yang masih komitmen

### Riset
- 2 orang (koor)
- Yang bisa bantu ketik2 (?): Pak Ervin
- Kelas pengenalan cara kerja irgsh dari perspektif juru kode: https://github.com/BlankOn/Verbeek/issues/86

### Humas
- Nyusul di grup


# Catatan Rapat susulan dari Tim Riset v Infrastruktur

- Mesin 
 - alynne 
   - butuh link lokal loss utk sync ke rani
   - untuk pbuilder (karena spek tinggi)
   - untuk jk.boi (jaminan kualitas)
 - rani
   - repo lama | url arsip.boi/uluwatu
   - repo verbeek | url arsip.boi/verbeek
   - repo verbeek dev | url arsip.dev.boi/verbeek
   - pbuilder - slave
   - irgsh - chief - ( pemaket - rani - alynne)
   - status hardisk ( cek sisa port hw dll ) 
  - waljinah
    - aktifkan domain wajah.blankon.id dan waljinah.boi
    - home , aktifkan nodejs-static , docker 
    - serambi, membuat tools , atur ulang template, koordinasi dengan tim kesenian , gunakan docker
  - Agenda Acara terdekat 
    - workshop refresh materi docker bersama tim riset dan infra pertengahan november, menunggu waktu pak estu 
    - workshop materi envoy , menunggu pak piko
