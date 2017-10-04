# Mengirim Paket ke Pabrik
    * URL: ​http://irgsh.blankonlinux.or.id
### Prosedur Login
   1. Buka ​http://irgsh.blankonlinux.or.id
   2. Klik ​Kirim_paket
   3. Anda akan mendapatkan sebuah password sekali pakai yang ditulis dalam
      pesan terenkripsi, contoh:
--BEGIN PGP MESSAGE-----
Version: GnuPG v1.4.6 (GNU/Linux)
hQIOAw0WMLTAAgjAEAf/SGx3DZK+pE0qw623PDP+2v80WapxWU1jb+xoh3cK8sHc
bqY/95Yft6WOI+2GMKuY2B3snJdYy+Y1mlZkouEyq/WgU6D8nMDtL1Cq2Z5y1kGA
fCCMiJ/dXhidJyh3BprSsLTAEHEvPt5numfLs1BkO3O2IYlxqkyfQ2rGlwTXMQiW
ozN0To/ObEpFohEtc1zwoB7PLP37LYpsSh15WP9a422sfk0y0XMU7CwcHvYRR6ts
7w9jw10iF1xX9E9oimChKKHXh53TlcdH6ZjlazwP+J8m0ib1gf4sraDTVd+YxZ49
uYmkvE8Y72Vr871MoayO5D2fxGqOKqghynIMK78Gqgf9GCpscvGIdhGwshuuOcGB
Zzr/ufZQSigWtl9LF7HZJ5ZePHvkOXZzz+corbKcS+jjJTBtyJbQ8YMgtswRMkxu
2jEE4Csm5MvkRvhTt2Yu249uo8M4mcOoCJcedllJgdUv/fnHJCz+MorOvoCC1vTE
vQorr+HgWOPh2+VqGhT/StkZ+btj1sqNpvq43jtb+li7BQNWh616hGtPCgZsoowt
xKwQzoNKu+guF0wfhZuK6Xi1qy9uLiHVk/0CGL6JFoEDoEbhtO/+3tXppNgwqA7o
3neaqjlqQ37q1cQUEudPuLmnvPRqS7wbDsHjfrHPzX+v3COami/0g0a4tn+D9GJW
rNLACgHequbr5IFlqFtInnE7jZ2mEeF6dYJkN9HfCfg3wxUGJowugXOV2uPU1LP6
t3aXE72n58ZihY45TLnIW0j5YIPqeK7SpEc/ifAAj5mt8K5IBZrvZKdFcDLjNTvu
K7toGb+W+4UM8I8e/zg6pA76kbiPm9Q6fZX5ariyDhQyc+3TY31/vM8QtwiDkpid
fZ3V6POr2cVEzRX2cfv40mI0feHLEmYTCctA2wRj5jXqupM5l3ZPPnoFdBAgo9bC
AERachcaS6LZfjtc/HQ=
=Hg4k
--END PGP MESSAGE-----
     Simpan dalam sebuah berkas, misalnya /tmp/oo.txt
   1. Buka pesan tersebut.
$ gpg -d < /tmp/oo.txt
     Jika Anda memang memiliki kunci yang sesuai, pesan tersebut akan
     terbuka.
Selamat Anda telah berhasil membaca pesan ini.
Kode login pemaket: 907625
Masukkan 6 digit kode pemaket di atas pada situs
pemaket BlankOn.
Selamat bekerja.
Ir. Robot Gedek, SH.
   1. Masukkan kunci sekali pakai tersebut pada kotak isian yang disediakan
      lalu klik tombol Lanjut
   2. Anda akan dibawa kembali ke halaman utama jika kode yang Anda masukkan
      benar.
### Mengirim Paket
   1. Buka ​http://irgsh.blankonlinux.or.id
   2. Klik ​Kirim_paket
   3. Ada 4 isian yang harus diisi:
         1. URL dari repositori bazaar
         2. Nama tag dari revisi cabang yang akan dibuat paketnya (pastikan
            sama dengan tag pada saat melakuan "bzr tag")
         3. URL paket asli dari berkas kode sumber paket (.orig.tar.gz), jika
            ada.
         4. Distro tujuan paket
   4. Isilah keempat isian di atas, lalu klik tombol Kirim
   5. Lakukan konfirmasi atas paket yang hendak akan Anda kirim, lalu klik
      tombol Lanjut
   6. Selamat! Anda sudah mengirim paket. Silakan tunggu email pemberitahuan
      atau pantau status paket Anda di http://irgsh.blankonlinux.or.id/jobs/
      [kode job] atau ​http://irgsh.blankonlinux.or.id/job-list/
Last modified on 09/15/2008 11:16:04 PM
#### 
    
 
 
 
 
 
---
 
