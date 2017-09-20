# Pabrik Paket Otomatis
## Tantangan BlankOn 2009

**Pendahuluan**

Ubuntu mensyaratkan semua distribusi turunannya untuk melakukan rebranding atau
pengalihan merek, dalam arti tidak boleh menggunakan kata dan logo Ubuntu.
Untuk keperluan ini, maka tiap paket yang memiliki logo Ubuntu harus diganti
dengan logo BlankOn. Saat ini para pemaket dialokasikan untuk menangani paket-
paket semacam ini. Pekerjaan yang dilakukan pemaket kadang membosankan karena
hanya mengganti logo saja dan harus siap sedia memerbarui paket di BlankOn bila
paket Ubuntu terbit.


**Tantangan**

Perlu ada pabrik paket otomatis yang bekerja saat paket yang dimaksud
diterbitkan di Ubuntu. Pabrik ini kemudian mengganti logo Ubuntu menjadi logo
BlankOn dan mengirimkannya ke pabrik paket hingga masuk ke repositori BlankOn.
Pabrik harus dapat bekerja mandiri tanpa campur tangan manusia.


**Persyaratan**

Peserta wajib mengerti konsep paket, repositori dan cara pengembangan di
Debian.


**Kriteria keberhasilan**

Tantangan dianggap berhasil bila memenuhi 100% dari kriteria wajib dan 80% dari
kriteria tambahan


**Wajib**

   1. Pabrik paket dibuat dengan rancangan yang sederhana, mudah diinstal dan
      dijalankan
   2. Menggunakan bahasa pemrograman skrip Python atau skrip shell
   3. Bila menggunakan basis data, hanya boleh menggunakan sqlite
   4. Dirancang untuk dapat diinstal pada lebih dari 1 komputer
   5. Dirancang untuk dapat bekerja begitu ada paket baru dari Ubuntu
   6. Terdokumentasi penuh, mulai dari rancangan hingga cara pakai


