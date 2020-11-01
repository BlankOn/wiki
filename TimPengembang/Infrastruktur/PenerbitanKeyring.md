# Penerbitan Keyring

Keyring mengizinkan penyimpanan kunci (biasanya kunci publik) dalam format yang cukup portabel. Keyring dapat disuntikkan ke sistem operasi dengan tujuan sistem operasi nantinya akan mempercayai (trust) benda-benda yang telah ditandatangani oleh kunci privat pasangannya (misalnya paket atau berkas `Release` dari lumbung).

Mengenai penerbitan kunci untuk keyring, lihat https://github.com/BlankOn/wiki/blob/master/TimPengembang/Infrastruktur/PenerbitanKunciLumbung.md .

Paket keyring yang diterbitkan ada 2 jenis, yaitu:

## blankon-keyring

https://github.com/blankon-packages/blankon-keyring

Wajib. Keyring yang dipaketkan ke paket ini adalah keyring dari kunci turunan yang digunakan untuk menandatangani lumbung. Paket ini perlu disiapkan setelah lumbung dibuat dan disuntikkan paling awal ke lumbung.

## blankon-role-keyring

https://github.com/blankon-packages/blankon-role-keyring

Tidak wajib. Diterbitkan untuk mengadaptasi keyring baru (perlu penjelasan lebih lanjut)
